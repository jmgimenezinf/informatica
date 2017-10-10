import React, { Component } from 'react';
import {Input} from 'react-materialize';

class InputNombre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:"",
      reseteado:false
    };
    this.handleNombre = this.handleNombre.bind(this);
    this.validateNombre = this.validateNombre.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.resetear = this.resetear.bind(this);
  }

  validateNombre(nombre) {
    return true;
  }
  handleNombre(e){
    if(this.validateNombre(e.target.value)){
       this.props.onValido(e.target.value);
    }
  }
  handleMouseOver(e){
    this.props.reset=false;
  } 
  resetear(){
    console.log(this.props.reset);
    if (this.props.reset !== this.state.reseteado){
      this.setState({
        reseteado:true
      })
      return  true;
    }else{
      return false;
    }
  }
  render() {
    return (
      <Input  l={4} onMouseOver={(e)=>{this.handleMouseOver(e)}}
      value={(this.resetear())? "":this.state.value}
      type="text"
      validate 
      ref="input"
      label="Nombre" 
      onChange={(e)=>this.handleNombre(e)} 
      error={this.state.error}
      />
    );
  }
}

export default InputNombre;
