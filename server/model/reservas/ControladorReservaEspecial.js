class ControladorReservaEspecial {
    constructor(reserva,eventos,calendario){
        this.eventos = evento;
        this.reserva = reserva;
    }

    reservar(){
        reserva.estadoReserva = new EstadoEnCarga();
        this.eventos.forEach(function(evento) {           
            if (this.calendario.estaDisponible(evento)) {
                return this.reserva.solicitarReserva(this.evento);
            }else {
                return {disponible : false};
            }
        });
    }

}

export default ControladorReservaEspecial;