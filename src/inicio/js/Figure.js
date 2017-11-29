
import React, { Component } from 'react';
import '../css/figure.css';
import {Icon,Modal} from 'react-materialize'
import Iframe from 'react-iframe'
class Figure extends Component {
  render() {
    var styleMaps ={
        position:"relative",
        width:"100%",
        height:"100%",
      };  
    return (
        <div className="sedes">
                <div className="breaker-bottom"/>
                <figure className="media-left sedes-figure" >
                <img alt="sede madryn" className="media-object"  src={'puerto-madryn.jpg'} />
                    <Modal
                    header={"Departamento de Informática - Sede Puerto Madryn"}
                    fixedFooter
                    trigger={
                    <figcaption>Puerto Madryn <Icon className="red-text">room</Icon></figcaption>
                    }>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.1151605051787!2d-65.00795414963542!3d-42.78591527905831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe024ab2bbc28527%3A0xee29def8d6f3aae0!2sUniversidad+Nacional+de+la+Patagonia+San+Juan+Bosco.+Sede+Puerto+Madryn!5e0!3m2!1ses-419!2sar!4v1511887461019"
                    position="relative"
                    style={styleMaps}
                    allowFullScreen/>
                    </Modal>
                </figure>
                <figure className="media-left sedes-figure" >
                    <img alt="sede trelew" className="media-object" src={'trelew.jpg'} />
                    <Modal
                    header={"Departamento de Informática - Sede Trelew"}
                    fixedFooter
                    trigger={
                    <figcaption>Trelew <Icon className="red-text">room</Icon></figcaption>
                    }>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.710430850408!2d-65.30979564961505!3d-43.257490279034364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe0144c6652f9e9f%3A0x3b5d7e58b356504d!2sDIT!5e0!3m2!1ses-419!2sar!4v1511887565446"
                    position="relative"
                    style={styleMaps}
                    allowFullScreen/>
                    </Modal>
                </figure>
                <figure className="media-left sedes-figure" >
                    <img alt="sede comodoro rivadavia" className="media-object" src={'comodoro-rivadavia.jpg'} />
                    <Modal
                    header={"Departamento de Informática - Sede Comodoro Rivadavia"}
                    fixedFooter
                    trigger={
                    <figcaption>Comodoro Rivadavia <Icon className="red-text">room</Icon></figcaption>
                    }>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2780.362802307037!2d-67.46184534095504!3d-45.82401833437593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfe1a192df3789b2!2sUniversidad+Nacional+de+la+Patagonia+San+Juan+Bosco!5e0!3m2!1ses-419!2sar!4v1511885925921" 
                    display="initial"
                    position="relative"
                    style={styleMaps}
                    allowFullScreen/>
                    </Modal>
                </figure>
                <figure className="media-left sedes-figure" >
                    <img alt="sede esquel" className="media-object" src={'esquel.jpg'} />
                    <Modal
                    header={"Departamento de Informática - Sede Esquel"}
                    fixedFooter
                    trigger={
                    <figcaption>Esquel <Icon className="red-text">room</Icon></figcaption>
                    }>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.2393993565056!2d-71.36644654962916!3d-42.93107967905037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dade1b1ce0089%3A0x1546c87ab737b0bf!2sSede+Esquel+-+Universidad+Nacional+de+la+Patagonia+San+Juan+Bosco!5e0!3m2!1ses-419!2sar!4v1511887749333"
                    display="initial"
                    position="relative"
                    style={styleMaps}
                    allowFullScreen/>
                    </Modal>
                </figure>
                <div className="breaker"/>
        </div>
    )}
}

export default Figure;
