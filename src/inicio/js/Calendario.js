import React, { Component } from 'react';
import {Modal,Button} from 'react-materialize';
class Calendario extends Component {
render() {
  return (
    <div>
        <Modal
            className="myModal"
            header={<span className="novedad-text">Calendario</span>}
            fixedFooter
            trigger={
               <Button floating large className='red' waves='light' 
            icon={<i className="fa fa-calendar" aria-hidden="true"></i>}>
            </Button>
            }>
            asdasd
        </Modal>
    </div>
    
  );
}
}

export default Calendario;