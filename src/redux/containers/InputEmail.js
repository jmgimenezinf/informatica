import React, { Component } from 'react';
import {Input} from 'react-materialize';
import { connect } from 'react-redux'
import { addEmail } from '../actions'

class InputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:""
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
      this.props.dispatch(addEmail(e.target.value));
      console.log(this.props.email);
    }
  } 
  render() {
    return (
      <Input  l={4}
      type="email"
      validate  
      label="Email" 
      onChange={(e)=>this.handleEmail(e)} 
      error={this.state.error}
      
      />
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.email.email
});

InputEmail = connect(mapStateToProps)(InputEmail)
export default InputEmail;
