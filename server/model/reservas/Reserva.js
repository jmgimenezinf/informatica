import {EstadoEnCarga,EstadoSolicitada,EstadoRechazada,EstadoConfirmada,EstadoCancelada} from './EstadoReserva';

class Reserva {
    constructor(fechaHoraReserva,estadoReserva,calendario) {
      this.calendario = calendario;
      this.fechaHoraReserva = fechaHoraReserva;
      this.estadoReserva = estadoReserva;
      this.eventos = [];
    }
    agregarEvento(evento){
      this.eventos.push(evento);
    }
    quitarEvento(evento){
      null;
    }
    solicitarReserva(evento){
      this.agregarEvento(evento);
    }
   
}

export default Reserva;