import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-materialize';
class Docentes extends Component {
  render() {
    return (
        <Row>
          <Col s={2} l={2} m={2}>
           <ul>
                <li><h4>Docentes</h4></li>
                <li><h4>Catedras</h4></li>
                <li><h5>primer año</h5></li>
                <li><h5>segundo año</h5></li>
                <li><h5>tercer año</h5></li>
                <li><h5>cuarto año</h5></li>
                <li><h5>quinto año</h5></li>
           </ul>
          </Col>
          <Col s={10} l={10} m={10}>
              <ul>
                <li>dasdasd</li>
                <li>dasdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>dasdasd</li>
           </ul>
          </Col>
        </Row>
    );
  }
}

export default Docentes;
