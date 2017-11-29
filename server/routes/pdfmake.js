var PDFDocument, doc;
var fs = require('fs');
var PdfTable = require('voilab-pdf-table'),
PDFDocument = require('pdfkit');
const MongoClient = require('../mongo-conect.js').MongoClient;
const URL = require('../mongo-conect.js').URL;

var pdf = new PDFDocument({
    autoFirstPage: false
}),
table = new PdfTable(pdf, {
    bottomMargin: 200
});

table
// add some plugins (here, a 'fit-to-width' for a column)
.addPlugin(new (require('voilab-pdf-table/plugins/fitcolumn'))({
    column: 'titulo'
}))
// set defaults to your columns
.setColumnsDefaults({
    headerBorder: 'B',
    align: 'center'
})
// add table columns
.addColumns([
    {
        id: 'titulo',
        header: 'Título',
        align: 'center'
    },
    {
        id: 'alumnos',
        header: 'Alumnos',
        width: 100,
        align: 'center'
    },
    {
        id: 'tutor',
        header: 'Tutor',
        width: 100,
        align: 'center'
    },
    {
        id: 'fecha_defensa',
        header: 'Fecha de Defensa',
        width: 100,
        align: 'center'
    }
])
// add events (here, we draw headers on each new page)
.onPageAdded(function (tb) {
    tb.addHeader();
});


// if no page already exists in your PDF, do not forget to add one
pdf.addPage();


function fecha(fechaString){
    var fecha = new Date(fechaString);  
    return fecha.getDate() + "/"+fecha.getMonth()+"/"+fecha.getFullYear();
}
// draw content, by passing data to the addBody method
MongoClient.connect(URL, function(err, db) {
    if (err) return

    var collection = db.collection('tesinas')
            collection.find().toArray(function(err, docs) {
            var docsMap = docs.map(function(tesina){
               return  {titulo: tesina.titulo, alumnos: [].concat(tesina.alumnos), tutor:tesina.tutor, fecha_defensa:fecha(tesina.fechaDefensa)}
            })
            table.addBody(docsMap);
            pdf.pipe(fs.createWriteStream('output.pdf'));
            pdf.end();
            db.close()
        })
})





