import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-materialize';
import  InicioHtml from '../html/InicioHtml';
class Inicio extends Component {

  render() {
    return (
        <Row className="container">
          <Col s={12} l={12} m={12}>
              <h3 className="blue-text">{this.props.titulo}</h3>
          </Col>
          <Col s={12} l={12} m={12}>
              <InicioHtml/>
          </Col>
        </Row>
    );
  }
}

export default Inicio;
