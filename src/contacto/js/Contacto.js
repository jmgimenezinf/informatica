import React, { Component } from 'react';
import {Row,Col,Button} from 'react-materialize';
import InputEmail from '../../componentes/js/InputEmail';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import RichEdit from '../../componentes/js/RichEdit';
import {stateToHTML} from 'draft-js-export-html';
import axios from 'axios';
import '../css/contacto.css';

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      nombre:"",
      apellido:"",
      richEdit:"",
      resetApellido:false,
      resetEmail:false,
      resetNombre:false,
      fontSize:'60px',
      col:8,
      height:40,
      activo:false
    };
    this.emailValido=this.emailValido.bind(this);    
    this.nombreValido=this.nombreValido.bind(this);  
    this.apellidoValido=this.apellidoValido.bind(this);    
    this.richEditValido=this.richEditValido.bind(this);    
    this.checkState = this.checkState.bind(this);
    this.handleMenuItem = this.handleMenuItem.bind(this);
    this.handleStyleButtonSubmit = this.handleStyleButtonSubmit.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.renderFormContacto= this.renderFormContacto.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  checkState(){  
     if(this.state.nombre!==""&& (this.state.apellido!=="") && (this.state.email!=="")&&(this.state.richEdit!=="")){
       this.handleStyleButtonSubmit(true);
      }else{
        this.handleStyleButtonSubmit(false);
     }
  }

  emailValido(email){
    this.setState({email:email});
    this.checkState();
  }
  nombreValido(nombre){
    this.setState({nombre:nombre});
    this.checkState();
  }
  apellidoValido(apellido){
    this.setState({apellido:apellido});
    this.checkState();
  }
  richEditValido(richEdit){
    this.setState({richEdit:richEdit});
    this.checkState();
  }
  renderInputs(){
    return (<div><InputNombre reset={this.state.resetNombre}
    onValido={(e) => this.nombreValido(e)}/>
    <InputApellido reset={this.state.resetApellido}
    onValido={(e)=> this.apellidoValido(e)}/>
    <InputEmail reset={this.state.resetEmail}
    onValido={(e) => this.emailValido(e)}/></div>);
  }

  renderFormContacto(){
    return( 
    <div className="opaco">
      <Col m={12} s={12} l={12} className="opaco" >
        {this.renderInputs()}
      </Col>
      <RichEdit height="60px" onValido={(e) => this.richEditValido(e)}/>
    </div>);
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
  handleReset(){
    this.setState({
      resetApellido:false,
      resetEmail:false,
      resetNombre:false
    });
   
  }
  handleSubmit(e){
    var stateRichEdit = this.state.richEdit;
    var richEditHTML = stateToHTML(stateRichEdit);
    var json = {
                "nombre":this.state.nombre,
                "apellido":this.state.apellido,
                "email":this.state.email,
                "richEdit":richEditHTML
              }
    var url = 'http://127.0.0.1:3001/send-mail';
    this.props.preloader(true,"Enviando");
    this.setState({
      resetApellido:true,
      resetEmail:true,
      resetNombre:true,
      emailValido:false,
      email:""
    });
    console.log(this.state);

    this.handleStyleButtonSubmit(false);
    var self = this;
    axios.post(
      url,json,
      {headers: {'Content-Type': 'application/json'}})
    .then(function(response){ 
        console.log(response.status); 
        self.props.preloader(true,"Mensaje enviado,revise su casilla de correo")
        setTimeout(function(){
          self.props.preloader(false,"");
        }, 3000);
    }) .catch(function (error) {
      self.props.preloader(true,"Error de conexión");
      setTimeout(function(){
        self.props.preloader(false,"");
      }, 3000);
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.resetApellido) {
        this.handleReset();
    }
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
                {this.renderFormContacto()}
            </Col>
            <Col m={12} s={12} l={7}>
              <Button 
                    disabled={!this.state.activo} 
                    floating large className='green boton-enviar' 
                    waves='light' icon='email'
                    onClick={(e)=>{this.handleSubmit(e)}
                    }/>
            </Col>
        </Col>
      </Col>
  </Row>
  );                                      
  }
}

export default Contacto;
