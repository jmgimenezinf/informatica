import React, { Component } from 'react';
import {NavItem,Navbar,Row,Col,Dropdown,Footer} from 'react-materialize';
import PlanesDeEstudio from '../../alumnos/js/PlanesDeEstudio';
import Inicio from '../../inicio/js/Inicio';
import Extension from '../../extension/js/Extension';
import Tesinas from '../../alumnos/js/Tesinas';
import Docentes from '../../docentes/js/Docentes';
import Autoridades from '../../institucional/js/Autoridades';
import Contacto from '../../contacto/js/Contacto';
import Calendario from '../../inicio/js/Calendario';

import '../css/root.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Menu extends Component {
  constructor(props){
    super(props);
  }
  handleClickGitlab = () => {
   window.location="http://192.168.156.49:4554/gitlab/";
  }

render() {     
  return (
    <div> 
        <Row className="banner">
          <Col offset="1"l={6}>
             {/* eslint-disable-next-line*/}
            <div className="logo"><img alt="logo universidad" src={'logo.svg'}></img></div>
          </Col>
          <Col offset="l4" l={2}>
              {/*<Button onClick={this.handleClickGitlab}floating className='grey small boton-gitlab' waves='light'/>*/}
          </Col>
        </Row>
        <Row>
        <Router basename="/">
          <div className="pagina">
            <Navbar className="blue darken-2 menu">
                <li><Link to="/">Inicio</Link></li>
                <li><a><Dropdown className="item" options={{outDuration: 225,
                              constrainWidth: false, 
                              hover: true, 
                              gutter: 5, 
                              belowOrigin: false, 
                              alignment: 'left',
                              stopPropagation: false }} trigger={<li>Institucional</li>}>
                    <li><Link to="/autoridades">Autoridades</Link></li>
                    {/* <li><Link to="/docentes">Docentes</Link></li> */}
                    {/* <li><Link to="/docentes">Laboratorios</Link></li> */}
                    <NavItem divider />
                </Dropdown></a></li>  
                <li><a><Dropdown className="item" options={{outDuration: 225,
                              constrainWidth: false, 
                              hover: true, 
                              gutter: 5, 
                              belowOrigin: false, 
                              alignment: 'left',
                              stopPropagation: true }} trigger={<li>Oferta académica</li>}>
                    <li><Link to="/planes-de-estudio">Planes de estudio</Link></li>
                    <li><a href="http://www.dinfo.ing.unp.edu.ar/dci/">Doctorado</a></li>
                    {/* <li><Link to="/docentes">Cursos de pogrado</Link></li> */}
                    <li><Link to="/extension">Extension</Link></li>
                    <NavItem divider />
                </Dropdown></a></li>  
                {/* <li><Link to="/tesinas">Investigación</Link></li> */}
                <li><Link to="/tesinas">Tesinas</Link></li>
                <li><div><Link to="/contacto">Contacto</Link></div></li>
                <li className="calendario-menu"><span><Calendario/></span></li>
            </Navbar>
            <Route  exact path="/" component={Inicio} />
            <Route  path="/planes-de-estudio" component={PlanesDeEstudio}/>
            <Route  path="/autoridades" component={Autoridades}/>
            <Route  path="/docentes" component={Docentes}/>
            <Route  path="/tesinas" component={Tesinas}/>
            <Route  path="/contacto" 
            component={Contacto}/>
            <Route  path="/extension" component={Extension}/>
          </div>
        </Router>
        </Row>
        <Footer className="blue darken-2"copyrights="&copy; 2017 Equipo de Desarrollo - Departamento Informática - UNPSJB"></Footer>
    </div>
  );
}
}

export default Menu;
