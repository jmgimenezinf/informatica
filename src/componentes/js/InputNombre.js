import React, { Component } from 'react';
import {TextField} from 'material-ui';

class InputNombre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:"",
      reseteado:false
    };
    this.handleNombre = this.handleNombre.bind(this);
    this.validateNombre = this.validateNombre.bind(this);
  }

  validateNombre(nombre) {
    var re = /^[a-zA-Z /t]+$/;
    return re.test(nombre);
  }
  handleNombre(e){
    console.log("nombre input " + e.target.value);
  if(e.target.value.length <=25){
    if(this.validateNombre(e.target.value)){
       this.props.onValido(e.target.value);

    }else{
      e.target.value = e.target.value.substr(0, e.target.value.length - 1);      
      this.setState({error:"Email no válido"})      
      this.props.onValido("");
    }
  }else{
    // console.log(e.target.value.substr(0, e.target.value.length - 1));
    e.target.value = e.target.value.substr(0, e.target.value.length - 1);
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
        <TextField
          value={this.props.reset? "":this.state.value}
          type="text"
          validate
          ref="input"
          label="Nombre" 
          onChange={(e)=>this.handleNombre(e)} 
          error={this.state.error}
          name="nombre"
          fullWidth
        />
    );
  }
}

export default InputNombre;
