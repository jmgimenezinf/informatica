import React, { Component } from 'react';
import {Row,Col,Card,Button,Icon} from 'react-materialize';
import '../css/contacto.css';
import FormContacto from './FormContacto'; 


class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize:'60px',
      col:8,
      height:40,
      activo:false
    };
    this.handleMenuItem = this.handleMenuItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleMenuItem(e){
  if (!(this.state.fontSize === '60px' && this.state.activo)) {
    this.setState({
      col:11,
      fontSize:'30px',
    });
  } 
}
handleSubmit(e){
  this.setState({activo:e});
}
render() {
  var styleSubMenu ={
    fontSize:this.state.fontSize,
    WebkitTransition: '750ms', 
    msTransition: '750ms' 
  };  
  var styleTransition={
    WebkitTransition: '750ms', 
    msTransition: '750ms' 
  }
  return (
    <Row className="contacto">
        <Col l={12} className="polarizado">
          <Col s={8} >
            <h3 className="blue-text" style={styleSubMenu}>Contacto</h3>
          </Col>
          <Col  style={styleTransition} 
                m={12} s={12} l={this.state.col} 
                onClick={(e)=> this.handleMenuItem(e)}>
            <Col m={12} s={12} l={7}>
              <FormContacto onValido={(e)=>{this.handleSubmit(e)}}/> 
            </Col>
            <Col m={12} s={12} l={7}>
              <Button disabled={!this.state.activo} 
                      floating large className='green boton-enviar' 
                      waves='light' icon='email'/>
            </Col>
          </Col>
        </Col>
    </Row>
  );
  }
}

export default Contacto;
