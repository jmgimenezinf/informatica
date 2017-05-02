import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Card,CardTitle,CardPanel} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class TesinasEnDesarrollo extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
            <Slider {...settings}>
                <div>
                    <Card header={<CardTitle reveal waves='light'/>}
                    title="Herramienta para la representacion XML de un modelo fisico de datos"
                    reveal={<p>
                        Alumnos	Dario JENKINS
                        Tutor	Rodolfo BERTONE
                        Fecha de defensa	06/08/2004
                        Estado	Aprobada</p>}>
                    </Card>
                </div>
                <div>
                    <Card header={<CardTitle reveal waves='light'/>}
                    title="Herramienta para la representacion XML de un modelo fisico de datos"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    </Card>
                </div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider>
    );
  }
}

export default TesinasEnDesarrollo;
