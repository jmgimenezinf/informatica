import React, { Component } from 'react';
import {Input} from 'react-materialize';

class InputNombre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:""
    };
    this.handleNombre = this.handleNombre.bind(this);
    this.validateNombre = this.validateNombre.bind(this);
  }

  validateNombre(nombre) {
    return true;
  }
  handleNombre(e){
    if(this.validateNombre(e.target.value)){
       this.props.onValido(e.target.value);
    }
  } 
  render() {
    return (
      <Input  l={4}
      type="text"
      validate  
      label="Nombre" 
      onChange={(e)=>this.handleNombre(e)} 
      error={this.state.error}
      />
    );
  }
}

export default InputNombre;
