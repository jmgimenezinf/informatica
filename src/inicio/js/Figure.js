
import React, { Component } from 'react';
import '../css/figure.css';
import {Icon} from 'react-materialize'
class Figure extends Component {
  render() {
    return (

        <div className="sedes">
                <div className="breaker-bottom"/>
                <figure className="media-left sedes-figure" >
                    <img alt="sede madryn" className="media-object"  src={'puerto-madryn.jpg'} />
                    <figcaption>Puerto Madryn <Icon className="red-text">room</Icon></figcaption>
                </figure>
                <figure className="media-left sedes-figure" >
                    <img alt="sede trelew" className="media-object" src={'trelew.jpg'} />
                    <figcaption>Trelew<Icon className="red-text">room</Icon></figcaption>
                </figure>
                <figure className="media-left sedes-figure" >
                    <img alt="sede comodoro rivadavia" className="media-object" src={'comodoro-rivadavia.jpg'} />
                    <figcaption>Comodoro Rivadavia<Icon className="red-text">room</Icon></figcaption>
                </figure>
                <figure className="media-left sedes-figure" >
                    <img alt="sede esquel" className="media-object" src={'esquel.jpg'} />
                    <figcaption>Esquel<Icon className="red-text">room</Icon></figcaption>
                </figure>
                <div className="breaker"/>
        </div>
    )}
}

export default Figure;
