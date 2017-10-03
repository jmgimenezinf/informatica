import React, { Component } from 'react';
import {Input} from 'react-materialize';
import { connect } from 'react-redux'
import { addApellido } from '../actions'

class InputApellido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:""
    };
    this.handleApellido = this.handleApellido.bind(this);
    this.validateapellido = this.validateapellido.bind(this);
  }

  validateapellido(apellido) {

    return true;
  }
  handleApellido(e){
    if(this.validateapellido(e.target.value)){
      this.props.dispatch(addApellido(e.target.value));
      console.log(this.props.apellido);
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
const mapStateToProps = (state) => ({
  apellido: state.apellido.apellido
});

InputApellido = connect(mapStateToProps)(InputApellido)
export default InputApellido;
