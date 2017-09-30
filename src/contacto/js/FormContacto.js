import React, { Component } from 'react';
import {Row,Col,Card,Input} from 'react-materialize';

class FormContacto extends Component {
render() {
  return (
          <Col m={12} s={12} l={12} className="opaco" >
                    <Input className="texto" l={4} label="Nombre" />
                    <Input l={4} label="Apellido" />
                    <Input type="email" label="Email" l={4} />      
          </Col>
  );
  }
}
export default FormContacto;
