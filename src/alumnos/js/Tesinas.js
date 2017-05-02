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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Row className="container">
            <Col s={12} l={12} m={12}>
                <h3 className="blue-text">Tesinas</h3>
            </Col>
            <Col>
                <TesinasHtml/>
            </Col>
            <Col s={3} l={6} m={6}>
                <h3 className="blue-text">Tesinas aprobadas</h3>
            </Col>
            <Col s={9} l={6} m={12}>
                <TesinasAprobadas/>
            </Col>
            <Col s={3} l={6} m={6}>
                <h3 className="blue-text">Tesinas en desarrollo</h3>
            </Col>
            <Col s={9} l={6} m={6}>
                 <TesinasEnDesarrollo/>
            </Col>
        </Row>
    );
  }
}

export default Tesinas;
