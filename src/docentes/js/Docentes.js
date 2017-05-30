import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-materialize';
import '../css/docentes.css';


class Docentes extends Component {
constructor(props) {
    super(props);
    this.handleAcordeon = this.handleAcordeon.bind(this);
}
handleAcordeon(){
  this.classList.toggle("active");

  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
      panel.style.display = "none";
  } else {
      panel.style.display = "block";
}
}
  render() {
    return (
        <Row>
          <Col s={2} l={3} m={2}>
            <button className="acordeon" onClick={this.handleAcordeon} >Docentes</button>
            <div className="panel">
              <p>Lorem ipsum...</p>
            </div>

            <button className="acordeon">Section 2</button>
            <div className="panel">
              <p>Lorem ipsum...</p>
            </div>

            <button className="acordeon">Section 3</button>
            <div className="panel">
              <p>Lorem ipsum...</p>
            </div>
          </Col>
          <Col s={10} l={9} m={10}>
              <ul>
                <li>dasdasd</li>
                <li>dasdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>dasdasd</li>
           </ul>
          </Col>
        </Row>
    );
  }
}

export default Docentes;
