import React, { Component } from 'react';
import {Row,Col,Card,Input} from 'react-materialize';
import PropTypes from 'prop-types';
import InputEmail from '../../redux/containers/InputEmail';
class FormContacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        apellido:'',
        email:'a',
        errorEmail:'',
        emailValido:false,
        nombreValido:false
    };
    this.handleNombre = this.handleNombre.bind(this);
    this.handleApellido = this.handleApellido.bind(this);
  }
  handleApellido(event) {
    this.setState({email: event.target.apellido});
  } 
  handleNombre(event) {
    this.setState({nombre: event.target.value});
    console.log(this.state.nombre);    
    
  } 

  render() {
  return (
    <Col m={12} s={12} l={12} className="opaco" >
      <Input  l={4}
              type="text" 
              validate  
              label="Nombre" 
              onChange={(e)=>this.handleNombre(e)} 
              required
      />
      <Input  l={4}    
              type="text" 
              validate  
              label="Apellido" 
              onChange={(e)=>this.handleApellido(e)} 
              required
      />
      <InputEmail/>
      {/* <Input  l={4} 
              type="email" 
              validate 
              label="Email" 
              required 
              value={this.props.mail}
              onChange={(e)=>this.handleEmail(e)} 
              error={this.state.errorEmail} 
      />       */}
    </Col>
  );                                      
  }
}
 FormContacto.propTypes = {
   email: PropTypes.isNumber
 };
export default FormContacto;
