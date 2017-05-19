
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/carreras.css';

class Carreras extends Component {
  render() {
    return (
    <section>
        <div className="tarjeta-breaker-bottom"/>
        <div className="tarjeta">
            <h5 className="center-align">Licenciatura en Informática</h5>
        </div>
        <div  className="tarjeta">
            <h5 className="center-align">Analista Programador Universitario</h5>
        </div>
        <div  className="tarjeta">
            <h5 className="center-align">Licenciatura en Sistemas</h5>
        </div>
        <div className="tarjeta-breaker"/>
    </section>
    )}
}

export default Carreras;
