import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import  AutoridadesHtml from '../html/AutoridadesHtml'
class Autoridades extends Component {
  render() {
    return (
        <Row className="container">
          <Col s={12} l={12} m={12}>
              <h3 className="blue-text">Autoridades</h3>
          </Col>
          <Col s={12} l={12} m={12}>
              <AutoridadesHtml/>
          </Col>
        </Row>
    );
  }
}

export default Autoridades;
