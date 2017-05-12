import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavItem,Navbar,Row,Col,Dropdown,Footer,Button,Icon,Modal} from 'react-materialize';
import PlanesDeEstudio from '../../alumnos/js/PlanesDeEstudio';
import ProfesoresViajeros from '../../alumnos/js/ProfesoresViajeros';
import Inicio from '../../inicio/js/Inicio';
import Extension from '../../extension/js/Extension';
import Tesinas from '../../alumnos/js/Tesinas'
import Docentes from '../../docentes/js/Docentes'
import Autoridades from '../../institucional/js/Autoridades'
import '../css/root.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Menu extends Component {
  handleClickGitlab = () => {
   window.location="http://192.168.1.40:4554/gitlab/";
  }
render() {
  return (
    <div> 
        <Row className="banner">
          <Col offset="1"l={6}>
            <div className="logo"><img src={'logo.svg'}></img></div>
          </Col>
          <Col offset="l4" l={2}>
              <Button tooltip={"Gitlab"} onClick={this.handleClickGitlab}floating className='grey small' waves='light' icon={<img src={'gitlab.svg'}></img>} />
          </Col>
        </Row>
        <Row>
        <Router>
          <div className="pagina">
            <Navbar className="blue darken-2 menu">
                <li><Link to="inicio">Inicio</Link></li>
                <li><a><Dropdown className="item" options={{outDuration: 225,
                              constrainWidth: false, 
                              hover: true, 
                              gutter: 5, 
                              belowOrigin: false, 
                              alignment: 'left',
                              stopPropagation: false }} trigger={<li>Institucional</li>}>
                    <li><Link to="autoridades">Autoridades</Link></li>
                    <li><Link to="docentes">Docentes</Link></li>
                    <li><Link to="docentes">Laboratorios</Link></li>
                    <NavItem divider />
                </Dropdown></a></li>  
                <li><a><Dropdown className="item" options={{outDuration: 225,
                              constrainWidth: false, 
                              hover: true, 
                              gutter: 5, 
                              belowOrigin: false, 
                              alignment: 'left',
                              stopPropagation: false }} trigger={<li>Oferta académica</li>}>
                    <li><Link to="planes-de-estudio">Planes de estudio</Link></li>
                    <li><a href="http://www.dinfo.ing.unp.edu.ar/dci/">Doctorado</a></li>
                    <li><Link to="docentes">Cursos de pogrado</Link></li>
                    <li><Link to="extension">Extension</Link></li>
                    <NavItem divider />
                </Dropdown></a></li>  
                <li><Link to="tesinas">Investigación</Link></li>
                <li><Link to="tesinas">Tesinas</Link></li>
                <li><Link to="tesinas">Contacto</Link></li>
            </Navbar>
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/inicio" component={Inicio}/>
            <Route exact path="/planes-de-estudio" component={PlanesDeEstudio}/>
            <Route exact path="/autoridades" component={Autoridades}/>
            <Route exact path="/docentes" component={Docentes}/>
            <Route exact path="/tesinas" component={Tesinas}/>
            <Route exact path="/extension" component={Extension}/>
          </div>
        </Router>
        </Row>
        <Footer className="blue darken-2"copyrights="&copy; 2017 Equipo de Desarrollo - Departamento Informática - UNPSJB"></Footer>
    </div>
  );
}
}

export default Menu;
