import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import MenuItem from '../../componentes/js/MenuItem.js';

class Docentes extends Component {

render() {
  return (
      <Row>
        <Col s={2} l={3} m={2}>
          <MenuItem titulo="Docentes"/>
          <Col s={12} l={3} m={3}><h5 className="blue-text right-align">Cátedras</h5></Col>
          <MenuItem titulo="Primer año">
            <MenuItem titulo="Elementos de Informática"/>
          </MenuItem>
          <MenuItem titulo="Segundo año">
            <MenuItem titulo="Algoritmica y Programacion II"/>
          </MenuItem>
          <MenuItem titulo="Tercer año" >
            <MenuItem titulo="Algoritmica y Programacion II"/>
            <MenuItem titulo="Algoritmica y Programacion II"/>
            <MenuItem titulo="Algoritmica y Programacion II"/>
            <MenuItem titulo="Algoritmica y Programacion II"/>
          </MenuItem>
        </Col>
        <Col s={10} l={9} m={10}>
        </Col>
      </Row>);
  }
}

export default Docentes;
