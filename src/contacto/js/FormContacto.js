import React, { Component } from 'react';
import {Row,Col,Card,Input,Button} from 'react-materialize';
import PropTypes from 'prop-types';
import InputEmail from '../../redux/containers/InputEmail';
import InputNombre from '../../redux/containers/InputNombre';
import InputApellido from '../../redux/containers/InputApellido';
import { connect } from 'react-redux'

class FormContacto extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    console.log(this.props.email);
    console.log(this.props.nombre);
    console.log(this.props.apellido);
  }
  render() {
    return (
      <Col m={12} s={12} l={12} className="opaco" >
        <InputNombre/>
        <InputApellido/>
        <InputEmail/>
        <Button onClick={(e)=> this.handleClick(e)} >hola</Button>
      </Col>
    );                                      
  }
}
const mapStateToProps = (state) => ({
  email: state.email.email,
  nombre: state.nombre.nombre,
  apellido:state.apellido.apellido
});

FormContacto = connect(mapStateToProps)(FormContacto)

export default FormContacto;
