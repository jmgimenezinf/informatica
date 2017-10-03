import React, { Component } from 'react';
import {Row,Col,Card,Input} from 'react-materialize';
import PropTypes from 'prop-types';
import InputEmail from '../../redux/containers/InputEmail';
import InputNombre from '../../redux/containers/InputNombre';
import InputApellido from '../../redux/containers/InputApellido';

class FormContacto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col m={12} s={12} l={12} className="opaco" >
        <InputNombre/>
        <InputApellido/>
        <InputEmail/>
      </Col>
    );                                      
  }
}

export default FormContacto;
