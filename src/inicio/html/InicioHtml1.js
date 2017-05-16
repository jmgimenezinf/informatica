import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'react-materialize';
function InicioHtml1() {
 var html= <section>
    <p> </p>
    <p>El Departamento de Informática de la Facultad de Ingeniería de la Universidad Nacional de la Patagonia San Juan Bosco tiene a su cargo la gestión de las carreras de:</p>
    <ul>
    <li><a href="#"><Icon className="grey-text">info</Icon>Analista Programador Universitario</a></li>
    <li><a href="#"><Icon className="grey-text">info</Icon>Licenciatura en Informática</a></li>
    <li><a href="#"><Icon className="grey-text">info</Icon>Licenciatura en Sistemas (Orientación Planificación, Gestión y Control de Proyectos Informáticos)</a></li>
    </ul>
    </section>
;
  return html;
}

export default InicioHtml1;
