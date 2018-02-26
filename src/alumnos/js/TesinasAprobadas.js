import React, { Component } from 'react';
import {Col,Card,CardTitle} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/card.css"
import axios from 'axios';
// import {url,port} from '../../../ignorar/configReact.js'

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true
};

function alumnosList(alumnos){
    var listStyle={
        display:"inline"
    }
    const listAlumnos = alumnos.map((alumno)=>
        <li style={listStyle}> {alumno}</li>
    );
    return (<ul style={listStyle}>{listAlumnos}</ul>);
}
function fecha(fechaString){
    var fecha = new Date(fechaString);  
    return fecha.getDate() + "/"+fecha.getMonth()+"/"+fecha.getFullYear();
}
function TesinasList(props){
    const tesinas = props.tesinas;
    const listTesinas = tesinas.map((tesina)=>
            <div>
                <Col l={12} m={12} s={12}>
                    <Card className="z-depth-4 blue small" 
                        header={<CardTitle reveal waves='light'/>}
                        title={<div className="white-text">{tesina.titulo}</div>}
                        reveal={
                                <div>
                                    <p> Alumnos	         :{alumnosList(tesina.alumnos)}<br/>
                                        Tutor	         :{tesina.tutor} <br/>
                                        Fecha de defensa :{fecha(tesina.fechaDefensa)}
                                    </p>
                                </div>
                        }>
                    </Card>
                </Col>
            </div>
    );
    return (<Slider {...settings}>{listTesinas}</Slider>);
}

class TesinasAprobadas extends Component {
    constructor(props){
        super(props);
        this.state={
            tesinas:[{
                titulo:"",
                alumnos:[""],
                tutor:"",
                fechaDefensa:""    
            }]
        }
    }
  
    componentDidMount() {
        var self=this;
        // var url = 'http://www.dinfo.ing.unp.edu.ar:7527/tesinas-aprobadas';
        axios.get("http://127.0.0.1:7527/tesinas-aprobadas")
        .then(function(response){
            console.log(response.data); 
            console.log(response.status); 
            self.setState({
                tesinas: response.data
            });
        });
    }
    render() {
        return (
            <TesinasList tesinas={this.state.tesinas}/>
        );
    }
}

export default TesinasAprobadas;
/*
db.tesinas.insert(
    {
        titulo: "Aplicacion GIS catastral",
        alumnos :["Luis Enrique RAMOS"],
        tutor: "Rodolfo BERTONE",
        fechaDefensa : "14/11/2005",
        estado :true
}
 )
 */