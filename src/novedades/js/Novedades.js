import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-materialize';
import  NovedadesHtml from '../html/NovedadesHtml'
class Novedades extends Component {
  render() {
    return (
        <Row className="container">
          <Col s={12} l={12} m={12}>
              <h3 className="blue-text">Novedades</h3>
          </Col>
          <Col s={12} l={12} m={12}>
              <NovedadesHtml/>
          </Col>
        </Row>
    );
  }
}

export default Novedades;
