import React, { Component } from 'react';
import {Row,Col,Card,Input,Button} from 'react-materialize';
import InputEmail from '../../componentes/js/InputEmail';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import RichEdit from '../../componentes/js/RichEdit';

class FormContacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      nombre:"",
      apellido:"",
      richEdit:""
    };
    this.emailValido=this.emailValido.bind(this);    
    this.nombreValido=this.nombreValido.bind(this);  
    this.apellidoValido=this.apellidoValido.bind(this);    
    this.richEditValido=this.richEditValido.bind(this);    
    this.checkState = this.checkState.bind(this);
  }
  checkState(){
    //  if((this.state.nombre!="")&& (this.state.apellido!="") && (this.state.email!="")&& (this.state.richEdit!="")){
     if(this.state.nombre!=""&& (this.state.apellido!="") && (this.state.email!="")&&(this.state.richEdit!="")){
            this.props.onValido(true);

     }else{
      this.props.onValido(false);
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
  render() {
    return (
      <div className="opaco">
        <Col m={12} s={12} l={12} className="opaco" >
          <InputNombre  onValido={(e) => this.nombreValido(e)}/>
          <InputApellido onValido={(e)=> this.apellidoValido(e)}/>
          <InputEmail  onValido={(e) => this.emailValido(e)}/>
        </Col>
        <RichEdit height="60px" onValido={(e) => this.richEditValido(e)}/>
      </div>
    );                                      
  }
}

export default FormContacto;
