import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Card,CardTitle,CardPanel} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class TesinasAprobadas extends Component {
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
                    <Card className="green" header={<CardTitle reveal waves='light'/>}
                    title="Herramienta para la representacion XML de un modelo fisico de datos"
                    reveal={<p>
                        Alumnos	Dario JENKINS <br/>
                        Tutor	Rodolfo BERTONE <br/>
                        Fecha de defensa	06/08/2004
                        </p>}>
                    </Card>
                </div>
                <div>
                    <Card className="red" header={<CardTitle reveal waves='light'/>}
                    title="	Herramienta para la generacion automatica de codigo en Delphi a partir de un modelo de datos expresado en XML"
                    reveal={<p>
                        Alumnos	Marcos MANSUTTI, Maximo WALSAMAKIS <br/>
                        Tutor	Rodolfo BERTONE <br/>
                        Fecha de defensa 06/08/2004
                        </p>}>
                    </Card>
                </div>
                <div>
                    <Card className="yellow" header={<CardTitle reveal waves='light'/>}
                    title="	Help Desk: una disciplina"
                    reveal={<p>
                        Alumnos	Fernando CHOCAN <br/>
                        Tutor Mabel BERTOLANI <br/>
                        Fecha de defensa 18/11/2004
                        </p>}>
                    </Card>
                </div>                
                <div>
                    <Card className="yellow" header={<CardTitle reveal waves='light'/>}
                    title="Desarrollo teorico practico de web service"
                    reveal={<p>
                        Alumnos	Carolina QUILIÑAN, Daniel HARO <br/>
                        Tutor Rodolfo BERTONE <br/>
                        Fecha de defensa 03/06/2005
                        </p>}>
                    </Card>
                </div>
                <div>
                    <Card className="yellow" header={<CardTitle reveal waves='light'/>}
                    title="Desarrollo de una herramienta CASE para el diseño de una BD"
                    reveal={<p>
                        Alumnos	Diego CHABBERT, Luis PARIS <br/>
                        Tutor Sandra MARTINEZ <br/>
                        Fecha de defensa 21/07/2005
                        </p>}>
                    </Card>
                </div>
                <div>
                    <Card className="yellow" header={<CardTitle reveal waves='light'/>}
                    title="Seguridad en el comercio electronico: un enfoque B2B"
                    reveal={<p>
                        Alumnos	Liliana Mabel DIMOPULOS, Nestor Fernando LLAUCO, Lidia Rosa SLOBODA<br/>
                        Tutor Jorge ARDENGHI <br/>
                        Fecha de defensa 07/10/2005
                        </p>}>
                    </Card>
                </div>
                <div>
                    <Card className="yellow" header={<CardTitle reveal waves='light'/>}
                    title="Aplicacion GIS catastral"
                    reveal={<p>
                        Alumnos	Luis Enrique RAMOS<br/>
                        Tutor Rodolfo BERTONE <br/>
                        Fecha de defensa 14/11/2005
                        </p>}>
                    </Card>
                </div>              
            </Slider>
    );
  }
}

export default TesinasAprobadas;
