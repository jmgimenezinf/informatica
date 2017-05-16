import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Collection,CollectionItem,Badge,Button,Icon} from 'react-materialize';
class Novedades extends Component {
  render() {
    return (
    <div>
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
      <Col l={12} s={12}>
          <Button className="grey white-text"waves='light'>Todas novedades</Button>
      </Col>
    </div>
    );
  }
}

export default Novedades;
