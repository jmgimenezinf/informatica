import React, { Component } from 'react';
import {Input} from 'react-materialize';
class InputApellido extends Component {
  constructor(props) {
    super(props);
    this.state= {
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
  shouldComponentUpdate(){
    if (!this.props.reset){
      return false;
    }
    return true;
 }
  render() {
    return (
      <div>
          <Input  l={4}
            type="text"
            value={this.props.reset ? "":this.state.value}
            validate
            label="Apellido" 
            onChange={(e)=>this.handleApellido(e)} 
            error={this.state.error}
            /> 
      </div>
    );
  }
}

export default InputApellido;
