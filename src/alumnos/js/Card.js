import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <div className="card banner">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="android_banner.jpg"/>
            <h5>{this.props.titulo}</h5>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.titulo}<i className="material-icons right">close</i></span>
            <p>Alumnos:{this.props.alumnos}</p><br/>
            <p>Tutor:{this.props.tutor}</p><br/>
            <p>Fecha:{this.props.fecha}</p><br/>
          </div>
    </div>
    );
  }
}

export default Card;

