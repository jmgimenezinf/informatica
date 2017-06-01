import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Button,Icon} from 'react-materialize';
import '../css/docentes.css';

class Docentes extends Component {
constructor(props) {
    super(props);
    this.state = {display:"none"};
    this.handleAcordeon = this.handleAcordeon.bind(this);
}
handleAcordeon(e){
  if (this.state.display == "none") {
    this.setState({display:"block"});
  } else {
    this.setState({display:"none"});
  }
}

render() {
  var stylePanel ={display:this.state.display};

  return (
      <Row>
        <Col s={12} l={12} m={12}>
          <button className="acordeon waves-effect z-depth-1"
                  onClick={(e)=> this.handleAcordeon(e)} >Docentes</button>
          <div className="panel" style={stylePanel}>
            <button className="acordeon waves-effect z-depth-1" >Primer año</button>
          </div>
        </Col>

      </Row>);
  }
}

export default Docentes;
