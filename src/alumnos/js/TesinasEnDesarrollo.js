import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Card,CardTitle,CardPanel} from 'react-materialize';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class TesinasEnDesarrollo extends Component {
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
            <Slider {...settings}>
                <div>
                     <h3>1</h3>                                        
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider>
    );
  }
}

export default TesinasEnDesarrollo;
