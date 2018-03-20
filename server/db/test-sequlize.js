const Reserva = require('./model/Reserva').Reserva;
const Disertante = require('./model/Disertante').Disertante;

const disertante = Disertante.build({nombre: 'Emilio',apellido:'Melo',email:'emiliops@gmail.com'});

console.log(disertante);
// const reserva = Reserva.build();

// diser.save().catch(error => {
//     console.log(error)
// })

