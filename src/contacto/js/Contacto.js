import React, { Component } from 'react';
import {Row,Col,Card} from 'react-materialize';
import '../css/contacto.css';
import FormContacto from './FormContacto'; 
import RichEdit from '../../componentes/js/RichEdit';
class Contacto extends Component {

render() {
  return (
    <Row className="contacto">
        <Col l={12} className="polarizado">
          <Col s={12} className="blue-text">
            <h2>Contacto</h2>
          </Col>
          <Col m={12} s={12} l={8} >
            <Col m={12} s={12} l={12}>
              <FormContacto /> 
            </Col>
            <Col m={12} s={12} l={12}>
              <RichEdit/>
            </Col>
          </Col>
        </Col>
    </Row>
  );
  }
}

export default Contacto;
