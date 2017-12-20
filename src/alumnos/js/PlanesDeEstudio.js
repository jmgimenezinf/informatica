import React, { Component } from 'react';
import {Row,Col,Table,Icon} from 'react-materialize';
import "../css/planes-estudio.css"
class PlanesDeEstudio extends Component {
  render() {

    return (
        <Row className="container all-section">
          <Col l={12} m={12} s={12}>
            <h4 className="blue-text titulo center-align">Planes de estudio</h4>
            <div className="separador"></div>
          </Col>
          <Col l={12} m={12} s={12}>
              <p>Actualmente, la Facultad de Ingeniería oferta las siguientes carreras en el área de Informática:</p>
              <Table centered responsive stripped={true} bordered>
                <thead className="blue-text">
                  <tr>
                    <th  data-field="carrera">Carrera</th>
                    <th  data-field="plan_actual">Plan Actual</th>
                    <th  data-field="folleto">Folleto</th>
                    <th  data-field="cr">CR</th>
                    <th  data-field="esq">ESQ</th>
                    <th  data-field="pm">PM</th>
                    <th  data-field="tw">TW</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td><p>Analista Programador Universitario</p></td>
                    <td>2010</td>
                    <td><Icon className="grey-text text-darken-2" ><a className="text-darken-2 download" href="http://www.dinfo.ing.unp.edu.ar:7527/apu-folleto">file_download </a></Icon></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                  </tr>
                  <tr>
                    <td><p>Licenciatura en Informática</p></td>
                    <td>2010</td>
                    <td><Icon className="grey-text text-darken-2"><a className="grey-text text-darken-2 download" href="http://www.dinfo.ing.unp.edu.ar:7527/lic-sistemas-folleto">file_download</a></Icon></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><p>Licenciatura en Sistemas (Orientación Planificación, Gestión y Control de Proyectos Informáticos)</p></td>
                    <td>2010</td>
                    <td><Icon className="grey-text text-darken-2"><a className="grey-text text-darken-2 download" href="http://www.dinfo.ing.unp.edu.ar:7527/lic-informatica-folleto">file_download</a></Icon></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                  </tr>
                </tbody>
              </Table>
          </Col>
          {/* <Col l={12} m={12} s={12} >
            <h5 className="blue-text">Planes anteriores</h5>
            <ul>
              <li><p>Analista Programador Universitario (Plan 1999)</p></li>
              <li><p>Licenciatura en Informática (Plan 2001)</p></li>
            </ul>
          </Col> */}
        </Row>
    );
  }
}

export default PlanesDeEstudio;
