import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import axios from 'axios';

function ResultadoList(result) {
  const listItems = result.map((novedad) =>
    <div>
        <Col s={10} l={10} m={10}><h4 className="novedad-titulo">{novedad.titulo}</h4></Col>
        <Col s={1} l={1} m={1}><h5 className="novedad-fecha">{novedad.fecha_emision}</h5></Col>
        <Col s={12} l={12} m={12} className="novedad-contenido">
            <p>{novedad.descripcion}</p>
        </Col>
    </div>
  );
  return (
    <div>
      {listItems}
    </div>
  );
}

class NovedadesRequest extends Component {
    constructor(props) {
    super(props);
    this.state={novedades:""};
  }

componentDidMount() {
    var self=this;
    var url = 'http://192.168.156.49:3001/'+ self.props.url;
    axios.get(url)
    .then(function(response){
        console.log(response.data); 
        console.log(response.status); 
        self.setState({
            novedades: ResultadoList(response.data),
        });
    });
  }
  render() {
    return (
        <Row>
            {this.state.novedades}
        </Row>
    )}
}

export default NovedadesRequest;
