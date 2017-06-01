import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import axios from 'axios';

/*function ResultadoList(result) {
  const listItems = result.map((number) =>
    <li>
      {number.titulo}
    </li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}*/


class Novedades extends Component {
    constructor(props) {
    super(props);
    this.state={titulo:"",descripcion:"",fecha_emision:""};
  }

componentDidMount() {
 var self=this;
        axios.get('http://localhost:3001/novedades')
        .then(function(response){
            console.log(response.data); 
            console.log(response.status); 
            self.setState({
                titulo: response.data.titulo,
                descripcion: response.data.descripcion,
                fecha_emision: response.data.fecha_emision
            });
        });
  }
  render() {

    return (
        <Row>
            <Col s={12} l={12} m={12}>
                <Col s={10} l={10} m={10}><h4>{this.state.titulo}</h4></Col><Col s={1} l={1} m={1}><h5>{this.state.fecha_emision}</h5></Col>
            </Col>
            <Col s={12} l={12} m={12}>
                <p>{this.state.descripcion}</p>
            </Col>
        </Row>
    )}
}

export default Novedades;
