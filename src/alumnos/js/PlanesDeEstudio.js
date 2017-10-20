import React, { Component } from 'react';
import {Row,Col,Table,Icon,Button} from 'react-materialize';
class PlanesDeEstudio extends Component {
  render() {
    return (
        <Row className="container">
          <Col l={12} m={12} s={12}>
            <h4 className="blue-text titulo">Planes de estudio</h4>
          </Col>
          <Col l={12} m={12} s={12}>
              <p>Actualmente, la Facultad de Ingeniería oferta las siguientes carreras en el área de Informática:</p>
              <Table centered responsive stripped={true} bordered>
                <thead>
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
                    <td><a href="#">Analista Programador Universitario</a></td>
                    <td>2010</td>
                    <td><Button className="red">PDF</Button></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                  </tr>
                  <tr>
                    <td><a href="#">Licenciatura en Informática</a></td>
                    <td>2010</td>
                    <td><Button className="red">PDF</Button></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><a href="#">Licenciatura en Sistemas (Orientación Planificación, Gestión y Control de Proyectos Informáticos)</a></td>
                    <td>2010</td>
                    <td><Button className="red">PDF</Button></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Icon className="green-text text-darken-2">done</Icon></td>
                  </tr>
                </tbody>
              </Table>
          </Col>
          <Col l={12} m={12} s={12}>
            <h5>Planes anteriores</h5>
            <ul>
              <li><a href="#">Analista Programador Universitario (Plan 1999)</a></li>
              <li><a href="#">Licenciatura en Informática (Plan 2001)</a></li>
            </ul>
          </Col>
        </Row>
    );
  }
}

export default PlanesDeEstudio;
