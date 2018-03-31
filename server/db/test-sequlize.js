const Session = require('./sessionFactory').SessionFactory;

const Reserva = Session.import('./models/reserva');
const Disertante = Session.import('./models/disertante');
const Evento = Session.import('./models/evento_calendar');


Reserva.belongsTo(Disertante)
Disertante.hasMany(Reserva)

Reserva.hasMany(Evento)
Evento.belongsTo(Reserva)

// Reserva.findAll().then(reservas =>{
//     console.log(JSON.stringify(reservas))
// })
Reserva.findAll({ include: [ Disertante]}).then(reservas => { 
    console.log(JSON.stringify(reservas))
});

Disertante.findOrCreate({where:{nombre:'juan',apellido:'perez',email:'perez@gmail.com'}}).spread((disertante, creado) => {
    Reserva.create({disertanteIdDisertante:disertante.idDisertante}).then((reserva)=>{
            Evento.create({evento_calendar:'123',reservaIdReserva:reserva.idReserva});
    });
});


// console.log(disertante.get({
//     plain: true
//   }))

// Disertante.findAll({ include: [ Reserva] }).then(tasks => {
//     console.log(JSON.stringify(tasks))
// console.log(disertante);
// const reserva = Reserva.build();

// diser.save().catch(error => {
//     console.log(error)
// })

// });

