import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Collection,CollectionItem,Badge,Button,Icon} from 'react-materialize';
import  InicioHtml from '../html/InicioHtml';
import  '../css/inicio.css';
class Inicio extends Component {
  render() {
    return (
        <Row>
          <Col l={3} m={3}s={12} className="white">
            <Col s={12}>
            <h5 className="blue-text" >Novedades</h5>
            <Collection>
              <CollectionItem href="#!">
              Alumnos <Badge newIcon>1</Badge>
              </CollectionItem>
              <CollectionItem href="#!">
              Docentes <Badge newIcon>4</Badge>
              </CollectionItem>
              <CollectionItem href="#!">
              Público<Badge newIcon>4</Badge>
              </CollectionItem>
            </Collection>
            </Col>
            <Col offset="s2" l={12} s={8}>
             <Button className="grey white-text"waves='light'>novedades antiguas</Button>
            </Col>
          </Col>
            <Col l={8} m={8} s={12} className="z-depth-1">
            <Col s={12} l={12} m={12}>
                <h3 className="blue-text">Inicio</h3>
            </Col>
            <Col s={12} l={12} m={12}>
                <InicioHtml/>
            </Col>
          </Col>
        </Row>
    );
  }
}

export default Inicio;
