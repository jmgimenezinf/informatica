import React, { Component } from 'react';
import {Modal,Button} from 'react-materialize';
import Iframe from 'react-iframe'
import '../css/calendario.css'
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
            header={<span className="novedad-text">Calendario</span>}
            fixedFooter
            trigger={
               <Button floating large className='white' waves='light' 
            icon={<i className="fa fa-calendar" aria-hidden="true"></i>}>
            </Button>
            }>
            <Iframe url="https://calendar.google.com/calendar/embed?src=fd7mr7mrcjct59asoqkr85ldl0%40group.calendar.google.com&ctz=America/Argentina/Buenos_Aires" 
                    display="initial"
                    position="relative"
                    style={styleCalendario}
                    allowFullScreen/>
        </Modal>
    </div>
    
  );
}
}

export default Calendario;
