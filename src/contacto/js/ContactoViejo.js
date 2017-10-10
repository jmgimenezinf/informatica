import React, { Component } from 'react';
import {Row,Col,Button} from 'react-materialize';
import '../css/contacto.css';
import FormContacto from './FormContacto'; 
import {stateToHTML} from 'draft-js-export-html';
import axios from 'axios';
class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize:'60px',
      col:8,
      height:40,
      activo:false,
    };
    this.handleMenuItem = this.handleMenuItem.bind(this);
    this.handleStyleButtonSubmit = this.handleStyleButtonSubmit.bind(this);
    this.handleInputs= this.handleInputs.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleMouseOver=this.handleMouseOver.bind(this);
    axios.defaults.timeout = 6000;
  }
handleMenuItem(e){
  if (!(this.state.fontSize === '60px' && this.state.activo)) {
    this.setState({
      col:11,
      fontSize:'30px'
    });
  } 

  
}
handleStyleButtonSubmit(e){
  this.setState({activo:e});
}
handleSubmit(e){
  var stateRichEdit = this.state.formContacto.richEdit;
  var richEditHTML = stateToHTML(stateRichEdit);
  this.state.formContacto.richEdit = richEditHTML;
  this.setState({
    "formContacto":{
      richEdit:stateRichEdit,
    }
  });
  var json = this.state.formContacto;
  var url = 'http://127.0.0.1:3001/send-mail';
  // this.props.preloader(true,"Enviando");
  var self = this;
  this.setState({
    resetNombre:true
  });
  axios.post(
    url,json,
    {headers: {'Content-Type': 'application/json'}})
  .then(function(response){ 
      console.log(response.status); 
      self.props.preloader(true,response.data)
  }) .catch(function (error) {
    self.props.preloader(true,"Error de conexión");
    setTimeout(function(){
      self.props.preloader(false,"Error de conexión");
    }, 3000);
  });
}
handleInputs(e){
  this.setState({formContacto:e});
}
handleMouseOver(e){
  this.setState({
    resetNombre:false
  });
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
    <Row className="contacto" onMouseOver={(e)=>{this.handleMouseOver(e)}}>
        <Col l={12} className="polarizado">
          <Col s={8} >
            <h3 className="blue-text" style={styleSubMenu}>Contacto</h3>
          </Col>
          <Col  style={styleTransition} 
                m={12} s={12} l={this.state.col} 
                onClick={(e)=> this.handleMenuItem(e)}>
            <Col m={12} s={12} l={7}>
              <FormContacto inputs={(inputs)=>{this.handleInputs(inputs)}} 
                reset={this.state.resetNombre}
                onValido={(e)=>{this.handleStyleButtonSubmit(e)}}                
                /> 
            </Col>
            <Col m={12} s={12} l={7}>
              <Button 
                    disabled={!this.state.activo} 
                    floating large className='green boton-enviar' 
                    waves='light' icon='email'
                    onClick={(e)=>this.handleSubmit(e)
                    }/>
            </Col>
          </Col>
        </Col>
    </Row>
  );
  }
}

export default Contacto;
