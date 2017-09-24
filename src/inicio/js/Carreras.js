
import React, { Component } from 'react';
import '../css/carreras.css';

class Carreras extends Component {
  render() {
    return (
    <section>
        {/* <div className="tarjeta-breaker-bottom"/> */}
        <div className="tarjeta">
            <h5 className="center-align">Licenciatura en Informática</h5>
            <br/>
            <ul className="w3-container w3-animate-left">
                <li>Duración 5 años</li>
                <li>32 materias</li>
                <li>Tesina</li>
            </ul>
        </div>
        <div  className="tarjeta">
            <h5 className="center-align">Analista Programador Universitario</h5>
            <ul>
                <li>Duración 3 años</li>
                <li>18 materias</li>
            </ul>
        </div>
        <div  className="tarjeta">
            <h5 className="center-align">Licenciatura en Sistemas</h5>
            <br/>
            <ul className="w3-container w3-animate-right">
                <li>Duración 5 años</li>
                <li>34 materias</li>
                <li>Tesina</li>
            </ul>
        </div>
        <div className="tarjeta-breaker"/>
    </section>
    )}
}

export default Carreras;
