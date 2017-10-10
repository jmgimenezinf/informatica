import React, { Component } from 'react';
import {Col} from 'react-materialize';
import InputEmail from '../../componentes/js/InputEmail';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import RichEdit from '../../componentes/js/RichEdit';

class FormContacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      nombre:"",
      apellido:"",
      richEdit:"",
      resetApellido:false,
      resetEmail:false,
      resetNombre:false
    };
    this.emailValido=this.emailValido.bind(this);    
    this.nombreValido=this.nombreValido.bind(this);  
    this.apellidoValido=this.apellidoValido.bind(this);    
    this.richEditValido=this.richEditValido.bind(this);    
    this.checkState = this.checkState.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  checkState(){  
     if(this.state.nombre!==""&& (this.state.apellido!=="") && (this.state.email!=="")&&(this.state.richEdit!=="")){
            this.props.onValido(true);
     }else{
      this.props.onValido(false);
     }
     this.props.inputs(this.state);
  }

  emailValido(email){
    this.setState({email:email});
    this.checkState();
  }
  nombreValido(nombre){
    this.setState({nombre:nombre});
    this.checkState();
  }
  apellidoValido(apellido){
    this.setState({apellido:apellido});
    this.checkState();
  }
  richEditValido(richEdit){
    this.setState({richEdit:richEdit});
    this.checkState();
  }
  renderInputs(){
    return <div><InputNombre reset={this.state.resetNombre}
    onValido={(e) => this.nombreValido(e)}/>
    <InputApellido reset={this.state.resetApellido}
    onValido={(e)=> this.apellidoValido(e)}/>
    <InputEmail reset={this.state.resetEmail}
    onValido={(e) => this.emailValido(e)}/></div>;
  }
  handleFocus(e){
    if(this.props.reset){
      this.setState({
        resetApellido:true,
        resetNombre:true,
        resetEmail:true
    });
    }else{
      this.setState({
        resetApellido:false,
        resetNombre:false,
        resetEmail:false
    });
    }
  }
  render() {

    return (
      <div className="opaco" onMouseOver={(e)=>this.handleFocus(e)}>
        <Col m={12} s={12} l={12} className="opaco" >
          {this.renderInputs()}
        </Col>
        <RichEdit height="60px" onValido={(e) => this.richEditValido(e)}/>
      </div>
    );                                      
  }
}

export default FormContacto;
