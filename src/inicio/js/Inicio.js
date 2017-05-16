import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-materialize';
import  InicioHtml from '../html/InicioHtml';
import  InicioHtml1 from '../html/InicioHtml1';
import  InicioHtml2 from '../html/InicioHtml2';
import  '../css/inicio.css';
import Novedades from '../../novedades/js/Novedades';
import breakerBotton from '../images/breaker-bottom.svg';
import breaker from '../images/breaker.svg';
import Figure from './Figure';
import Carreras from './Carreras';

class Inicio extends Component {
render() {
  return (
      <Row>
          <Col l={3} m={3}s={12} className="white">
              <Novedades/>
          </Col>
          <Col l={9} m={9} s={12} className="z-depth-1">
            <Col l={12}>
                <h3 className="blue-text left-align">Departamento de Informática</h3>
                <InicioHtml1/>
            </Col>
            <Col l={12}>
                <h5 className="center-align titulo">¿Dónde estamos?</h5>
                <Figure/>
            </Col>
            <Col s={12} l={12} m={12}>
                <InicioHtml2/>
            </Col>
          </Col>
      </Row>
  );
}
}

export default Inicio;
