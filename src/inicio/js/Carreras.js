
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/carreras.css';

class Carreras extends Component {
  render() {
    return (
    <div >

        <figure className="media-left carrera-figure" >
            <img className="media-object"  src={'analista-programador.jpg'} />
            <div className="carreras-titulo"><h1>Analista Programador</h1></div>
        </figure>
        <div className="carrera-breaker"/>
    </div>
    )}
}

export default Carreras;
