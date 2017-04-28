import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavItem,Navbar,Row,Col,Dropdown,Button} from 'react-materialize';
import PlanesDeEstudio from '../../alumnos/js/PlanesDeEstudio';
import ProfesoresViajeros from '../../alumnos/js/ProfesoresViajeros';
import Inicio from '../../inicio/js/Inicio';
import Institucional from '../../institucional/js/Institucional'
import Novedades from '../../novedades/js/Novedades'
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
            page:<ProfesoresViajeros/>
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
            page:<Inicio/>
        });
        break;
      case 'institucional':
        this.setState({
            page:<Institucional/>
        });
        break;
      case 'novedades':
         this.setState({
            page:<Novedades/>
        });
        break;
      case 'docentes':

        break;
      case 'investigacion':
       
        break;
      case 'extension':
       
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
    this.state={page:<Inicio/>};
  }

  render() {
    return (
      <div> 
            <Navbar brand='logo' right className="blue darken-2">
                <NavItem href='#inicio' onClick={(e)=> this.handleMenu(e)}>Inicio</NavItem>
                <NavItem href='#institucional' onClick={(e)=> this.handleMenu(e)}>Institucional</NavItem>
                <NavItem href='#novedades' onClick={(e)=> this.handleMenu(e)}>Novedades</NavItem>
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
                    <NavItem href='#planes-estudio' onClick={(e)=> this.handleSubMenu(e)}>Planes de estudio</NavItem>
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
            <Button floating fab='vertical' icon='add_alert' className='green' large style={{bottom: '45px', right: '24px'}}>
                <Button floating icon='insert_chart' className='red'/>
                <Button floating icon='format_quote' className='yellow darken-1'/>
                <Button floating icon='publish' className='green'/>
                <Button floating icon='attach_file' className='blue'/>
            </Button>
      </div>
    );
  }
}

export default Menu;
