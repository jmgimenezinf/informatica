import React, { Component } from 'react';
import {Input} from 'react-materialize';
import { connect } from 'react-redux'
import { addNombre } from '../actions'

class InputNombre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:""
    };
    this.handlenombre = this.handlenombre.bind(this);
    this.validateNombre = this.validateNombre.bind(this);
  }

  validateNombre(nombre) {

    return true;
  }
  handlenombre(e){
    if(this.validateNombre(e.target.value)){
      this.props.dispatch(addNombre(e.target.value));
      console.log(this.props.nombre);
    }
  } 
  render() {
    return (
      <Input  l={4}
      type="text"
      validate  
      label="Nombre" 
      onChange={(e)=>this.handlenombre(e)} 
      error={this.state.error}
      
      />
    );
  }
}
const mapStateToProps = (state) => ({
  nombre: state.nombre.nombre
});

InputNombre = connect(mapStateToProps)(InputNombre)
export default InputNombre;
