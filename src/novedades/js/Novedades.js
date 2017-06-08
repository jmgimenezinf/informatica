import React, { Component } from 'react';
import {Col,Collection,CollectionItem,Badge,Button,Modal} from 'react-materialize';
import NovedadesRequest from './NovedadesRequest.js';
import '../css/novedades.css';
class Novedades extends Component {
  render() {
    return (
    <div>
      <Col s={12}>
          <h5 className="blue-text" >Novedades</h5>
          <Collection>
              <Modal
                  header={<span className="novedad-text">Novedades para alumnos</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Alumnos <Badge newIcon>1</Badge>
                  </CollectionItem>
                  }>
                 <NovedadesRequest url="novedades_alumnos"/>
              </Modal>
              <Modal
                  header={<span className="novedad-text">Novedades para docentes</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Docentes <Badge newIcon>1</Badge>
                  </CollectionItem>
                  }>
                 <NovedadesRequest url="novedades_docentes"/>
              </Modal>
              <Modal
                  header={<span className="novedad-text">Novedades para público en general</span>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Público <Badge newIcon>1</Badge>
                  </CollectionItem>
                  }>
                 <NovedadesRequest url="novedades_publico"/>
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
