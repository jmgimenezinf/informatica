import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavItem,Navbar,Row,Col,Dropdown,Button,Footer} from 'react-materialize';
import PlanesDeEstudio from '../../alumnos/js/PlanesDeEstudio';
import ProfesoresViajeros from '../../alumnos/js/ProfesoresViajeros';
import Inicio from '../../inicio/js/Inicio';
import Institucional from '../../institucional/js/Institucional'
import Extension from '../../extension/js/Extension';
import Tesinas from '../../alumnos/js/Tesinas'
import Docentes from '../../docentes/js/Docentes'
import '../css/root.css'
class Menu extends Component {
  handleSubMenu(e){
    var href =String(e.target).split("#")[1];
    switch (href) {
      case 'planes-estudio':
        this.setState({
            page:<PlanesDeEstudio/>
        });
        break;
      case 'tesinas':
        this.setState({
            page:<Tesinas/>
        });
        break;
      case 'profesores-viajeros':
         this.setState({
            page:<ProfesoresViajeros/>
        });
        break;
      default:
        break;
    }
  }

  handleMenu(e){
    var href =String(e.target).split("#")[1];
    switch (href) {
      case 'inicio':
        this.setState({
            page:<Inicio titulo="Inicio"/>
        });
        break;
      case 'institucional':
        this.setState({
            page:<Institucional/>
        });
        break;
      case 'docentes':
       this.setState({
            page:<Docentes/>
        });
        break;
      case 'investigacion':
       
        break;
      case 'extension':
        this.setState({
          page:<Extension/>
        });
       
        break;
      case 'laboratorios':
       
        break;
      case 'contactos':
       
        break;
      default:
       
        break;
    }

    
}

 constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.state={page:<Inicio titulo="Inicio"/>};
  }

  render() {
    return (
      <div> 
            <Navbar brand={<div className="logo"><img src={'logo.svg'}></img></div>} right className="blue darken-2 menu">
                <NavItem href='#inicio' onClick={(e)=> this.handleMenu(e)}>Inicio</NavItem>
                <NavItem href='#institucional' onClick={(e)=> this.handleMenu(e)}>Institucional</NavItem>
                <NavItem href='#alumnos'>
                  <Dropdown options={{ inDuration: 300,
                              outDuration: 225,
                              constrainWidth: false, 
                              hover: true, 
                              gutter: 5, 
                              belowOrigin: false, 
                              alignment: 'left',
                              stopPropagation: false }} 
                    trigger={ <NavItem>Alumnos</NavItem>}>
                    <NavItem className="blue-text" href='#planes-estudio' onClick={(e)=> this.handleSubMenu(e)}>Planes de estudio</NavItem>
                    <NavItem divider />
                    <NavItem href='#tesinas' onClick={(e)=> this.handleSubMenu(e)}>Tesinas</NavItem>
                    <NavItem divider />
                    <NavItem href='#profesores-viajeros' onClick={(e)=> this.handleSubMenu(e)}>Profesores viajeros</NavItem>
                 </Dropdown>
                </NavItem>
                <NavItem href='#docentes' onClick={(e)=> this.handleMenu(e)}>Docentes</NavItem>
                <NavItem href='#investigacion' onClick={(e)=> this.handleMenu(e)}>Investigacion</NavItem>
                <NavItem href='#extension' onClick={(e)=> this.handleMenu(e)}>Extension</NavItem>
                <NavItem href='#laboratorios' onClick={(e)=> this.handleMenu(e)}>Laboratorios</NavItem>
                <NavItem href='#contacto' onClick={(e)=> this.handleMenu(e)}>Contacto</NavItem>
            </Navbar>
            <div>{this.state.page} </div>
            <Footer className="blue darken-2"copyrights={<Row><Col l={1}><img className="logo"src={'logo.svg'}></img></Col>
            <Col l={11}><p>&copy; 2017 Equipo de Desarrollo - Departamento Informática - UNPSJB</p></Col></Row>}></Footer>
      </div>
    );
  }
}

export default Menu;
