import React, { Component } from 'react';
import {TextField} from 'material-ui';

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
    var re = /^[a-zA-Z ]+$/;
    return re.test(apellido);
  }


  handleApellido(e){

    if(e.target.value.length <=25){
      if(this.validateApellido(e.target.value)){
         this.props.onValido(e.target.value);
      }else{
        e.target.value = e.target.value.substr(0, e.target.value.length - 1);              
      }
    }else{
      console.log(e.target.value.substr(0, e.target.value.length - 1));
      e.target.value = e.target.value.substr(0, e.target.value.length - 1);
    }
  } 
  shouldComponentUpdate(){
    if (!this.props.reset){
      return false;
    }
    return true;
 }

 componentWillMount(){
  if (this.props.val !== ""){
    this.state.value = this.props.val;
  }
}

  render() {
    return (
          <TextField
            type="text"
            value={this.props.reset ? "":this.state.value}
            validate
            label="Apellido" 
            onChange={(e)=>this.handleApellido(e)} 
            error={this.state.error}
            name="apellido"
            fullWidth
            /> 
    );
  }
}

export default InputApellido;
