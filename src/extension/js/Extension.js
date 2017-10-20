import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import ExtensionHtml from '../html/ExtensionHtml';

class Extension extends Component{

    render(){
        return(
            <Row className="container">
                <Col s={12} l={12} m={12}>
                    <h4 className="blue-text titulo">Extensión</h4>
                </Col>
                <Col s={12} l={12} m={12}>
                    <ExtensionHtml/>
                </Col>
            </Row>
        );
    }
    }

export default Extension;