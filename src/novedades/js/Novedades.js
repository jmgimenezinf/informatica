import React, { Component } from 'react';
import {Col,Row,Collection,CollectionItem,Badge,Button,Modal} from 'react-materialize';
// import NovedadesTodas from './NovedadesTodas.js';
import '../css/novedades.css';
import axios from "axios"
// import {url,port} from '../../../ignorar/configReact.js'
function fecha(fechaString){
    var fecha = new Date(fechaString);  
    return fecha.getDate() + "/"+fecha.getMonth()+"/"+fecha.getFullYear();
}
function vencida(date){
    var dateActual = new Date();
    if (dateActual.getFullYear() <= date.getFullYear()){
        if (dateActual.getMonth() <= date.getMonth()){
            if (dateActual.getDate() < date.getDate()){
                return false;
            }
        }
    }
    return true;
}

function filterAlumnos(array){
    return (array.tipo_novedad === "alumno" && !(vencida(new Date(array.fecha_vencimiento))));
}
function filterDocentes(array){
     return (array.tipo_novedad === "docente" && !vencida(new Date(array.fecha_vencimiento)));
}
function filterPublico(array){
    return (array.tipo_novedad === "publico" && !vencida(new Date(array.fecha_vencimiento)));
}

function ResultadoList(result) {
  const listItems = result.map((novedad) =>
    <Row>
        <Col s={10} l={10} m={10}><h4 className="novedad-titulo">{novedad.titulo}</h4></Col>
        <Col s={1} l={1} m={1}><h5 className="novedad-fecha">{fecha(novedad.fecha_emision)}</h5></Col>
        <Col s={12} l={12} m={12} className="novedad-contenido">
            <p>{novedad.descripcion}</p>
        </Col>
    </Row>
  );
  return (
    <div>
      {listItems}
    </div>
  );
}
class Novedades extends Component {
constructor(props) {
    super(props);
    this.state={
        novedadesTodas:"",
        bodyAlumnos: "",
        bodyDocentes:"",
        bodyPublico:"",
        bodyTodas:"",
        countAlumnos:0,
        countDocentes:0,
        countPublico:0};
    this.setCountAlumnos = this.setCountAlumnos.bind(this);
    this.setCountDocentes = this.setCountDocentes.bind(this);
    this.setCountPublico = this.setCountPublico.bind(this);
    
}    
setCountAlumnos(count){
    this.setState({
        countAlumnos:count
    })
}
setCountDocentes(count){
    this.setState({
        countDocentes:count
    })
}
setCountPublico(count){
    this.setState({
        countPublico:count
    })
}
componentDidMount() {
    var self=this;
    // var url = url'http://manolito:8080/todas_novedades';
    axios.get('http://127.0.0.1:7527/todas_novedades')
    .then(function(response){
       self.setState({
            novedadesTodas :response.data
       })
       var novedadesAlumnos = self.state.novedadesTodas.filter(filterAlumnos);
       var novedadesDocentes = self.state.novedadesTodas.filter(filterDocentes);
       var novedadesPublico = self.state.novedadesTodas.filter(filterPublico);
       self.setState({
           bodyAlumnos: ResultadoList(novedadesAlumnos),
           bodyDocentes:ResultadoList(novedadesDocentes),
           bodyPublico:ResultadoList(novedadesPublico),
           bodyTodas:ResultadoList(self.state.novedadesTodas),
           countAlumnos: novedadesAlumnos.length,
           countDocentes: novedadesDocentes.length,
           countPublico: novedadesPublico.length
       }) 
    });
}

  render() {
    const newsAlumnos = this.state.countAlumnos;     
    const newsDocentes = this.state.countDocentes;   
    const newsPublico = this.state.countPublico;   
    return (
    <div>
      <Col s={12} l={12} m={12}>
          <h5 className="blue-text" >Novedades</h5>
          <Collection>
            {newsAlumnos === 0 ?( <CollectionItem className="grey-text left-align">Alumnos</CollectionItem>):
            (
              <Modal
                  header={<span className="novedad-text">Novedades para alumnos</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Alumnos 
                    <Badge className="white-text teal lighten-2">{this.state.countAlumnos} nueva</Badge>
                  </CollectionItem>
                  }>
                 {this.state.bodyAlumnos}
              </Modal>)}
              {newsDocentes === 0 ?( <CollectionItem className="grey-text left-align">Docentes</CollectionItem>):
              (<Modal
                  header={<span className="novedad-text">Novedades para docentes</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Docentes {newsDocentes !== 0 ? (
                    <Badge className="white-text teal lighten-2">{this.state.countDocentes} nueva</Badge>
                    ) : (
                       null
                    )}
                  </CollectionItem>
                  }>
                  {this.state.bodyDocentes}
              </Modal>)}
              {newsPublico === 0 ?( <CollectionItem className="grey-text left-align">Público</CollectionItem>):
              (<Modal
                  header={<span className="novedad-text" >Novedades para público en general</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Público {newsPublico !== 0 ? (
                    <Badge className="white-text teal lighten-2">{this.state.countPublico} nueva</Badge>
                    ) : (
                       null
                    )}
                  </CollectionItem>
                  }>
                  {this.state.bodyPublico}
              </Modal>)}
          </Collection>
      </Col>
      <Col l={12} s={12}>
              <Modal
                  header={<span className="novedad-text">Todas las novedades</span>}
                  fixedFooter
                  trigger={
                    <Button className="grey white-text"waves='light'>Todas novedades</Button>
                  }>
                  {this.state.bodyTodas}
              </Modal>
      </Col>
    </div>
    );
  }
}

export default Novedades;
