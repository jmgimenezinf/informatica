import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import  '../css/inicio.css';
import Novedades from '../../novedades/js/Novedades';
import Figure from './Figure';
import Carreras from './Carreras';
import Gestion from './Gestion';
import '../css/boton.css'
class Inicio extends Component {
render() {
  return (
      <div>
      <Row>
        <Col l={12}  className="blue lighten-5 parallax">
            <Col l={3} m={3}s={12} className="polarizado-inicio">
                <Novedades/>
            </Col>
            <Col l={9} m={9} s={12} className="polarizado-inicio ocultar">
                    <h2 className="white-text left-align">Departamento de Informática </h2>            </Col>
        </Col>
        <div className="breaker-inicio ocultar"/>
      </Row>
      <Row>
        <Col l={12} m={12} s={12} className="carreras">
            <h4 className="center-align titulo">Carreras</h4>
            <div className="separador"></div>
        </Col>
        <Carreras/>
        <Col l={12}  m={12} s={12} offset="l5 m3 s3">
                <a href="/planes-de-estudio" className="boton w3-container w3-center w3-animate-top">Planes de estudios</a>
        </Col>
      </Row>
      {/*<Row>
        <Col l={12}>
            <h5 className="center-align subtitulo">"La gestión de las carreras incluye no solamente la docencia, sino también las actividades de investigación y 
                de extensión, que fortalecen la vinculación con la sociedad"</h5>
        </Col>
        <Gestion/>
        <Col l={12} offset="l5">
        </Col>
      </Row>*/}
      <Row>
        <Col l={12}>
            <h4 className="center-align titulo">Nuestras sedes</h4>
            <div className="separador"></div>
            <Figure/>
        </Col>
      </Row>
      </div>
  );
}
}

export default Inicio;
