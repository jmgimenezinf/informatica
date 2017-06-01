import React, { Component } from 'react';
import {Row,Col} from 'react-materialize';
import ExtensionHtml from '../html/ExtensionHtml';

class Extension extends Component{

    render(){
        return(
            <Row className="container">
                <Col s={12} l={12} m={12}>
                    <h3 className="blue-text">Extensión</h3>
                </Col>
                <Col s={12} l={12} m={12}>
                    <ExtensionHtml/>
                </Col>
            </Row>
        );
    }
    }

export default Extension;