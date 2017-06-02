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
                   header={<h4 className="novedad-text">Novedades para alumnos</h4>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Alumnos <Badge newIcon>1</Badge>
                  </CollectionItem>
                  }>
                 <NovedadesRequest url="novedades_alumnos"/>
              </Modal>
              <Modal
                  header={<h4 className="novedad-text">Novedades para docentes</h4>}
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Docentes <Badge newIcon>1</Badge>
                  </CollectionItem>
                  }>
                 <NovedadesRequest url="novedades_docentes"/>
              </Modal>
              <Modal
                  header={<h4 className="novedad-text">Novedades para público en general</h4>}
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
                  header={<h4 className="novedad-text">Todas las novedades</h4>}
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
