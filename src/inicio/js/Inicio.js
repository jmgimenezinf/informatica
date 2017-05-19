import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-materialize';
import  InicioHtml from '../html/InicioHtml';
import  InicioHtml1 from '../html/InicioHtml1';
import  InicioHtml2 from '../html/InicioHtml2';
import  '../css/inicio.css';
import Novedades from '../../novedades/js/Novedades';
import Figure from './Figure';
import Carreras from './Carreras';
import Gestion from './Gestion'
class Inicio extends Component {
render() {
  return (
      <div>
      <Row>
          <Col l={3} m={3}s={12} className="blue lighten-5">
              <Novedades/>
          </Col>
          <Col l={9} m={9} s={12} className="blue lighten-5">
            <Col l={12}>
                <h3 className="blue-text left-align">Departamento de Informática</h3>
                <InicioHtml1/>
            </Col>
            {/*<Col s={12} l={12} m={12}>
                <InicioHtml2/>
            </Col>*/}
          </Col>
      </Row>
      <Row>
        <Col l={12}>
            <h3 className="center-align titulo">Carreras</h3>
        </Col>
        <Carreras/>
      </Row>
      <Row>
        <Col l={12}>
            <h5 className="center-align subtitulo">"La gestión de las carreras incluye no solamente la docencia, sino también las actividades de investigación y 
                de extensión, que fortalecen la vinculación con la sociedad"</h5>
        </Col>
        <Gestion/>
      </Row>
      <Row>
            <Col l={12}>
                <h3 className="center-align titulo">Nuestras sedes</h3>
                <Figure/>
            </Col>
      </Row>
      </div>
  );
}
}

export default Inicio;
