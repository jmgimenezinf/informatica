import React, { Component } from 'react';
import {Col,Card,CardTitle} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/tesinasEnDesarrollo.css"
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
                <div>
                    <Col l={12} s={12}>
                    <Card className="z-depth-4 red small tarjeta1" header={<CardTitle reveal waves='light'/>}
                    title={<div className="white-text center-align">	Monitoreo y seguimiento mediante Smartwatch</div>}
                    reveal={<div className="blue"><p>
                        Alumnos	Pablo ROSALES, Alejandro VEGA<br/>
                        Tutor	Cárlos DE MARZIANI, José GALLARDO <br/>
                        Fecha de defensa	10/02/2017
                        </p></div>}>
                    </Card>
                    </Col>
                </div>
                </div>
                <div>
                <div>
                    <Col l={12} s={12}>
                    <Card className="z-depth-4 green small tarjeta2" header={<CardTitle reveal waves='light'/>}
                    title={<div className="black-text center-align">Implementación de una aplicación, bajo el modelo SAAS, para una PyME en un entorno de CLOUD COMPUTING</div>}
                    reveal={<div className="blue"><p>
                        Alumnos	Andrea KRAAN, Omar Javier SOTO <br/>
                        Tutor	José GALLARDO, Néstor LLAUCO <br/>
                        Fecha de defensa	23/02/2017
                        </p></div>}>
                    </Card>
                    </Col>
                </div>
                </div>
            </Slider>
        </Col>
    );
  }
}

export default TesinasEnDesarrollo;
