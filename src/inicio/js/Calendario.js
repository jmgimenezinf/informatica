import React, { Component } from 'react';
import {Modal,Button, Icon} from 'react-materialize';
import Iframe from 'react-iframe'
import '../css/calendario.css'
import FormSolicitud from '../../reserva/js/Solicitud'
class Calendario extends Component {
render() {
  var styleCalendario ={
    position:"relative",
    width:"100%",
    height:"100%",
  };  
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
            {/* <Iframe url="https://calendar.google.com/calendar/embed?src=fd7mr7mrcjct59asoqkr85ldl0%40group.calendar.google.com&ctz=America/Argentina/Buenos_Aires" 
                    display="initial"
                    position="relative"
                    style={styleCalendario}
                    allowFullScreen/> */}
        </Modal>
    </div>
    
  );
}
}

export default Calendario;
