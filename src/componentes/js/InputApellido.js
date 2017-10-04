import React, { Component } from 'react';
import {Input} from 'react-materialize';

class InputApellido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:""
    };
    this.handleApellido = this.handleApellido.bind(this);
    this.validateApellido = this.validateApellido.bind(this);
  }

  validateApellido(apellido) {
    return true;
  }
  handleApellido(e){
    if(this.validateApellido(e.target.value)){
       this.props.onValido(e.target.value);
    }
  } 
  render() {
    return (
      <Input  l={4}
      type="text"
      validate  
      label="Apellido" 
      onChange={(e)=>this.handleApellido(e)} 
      error={this.state.error}
      />
    );
  }
}

export default InputApellido;
