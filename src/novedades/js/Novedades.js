import React, { Component } from 'react';
import {Col,Collection,CollectionItem,Badge,Button,Modal} from 'react-materialize';
import TodasNovedades from './TodasNovedades.js';
class Novedades extends Component {
  render() {
    return (
    <div>
      <Col s={12}>
          <h5 className="blue-text" >Novedades</h5>
          <Collection>
              <Modal
                  header='Novedades Alumnos'
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Alumnos <Badge newIcon>1</Badge>
                  </CollectionItem>
                  }>
                
              </Modal>
              <Modal
                  header='Novedades Docentes'
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Docentes <Badge newIcon>1</Badge>
                  </CollectionItem>
                  }>
               
              </Modal>
              <Modal
                  header='Novedades Público'
                  fixedFooter
                  trigger={
                  <CollectionItem href="#!">
                  Público <Badge newIcon>1</Badge>
                  </CollectionItem>
                  }>
                
              </Modal>
          </Collection>
      </Col>
      <Col l={12} s={12}>
              <Modal
                  header='Novedades'
                  fixedFooter
                  trigger={
                    <Button className="grey white-text"waves='light'>Todas novedades</Button>
                  }>
                  <TodasNovedades/>
              </Modal>
      </Col>
    </div>
    );
  }
}

export default Novedades;
