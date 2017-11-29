import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TesinasAprobadas from './TesinasAprobadas'
import TesinasHtml from '../html/TesinasHtml'
import '../css/card.css'
class Tesinas extends Component {

  render() {
    return (
        <Row>
         <Row className="container">
            <Col l={12}>
                <h4 className="blue-text titulo center-align">Tesinas</h4>
                <div className="separador"></div>
            </Col>         
        </Row>
        <Row className="grey lighten-5 galaxya ampliar z-depth-4">
            <section>
                <Col offset="l2"l={7}>
                        <div className="black-text"><TesinasHtml/></div>
                </Col>
            </section>
        </Row>
        <Row>
            <Col l={12} m={12} s={12} className="carreras">
                <h4 className="center-align titulo">Repositorio de tesinas</h4>
                <div className="separador"></div>
            </Col>
            <Col className="grey lighten-3"s={12} l={12} m={12}>
                <TesinasAprobadas/>
            </Col>
            <Col l={12}  m={12} s={12} offset="l5 m3 s3">
                <a href="http://manolito:8080/tesinas-pdf" className="boton-descarga w3-container w3-center w3-animate-top">Descargar PDF</a>
            </Col>
        </Row>
       
    </Row>
    );
  }
}

export default Tesinas;
