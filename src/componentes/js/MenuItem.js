import React, { Component } from 'react';
import '../css/menuItem.css';

class MenuItem extends Component {
constructor(props) {
    super(props);
    this.state = {display:"none"};
    this.handleMenuItem = this.handleMenuItem.bind(this);
}
handleMenuItem(e){
  if (this.state.display === "none") {
    this.setState({display:"block"});
  } else {
    this.setState({display:"none"});
  }
}

render() {
  var styleSubMenu ={display:this.state.display};
  return (
    <div>
        <button className="menu-item waves-effect "
                onClick={(e)=> this.handleMenuItem(e)} >{this.props.titulo}</button>
        <div className="sub-menu" style={styleSubMenu}>
            {this.props.children}
        </div>
    </div>);
  }
}

export default MenuItem;
