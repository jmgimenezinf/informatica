import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function InicioHtml() {
 var html= <section>
    <p> </p>
    <p>El Departamento de Informática de la Facultad de Ingeniería de la Universidad Nacional de la Patagonia San Juan Bosco tiene a su cargo la gestión de las carreras de:</p>
    <ul>
    <li><a href="#">Analista Programador Universitario</a></li>
    <li><a href="#">Licenciatura en Informática</a></li>
    <li><a href="#">Licenciatura en Sistemas (Orientación Planificación, Gestión y Control de Proyectos Informáticos)</a></li>
    </ul>
    <p>El Departamento tiene presencia en las sedes Comodoro Rivadavia, Esquel, Puerto Madryn y Trelew, ubicándose la Jefatura Departamental en la primera y Coordinaciones en las restantes. Además, la estructura de gobierno departamental se completa con una Comisión Asesora de Carreras en cada sede.</p>
    <p>La gestión de las carreras incluye no solamente la <a href="docentes">docencia</a>, sino también las actividades de <a href="/index.php/investigacion">investigación</a> y de <a href="/index.php/extension">extensión</a>, que fortalecen la vinculación con la sociedad.</p>
    <p>Las actividades de <a href="/index.php/investigacion">investigación</a> se realizan a través de proyectos de investigación, cuyas unidades ejecutoras se componen de directores, asesores y colaboradores (docentes y/o alumnos).</p>
    <p>Las actividades de <a href="/index.php/extension">extensión</a> se manifiestan mediante la realización de cursos o talleres de diversas áreas, que son de interés para alumnos y docentes del Área de Informática en particular. La vinculación con el medio se logra a través de la realización de trabajos específicos del Área de Informática, como puede ser asesoramiento técnico o desarrollo a medida de sistemas.</p>
    </section>
;
  return html;
}

export default InicioHtml;
