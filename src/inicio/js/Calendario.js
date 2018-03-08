import React, { Component } from 'react';
import {Modal,Button, Icon} from 'react-materialize';
import '../css/calendario.css'
import FormSolicitud from '../../reserva/js/Solicitud';
import Calendar from '../../componentes/js/Calendar';
class Calendario extends Component {
render() {

  return (
    <div>
        <Modal
            className="myModal"
            header={
              <div>
                <span className="novedad-text">Calendario</span>
                <Button 
                  id="btnSolicitud" 
                  waves='light'
                >
                Solicitar reserva
                <Icon left large>add_circle_outline</Icon>
                </Button>
              </div>
            }
            fixedFooter
            trigger={
               <Button floating large className='white' waves='light'>
               <Icon className="fa fa-calendar" left large></Icon>
            {/* icon={<i className="fa fa-calendar" aria-hidden="true"></i>} */}
            </Button>
            }
        >
          <FormSolicitud/>

            {/* <Calendar/> */}
        </Modal>
    </div>
    
  );
}
}

export default Calendario;
