import React, { Component } from 'react';
import {Input} from 'react-materialize';
class InputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:"",
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  handleEmail(e){
    if(this.validateEmail(e.target.value)){
      this.props.onValido(e.target.value);
    }else {
      this.setState({error:"Email no válido"})      
      this.props.onValido("");
    }
  } 
  render() {
    return (
      <Input  l={4}
        type="email"
        validate
        label="Email" 
        value={this.state.email}
        onChange={(e)=>this.handleEmail(e)} 
        value={this.props.reset? "":this.state.value}
        error={this.state.error}
      />
     
    );
  }
}

export default InputEmail;
