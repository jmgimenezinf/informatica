import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
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
         <Row>
            <Col s={9} l={12} m={6}>
                 <TesinasEnDesarrollo/>
            </Col>            
        </Row>
        <Row className="grey lighten-3 galaxya ampliar z-depth-4">
            <section>
                <Col offset="l1" l={11}>
                        <h3 className="blue-text">Tesinas</h3>
                </Col>
                <Col offset="l1"l={7}>
                        <div className="black-text"><TesinasHtml/></div>
                </Col>
            </section>
        </Row>
        <Row>
            <Col className="grey lighten-3"s={12} l={12} m={12}>
                <TesinasAprobadas/>
            </Col>
        </Row>
       
    </Row>
    );
  }
}

export default Tesinas;
