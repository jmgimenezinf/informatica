function Reserva(fechaSolicitud,evento){
    this.fechaSolicitud = fechaSolicitud;
    this.estadoReserva = "Solicitada";
    this.evento = evento;
}

Reserva.prototype.setEstadoReserva = void function(estadoReserva) {
     this.estadoReserva = estadoReserva;
};
Reserva.prototype.setEvento = void function(evento){
    this.evento = evento
}

Reserva.prototype.toString = void function(){
    console.log("Fecha solicitud: " + this.fechaSolicitud + "estadoReserva: " + this.estadoReserva +
    "Evento: " + this.evento);
}


module.exports = Reserva;