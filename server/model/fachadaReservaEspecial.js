const Session = require('../db/sessionFactory').Session;
const Reserva = Session.import('../db/models/reserva');
const Disertante = Session.import('../db/models/disertante');
const Evento = Session.import('../db/models/evento_calendar');

Reserva.belongsTo(Disertante)
Disertante.hasMany(Reserva)
Reserva.hasMany(Evento)
Evento.belongsTo(Reserva)


function reservar(titulo,disertante,eventos){
    Disertante.findOrCreate({where:{nombre:disertante.nombre,apellido:disertante.apellido,email:disertante.email}}).spread((disertanteCreado, creado) => {
        Reserva.create({titulo:titulo,disertanteIdDisertante:disertanteCreado.idDisertante}).then((reserva)=>{
            eventos.forEach(function(evento) {
                Evento.create({evento_calendar:evento.evento_calendar,reservaIdReserva:reserva.idReserva});
              })    
        });
    })
}