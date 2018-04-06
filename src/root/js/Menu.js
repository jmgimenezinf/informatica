import React, { Component } from 'react';
import {Dialog, Slide, Button, AppBar, Toolbar, IconButton, Typography} from 'material-ui'
import CloseIcon from 'material-ui-icons/Close'
import EventIcon from 'material-ui-icons/Event'
import PropTypes from 'prop-types';
import {NavItem,Navbar,Row,Col,Dropdown,Footer} from 'react-materialize';
import PlanesDeEstudio from '../../alumnos/js/PlanesDeEstudio';
import Inicio from '../../inicio/js/Inicio';
import Tesinas from '../../alumnos/js/Tesinas';
import Docentes from '../../docentes/js/Docentes';
import Autoridades from '../../institucional/js/Autoridades';
import Contacto from '../../contacto/js/Contacto';
import MenuItem from '../../componentes/js/MenuItem.js';
import Solicitud from '../../reserva/js/Solicitud'
import '../css/root.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { blue700 } from 'material-ui/colors';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Menu extends Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

render() {     
  return (
    <div> 
        <Row className="banner">
          <Col offset="1"l={6}>
             {/* eslint-disable-next-line*/}
            <div className="logo"><img alt="logo universidad" src={'logo.svg'}></img></div>
          </Col>
        </Row>
        <Row>
        <Router basename="/">
          <div className="pagina">
            <Navbar className="blue darken-2 menu">
                <li className="opcion-menu"><Link to="/">Inicio</Link></li>
                <li className="no-mobile"><a className="dropdown-menu"><Dropdown className="item" options={{outDuration: 225,
                              constrainWidth: false, 
                              hover: true, 
                              gutter: 5, 
                              belowOrigin: false, 
                              alignment: 'left',
                              stopPropagation: false }} trigger={<li>Institucional</li>}>
                    <li><Link to="/autoridades">Autoridades</Link></li>
                    <NavItem divider />
                </Dropdown></a></li>  
                <MenuItem titulo="Institucional" >
                  <Link to="/autoridades"><MenuItem titulo="Autoridades"/></Link>
                </MenuItem>
                <li  className="no-mobile"><a className="dropdown-menu"><Dropdown className="item" options={{outDuration: 225,
                              constrainWidth: false, 
                              hover: true, 
                              gutter: 5, 
                              belowOrigin: false, 
                              alignment: 'left',
                              stopPropagation: true }} trigger={<li>Oferta académica</li>}>
                    <li><Link to="/planes-de-estudio">Planes de estudio</Link></li>
                    <li><a href={"http://www.dinfo.ing.unp.edu.ar/dci"}>Doctorado</a></li>
                    <NavItem divider />
                </Dropdown></a></li>  
                <MenuItem titulo="Oferta Academica" >
                <Link to="/planes-de-estudio"> <MenuItem titulo="Planes de estudio"/> </Link>
                <a href={"http://www.dinfo.ing.unp.edu.ar/dci"} ><MenuItem titulo="Doctorado"></MenuItem> </a>
                </MenuItem>
                {/* <li><Link to="/tesinas">Investigación</Link></li> */}
                <li className="opcion-menu"><Link to="/tesinas">Tesinas</Link></li>
                <li className="opcion-menu"><div><Link to="/contacto">Contacto</Link></div></li>
                <li className="calendario-menu no-mobile">
                  <Button onClick={this.handleClickOpen}><EventIcon/>Calendario y reservas</Button>
                  <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    transition={Transition}
                  >
                    <AppBar
                      position='relative'
                    >
                      <Toolbar>
                        <Button color="inherit" onClick={this.handleClose}>
                          <CloseIcon/>CERRAR
                        </Button>
                      </Toolbar>
                    </AppBar>

                    <Solicitud/>
                  </Dialog>
                </li>
            </Navbar>
            <Route  exact path="/" component={Inicio} />
            <Route  path="/planes-de-estudio" component={PlanesDeEstudio}/>
            <Route  path="/autoridades" component={Autoridades}/>
            <Route  path="/docentes" component={Docentes}/>
            <Route  path="/tesinas" component={Tesinas}/>
            <Route  path="/contacto" component={Contacto}/>
          </div>
        </Router>
        </Row>
        <Footer className="blue darken-2"copyrights="&copy; 2018 Equipo de Desarrollo - Departamento Informática - UNPSJB"></Footer>
    </div>
  );
}
}

export default Menu;
