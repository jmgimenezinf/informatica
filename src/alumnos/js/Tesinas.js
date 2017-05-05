import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Card,CardTitle,CardPanel} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TesinasAprobadas from './TesinasAprobadas'
import TesinasEnDesarrollo from './TesinasEnDesarrollo'
import TesinasHtml from '../html/TesinasHtml'
class Tesinas extends Component {
  render() {
    return (
        <Row>
        <Row className="container">

            <Col s={3} l={12} m={6}>
                <h3 className="blue-text center-align">Tesinas aprobadas</h3>
            </Col>
            <Col s={9} l={12} m={12}>
                <TesinasAprobadas/>
            </Col>
        </Row>
        <Row className="blue darken-2 z-depth-4">
            <section className="blue">
            <Col s={12} l={12} m={12}>
                <h3 className="lime-text">Tesinas</h3>
            </Col>
            <Col l={6}>
                <div className="white-text"><TesinasHtml/></div>
            </Col>
            </section>
        </Row>
        <Row>
            <Col s={3} l={12} m={6}>
                <h3 className="blue-text center-align">Tesinas en desarrollo</h3>
            </Col>
            <Col s={9} l={12} m={6}>
                 <TesinasEnDesarrollo/>
            </Col>            
        </Row>
    </Row>
    );
  }
}

export default Tesinas;
