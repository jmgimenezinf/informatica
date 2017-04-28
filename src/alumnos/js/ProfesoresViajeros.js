import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Table,Icon,Button} from 'react-materialize';
class ProfesoresViajeros extends Component {
  render() {
    return (
        <Row className="container">
          <Col l={12} m={12} s={12}>
            <h3 className="blue-text">Profesores viajeros</h3>
            <p>Las siguientes materias cuentan con docentes viajeros:</p>
          </Col>
          <Col l={12} m={12} s={12}>
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
        </Row>
    );
  }
}

export default ProfesoresViajeros;
