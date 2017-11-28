import React, { Component } from 'react';
import {Col,Collection,CollectionItem,Badge,Button,Modal} from 'react-materialize';
import NovedadesRequest from './NovedadesRequest.js';
import '../css/novedades.css';

function News(props) {
    if (props.news==0) {
      return null;
    }
    return (
        <Badge newIcon>{this.state.countAlumnos}</Badge>
    );
  }
class Novedades extends Component {
constructor(props) {
    super(props);
    this.state={
        bodyAlumnos:<NovedadesRequest url="novedades_alumnos" setCount={(count)=> this.setCountAlumnos(count)}/>,
        bodyDocentes:<NovedadesRequest url="novedades_docentes" setCount={(count)=> this.setCountDocentes(count)}/>,
        bodyPublico:<NovedadesRequest url="novedades_publico" setCount={(count)=> this.setCountPublico(count)}/>,
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

  render() {
    const newsAlumnos = this.state.countAlumnos;     
    const newsDocentes = this.state.countDocentes;   
    const newsPublico = this.state.countPublico;   
    return (
    <div>
      <Col s={12} l={12} m={12}>
          <h5 className="blue-text" >Novedades</h5>
          <Collection>
              <Modal
                  header={<span className="novedad-text">Novedades para alumnos</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Alumnos 
                    {newsAlumnos !== 0 ? (
                    <Badge newIcon>{this.state.countDocentes}</Badge>
                    ) : (
                       null
                    )}
                  </CollectionItem>
                  }>
                 {this.state.bodyAlumnos}
              </Modal>
              <Modal
                  header={<span className="novedad-text">Novedades para docentes</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Docentes <Badge newIcon>{this.state.countDocentes}</Badge>
                  </CollectionItem>
                  }>
                  {this.state.bodyDocentes}
              </Modal>
              <Modal
                  header={<span className="novedad-text" >Novedades para público en general</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Público <Badge newIcon>{this.state.countPublico}</Badge>
                  </CollectionItem>
                  }>
                  {this.state.bodyPublico}
              </Modal>
          </Collection>
      </Col>
      <Col l={12} s={12}>
              <Modal
                  header={<span className="novedad-text">Todas las novedades</span>}
                  fixedFooter
                  trigger={
                    <Button className="grey white-text"waves='light'>Todas novedades</Button>
                  }>
                  <NovedadesRequest url="todas_novedades"/>
              </Modal>
      </Col>
    </div>
    );
  }
}

export default Novedades;
