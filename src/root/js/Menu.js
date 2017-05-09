import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavItem,Navbar,Row,Col,Dropdown,Button,Footer} from 'react-materialize';
import PlanesDeEstudio from '../../alumnos/js/PlanesDeEstudio';
import ProfesoresViajeros from '../../alumnos/js/ProfesoresViajeros';
import Inicio from '../../inicio/js/Inicio';
import Extension from '../../extension/js/Extension';
import Tesinas from '../../alumnos/js/Tesinas'
import Docentes from '../../docentes/js/Docentes'
import Institucional from '../../institucional/js/Institucional'
import '../css/root.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Menu extends Component {
render() {
  return (
    <div> 
        <Router>
          <div>
            <Navbar className="blue darken-2" brand={<div className="logo"><img src={'logo.svg'}></img></div>} right >
                <li><Link to="inicio">Inicio</Link></li>
                <li><Link to="institucional">Institucional</Link></li>
                <li><Link to="docentes">Docentes</Link></li>
                <Dropdown options={{hover:true,belowOrigin:true,alignment:"left"}} trigger={<li>Alumnos</li>}>
                    <li><Link to="tesinas">Tesinas</Link></li>
                    <NavItem divider />
                </Dropdown>
            </Navbar>
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/inicio" component={Inicio}/>
            <Route exact path="/institucional" component={Institucional}/>
            <Route exact path="/docentes" component={Docentes}/>
            <Route exact path="/tesinas" component={Tesinas}/>
          </div>
        </Router>
        <Footer className="blue darken-2"copyrights={"&copy; 2017 Equipo de Desarrollo - Departamento Informática - UNPSJB"}></Footer>
    </div>
  );
}
}

export default Menu;
