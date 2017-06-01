import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import Inicio from '../../inicio/js/Inicio.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class MenuLateral extends Component {


render() {

  return (
      <Row>
        <Router>
            <Link to="inicio">Inicio</Link>
            <Link to="inicio">Inicio</Link>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/" component={Inicio} />

        </Router>
      </Row>
  );
}

}

export default MenuLateral;
