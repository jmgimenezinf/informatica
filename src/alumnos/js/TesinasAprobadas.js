import React, { Component } from 'react';
import {Col,Card,CardTitle} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/card.css"
import axios from 'axios';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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

function TesinasList(props){
    const tesinas = props.tesinas;
    const listTesinas = tesinas.map((tesina)=>
            <div>
                <Col l={12} m={12} s={12}>
                    <Card className="z-depth-4 blue small" 
                        header={<CardTitle reveal waves='light'/>}
                        title={<div className="white-text">{tesina.titulo}</div>}
                        reveal = {
                                <div>
                                    <p> Alumnos	         :{alumnosList(tesina.alumnos)}<br/>
                                        Tutor	         :{tesina.tutor} <br/>
                                        Fecha de defensa :{tesina.fecha}
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
                titulo:"titulo",
                alumnos:[1,2],
                tutor:"tutor",
                fecha:"22/11/17"    
            },
            {
                titulo:"titulo2",
                alumnos:[1,3],
                tutor:"tutor2",
                fecha:"22/11/17"    
            }]
        }
    }
  
    componentDidMount() {
        var self=this;
        var url = 'http://192.168.156.49:3001/'+ self.props.url;
        axios.get(url)
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
