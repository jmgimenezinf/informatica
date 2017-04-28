import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function AutoridadesHtml() {

 var html= <section>
                <p>El Departamento de Informática se encuentra presente en las Sedes Comodoro Rivadavia, Esquel, Puerto Madryn y Trelew. La jefatura departamental esta en Comodoro Rivadavia mientras que las Sedes Puerto Madryn y Trelew poseen coordinaciones.  </p>
                <p> </p>
                <h3 className="blue-text">Autoridades Departamentales</h3>
                <p><em>Jefe del Depto.de Informática (01/01/2014 hasta 31/12/2017):</em></p>
                <ul>
                <li>Lic. Néstor LLAUCO</li>
                </ul>
                <p><em>Coordinadora del <em>Depto.</em>de Informática en Sede Puerto Madryn <em>(01/01/2014 hasta 31/12/2017) :</em></em> </p>
                <ul>
                <li>Lic. Romina STICKAR</li>
                </ul>
                <p><em>Coordinadora del <em>Depto.</em>de Informática en Sede Trelew <em>(01/01/2014 hasta 31/12/2017) :</em></em> </p>
                <ul>
                <li>Lic. Claudia LOPEZ de MUNAIN</li>
                </ul>
                <p><em> Comisión Asesora de las Carreras de Informática en Sede Comodoro Rivadavia (01/04/2014 al 31/03/2016) </em>:</p>
                <ul>
                <li>Coordinador: Lic. Néstor LLAUCO</li>
                <li>Integrantes docentes:
                <ul>
                <li>Mag. Ing. Martín BILBAO</li>
                <li>Lic. Claudia KRUGER</li>
                <li>Lic. Gabriela ORIANA</li>
                </ul>
                </li>
                <li>Integrantes alumnos:
                <ul>
                <li>Al. Elias COBO MEDVEDSKY</li>
                <li>Al. Alexis E. LIGORRIA</li>
                </ul>
                </li>
                </ul> 
            </section>
;
  return html;
}

export default AutoridadesHtml;
