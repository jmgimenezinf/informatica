import React, { Component } from 'react';
import {Col,Card,CardTitle} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/tesinasEnDesarrollo.css"
import Tarjeta from "./Card.js"
import "../css/card.css"
function listTesinas(){
    
    return <ul>

    </ul>
}
class TesinasEnDesarrollo extends Component {
  render() {
    var settings = {
        dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
      autoplay:true
    };
    return (
        <Col s={12}>
            <Slider {...settings}>
                <div>
                    <Tarjeta titulo="mi tesina"/>
                </div>
                <div>
                    <Tarjeta titulo="mi tesina"/>
                </div>
            </Slider>
        </Col>
    );
  }
}

export default TesinasEnDesarrollo;
