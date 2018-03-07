import React, { Component } from 'react';
import {Row, Col, Input} from 'react-materialize';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';


class Solicitud extends Component {


    
    componentDidMount() { 
        window.$('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
        });
        window.$('.timepicker').pickatime({
            default: 'now',
            twelvehour: false, // change to 12 hour AM/PM clock from 24 hour
            donetext: 'OK',
          autoclose: false,
          vibrate: true // vibrate the device when dragging clock hand
        });
    }

    render() {
        return (
            <div>  
                <Row>
                    <Col offset="l4" l={6}>
                        <InputNombre/>
                        <InputApellido/>
                    </Col>
                </Row>
                <Row>
                    <Col offset="l4" l={8}>
                        <Input type="email" label="Email" l={6}/>
                    </Col>
                </Row>
                <Row>
                    <Col offset="l4" l={8}>
                        {/* <RichEdit/> */}
                        <Input label='Motivo' type='textarea' l={6}/>
                    </Col>
                </Row>
                <Row>
                    <Col offset="l4" l={12}>
                        <Input name='on' label='Fecha' className="datepicker"  type='date' l={2} onChange={function(e, value) {}} />
                        <Input name='on' label='Hora de finalización' className="timepicker" type='time' l={2} onChange={function(e, value) {}} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Solicitud;