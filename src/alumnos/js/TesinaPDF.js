import React from 'react';
import { Page, Text, View, Document, StyleSheet } from 'react-pdf';
class TesinaPDF extends Component {
    render() {
      var settings = {
          dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
        autoplay:true
      };
      return (
          <Col s={12}>
              <Slider {...settings}>
                  <div>
                      <Tarjeta titulo="mi tesina"/>
                  </div>
                  <div>
                      <Tarjeta titulo="mi tesina"/>
                  </div>
              </Slider>
          </Col>
      );
    }
  }
  
  export default TesinaPDF;
  