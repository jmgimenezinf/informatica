import React, { Component } from 'react';
import {NavItem,Navbar,Row,Col,Dropdown,Footer,Preloader} from 'react-materialize';
import PlanesDeEstudio from '../../alumnos/js/PlanesDeEstudio';
import Inicio from '../../inicio/js/Inicio';
import Extension from '../../extension/js/Extension';
import Tesinas from '../../alumnos/js/Tesinas';
import Docentes from '../../docentes/js/Docentes';
import Autoridades from '../../institucional/js/Autoridades';
import Contacto from '../../contacto/js/Contacto';
import '../css/root.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      loadingAnimation:true,
      mensaje:"",
      display:"none"
    }
    this.handlePreloader = this.handlePreloader.bind(this);
    this.contactos = this.contactos.bind(this);
  }
  handleClickGitlab = () => {
   window.location="http://192.168.156.49:4554/gitlab/";
  }
  handlePreloader(preloader,mensaje){
    this.setState({display:"block"});    
    if(preloader){
      this.setState({
        display:"block",
        mensaje: mensaje
      });
    }else{
      this.setState({display:"none"});
    }
  }
  contactos(){
    return <Contacto 
    preloader={(preloader,mensaje)=>this.handlePreloader(preloader,mensaje)}/>;
  }

render() {    
  var stylePreloader ={
    display:this.state.display
  };  
  return (
    <div >
      <div style={stylePreloader}>
        <img className="loading-animation" 
          alt="" 
          src={'white.svg'}/>
        <div className="animation-preloader">
          <Row>
            <Col l={12} offset="l2" s={12} m={12}><Preloader color="green"csize='big'/></Col>
            <Col l={12} ><h1>{this.state.mensaje}</h1></Col>
          </Row>
        </div>
      </div>
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
                <li><Link to="/contacto">Contacto</Link></li>
            </Navbar>
            <Route  exact path="/" component={Inicio} />
            <Route  path="/planes-de-estudio" component={PlanesDeEstudio}/>
            <Route  path="/autoridades" component={Autoridades}/>
            <Route  path="/docentes" component={Docentes}/>
            <Route  path="/tesinas" component={Tesinas}/>
            <Route  path="/contacto" 
            component={this.contactos}/>
            <Route  path="/extension" component={Extension}/>
          </div>
        </Router>
        </Row>
        <Footer className="blue darken-2"copyrights="&copy; 2017 Equipo de Desarrollo - Departamento Informática - UNPSJB"></Footer>
    </div>
    </div>
  );
}
}

export default Menu;
