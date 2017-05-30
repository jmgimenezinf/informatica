import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-materialize';
import '../css/docentes.css';

class Docentes extends Component {
constructor(props) {
    super(props);
    this.state = {display:"block"};
    this.handleAcordeon = this.handleAcordeon.bind(this);
}
handleAcordeon(){

  if (this.state.display == "none") {
      this.setState({display:"block"});
  } else {
      this.setState({display:"none"});
}

}
  render() {
    var stylePanel ={
      display: this.state.display
    }
    return (
        <Row>
          <Col s={2} l={3} m={2}>
            <button className="acordeon" onClick={this.handleAcordeon} >Docentes</button>
            <div className="panel" style={stylePanel}>
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
