import React, { Component } from 'react';
import {Col,Card,CardTitle} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/card.css"
class TesinasAprobadas extends Component {
  render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true
        };
    return (
            <Slider {...settings}>
                <div>
                    <Col l={12} m={12} s={12}>
                    <Card className="z-depth-4 red small" header={<CardTitle reveal waves='light'/>}
                    title={<div className="white-text">Herramienta para la representacion XML de un modelo fisico de datos</div>}
                    reveal={<div className="blue"><p>
                        Alumnos	Dario JENKINS <br/>
                        Tutor	Rodolfo BERTONE <br/>
                        Fecha de defensa	06/08/2004
                        </p></div>}>
                    </Card>
                    </Col>
                </div>
                <div>
                    <Col l={12} m={12} s={12}>
                    <Card className="z-depth-4 green small" header={<CardTitle reveal waves='light'/>}
                    title={<div className="white-text">Herramienta para la generacion automatica de codigo en Delphi a 
                        partir de un modelo de datos expresado en XML</div>}
                    reveal={<p>
                        Alumnos	Marcos MANSUTTI, Maximo WALSAMAKIS <br/>
                        Tutor	Rodolfo BERTONE <br/>
                        Fecha de defensa 06/08/2004
                        </p>}>
                    </Card>
                    </Col>
                </div>
                <div>
                    <Col l={12} m={12} s={12}>
                    <Card className="z-depth-4 blue small" header={<CardTitle reveal waves='light'/>}
                    title={<div className="white-text">Help Desk: una disciplina
                    </div>}reveal={<p>
                        Alumnos	Fernando CHOCAN <br/>
                        Tutor Mabel BERTOLANI <br/>
                        Fecha de defensa 18/11/2004
                        </p>}>
                    </Card>
                    </Col>
                </div>                
                <div>
                    <Col l={12} m={12} s={12}>
                    <Card className="z-depth-4 red small" header={<CardTitle reveal waves='light'/>}
                    title={<div className="white-text">Desarrollo teorico practico de web service</div>}
                    reveal={<p>
                        Alumnos	Carolina QUILIÑAN, Daniel HARO <br/>
                        Tutor Rodolfo BERTONE <br/>
                        Fecha de defensa 03/06/2005
                        </p>}>
                    </Card>
                    </Col>
                </div>
                <div>
                    <Col l={12} m={12} s={12}>                    
                    <Card className="z-delphi-4 green small" header={<CardTitle reveal waves='light'/>}
                    title={<div className="white-text">Desarrollo de una herramienta CASE para el diseño de una BD</div>}
                    reveal={<p>
                        Alumnos	Diego CHABBERT, Luis PARIS <br/>
                        Tutor Sandra MARTINEZ <br/>
                        Fecha de defensa 21/07/2005
                        </p>}>
                    </Card>
                    </Col>
                </div>
                <div>
                    <Col l={12} m={12} s={12}>
                    <Card className="z-delphi-4 blue small" header={<CardTitle reveal waves='light'/>}
                    title={<div className="white-text">Seguridad en el comercio electronico: un enfoque B2B</div>}
                    reveal={<p>
                        Alumnos	Liliana Mabel DIMOPULOS, Nestor Fernando LLAUCO, Lidia Rosa SLOBODA<br/>
                        Tutor Jorge ARDENGHI <br/>
                        Fecha de defensa 07/10/2005
                        </p>}>
                    </Card>
                    </Col>
                </div>
                <div>
                    <Col l={12} m={12} s={12}>
                    <Card className="z-delphi-4 green small" header={<CardTitle reveal waves='light'/>}
                    title={<div className="white-text">Aplicacion GIS catastral</div>}
                    reveal={<p>
                        Alumnos	Luis Enrique RAMOS<br/>
                        Tutor Rodolfo BERTONE <br/>
                        Fecha de defensa 14/11/2005
                        </p>}>
                    </Card>
                    </Col>
                </div>              
            </Slider>
    );
  }
}

export default TesinasAprobadas;
