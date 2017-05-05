import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Card,CardTitle,CardPanel} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TesinasAprobadas from './TesinasAprobadas'
import TesinasEnDesarrollo from './TesinasEnDesarrollo'
import TesinasHtml from '../html/TesinasHtml'
import '../css/card.css'
class Tesinas extends Component {
  render() {
    return (
        <Row>
        <Row  className="brown lighten-4">

            <Col className="grey lighten-3"s={12} l={12} m={12}>
                <TesinasAprobadas/>
            </Col>
        </Row>
        <Row className="galaxya">
            <section>
            <Col s={12} l={12} m={12} className="center-align">
                <h3 className="white-text">Tesinas</h3>
            </Col>
            <Col l={12}>
                <div className="white-text"><TesinasHtml/></div>
            </Col>
            </section>
        </Row>
        <Row>
            <Col s={9} l={12} m={6}>
                 <TesinasEnDesarrollo/>
            </Col>            
        </Row>
    </Row>
    );
  }
}

export default Tesinas;
