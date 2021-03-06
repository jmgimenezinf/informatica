import React, { Component } from 'react';
import {Row,Col,Button} from 'react-materialize';
import {Grid} from 'material-ui';
import InputEmail from '../../componentes/js/InputEmail';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import RichEdit from '../../componentes/js/RichEdit';
import {stateToHTML} from 'draft-js-export-html';
import axios from 'axios';
import '../css/contacto.css';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
// import {url,port} from '../../../ignorar/configReact.js'

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleAlert:"Enviando...",
      typeAlert:"",
      textAlert:"",
      confirmButton:"false",
      email:"",
      nombre:"",
      apellido:"",
      richEdit:"",
      resetApellido:false,
      resetEmail:false,
      resetNombre:false,
      fontSize:'60px',
      col:8,
      height:40,
      activo:false
    };
    this.emailValido=this.emailValido.bind(this);    
    this.nombreValido=this.nombreValido.bind(this);  
    this.apellidoValido=this.apellidoValido.bind(this);    
    this.richEditValido=this.richEditValido.bind(this);    
    this.checkState = this.checkState.bind(this);
    this.handleStyleTitleContact = this.handleStyleTitleContact.bind(this);
    this.handleStyleButtonSubmit = this.handleStyleButtonSubmit.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.renderFormContacto= this.renderFormContacto.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  checkState(){  
     if(this.state.nombre!==""&& (this.state.apellido!=="") && (this.state.email!=="")&&(this.state.richEdit!=="")){
       this.handleStyleButtonSubmit(true);
      }else{
        this.handleStyleButtonSubmit(false);
     }
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
    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <InputNombre 
            reset={this.state.resetNombre}
            onValido={(e) => this.nombreValido(e)}
          />
        </Grid>
        <Grid item xs={4}>
          <InputApellido 
            reset={this.state.resetApellido}
            onValido={(e)=> this.apellidoValido(e)}
          />
        </Grid>
        <Grid item xs={4}>
          <InputEmail 
            reset={this.state.resetEmail}
            onValido={(e) => this.emailValido(e)}
          />
        </Grid>
      </Grid>
    );
  }

  renderFormContacto(){
    return( 
    <div className="opaco">
      <Col m={12} s={12} l={12} className="opaco" >
        {this.renderInputs()}
      </Col>
      <RichEdit height="60px" onValido={(e) => this.richEditValido(e)}/>
    </div>);
  }

  handleStyleTitleContact(e){
    if (!(this.state.fontSize === '60px' && this.state.activo)) {
      this.setState({
        col:11,
        fontSize:'30px'
      });
    } 
  }
  handleStyleButtonSubmit(e){
    this.setState({activo:e});
  }
  handleReset(){
    this.setState({
      resetApellido:false,
      resetEmail:false,
      resetNombre:false
    });
   
  }
  handleSubmit(e){
    var stateRichEdit = this.state.richEdit;
    var richEditHTML = stateToHTML(stateRichEdit);
    var json = {
                "nombre":this.state.nombre,
                "apellido":this.state.apellido,
                "email":this.state.email,
                "richEdit":richEditHTML
              }
    
    this.setState({
      resetApellido:true,
      resetEmail:true,
      resetNombre:true,
      emailValido:false,
      email:""
    });

    this.handleStyleButtonSubmit(false);
    var self = this;
    // var urlVar = 'http://www.dinfo.ing.unp.edu.ar:7527/send-mail';    
    axios.post(
      'http://www.dinfo.ing.unp.edu.ar:7527/send-mail',json,
      {headers: {'Content-Type': 'application/json'}})
    .then(function(response){ 
        console.log(response.status); 
        self.setState({
          titleAlert:"¡Mensaje enviado!",
          typeAlert:"success",
          textAlert:"¡Gracias por conmunicarse!le responderemos a la brevedad",
          confirmButton:true          
      })}).catch(function (error) {
          self.setState({
            titleAlert:"Oops",
            typeAlert:"error",
            textAlert:"Error al intentar conectarse con el servidor",
            confirmButton:true   
        });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.resetApellido) {
      this.setState({
        titleAlert:"Enviando...",
        typeAlert:"",
        textAlert:"",
        confirmButton:false            
      });
        this.handleReset();
    }
  }

  render() {
    var styleSubMenu ={
      fontSize:this.state.fontSize,
      WebkitTransition: '750ms', 
      msTransition: '750ms' 
    };  
    var styleTransition={
      WebkitTransition: '750ms', 
      msTransition: '750ms' 
    }
  return (
  <Row className="contacto">
      <Col l={12} className="polarizado">
        <Col s={8} >
          <h3 className="blue-text" style={styleSubMenu}>Contacto</h3>
        </Col>
        <Col  style={styleTransition} 
              m={12} s={12} l={this.state.col} 
              onClick={(e)=> this.handleStyleTitleContact(e)}>
            <Col m={12} s={12} l={7}>
                {this.renderFormContacto()}
            </Col>
            <Col m={12} s={12} l={7}>
              <Button 
                    disabled={!this.state.activo} 
                    floating large className='green boton-enviar' 
                    waves='light' icon='email'
                    onClick={(e)=>{this.handleSubmit(e);this.setState({ show: true })}
                    }>
              </Button>
              <SweetAlert
                show={this.state.show}
                title={this.state.titleAlert}
                text={this.state.textAlert}
                showConfirmButton={this.state.confirmButton}
                onConfirm={() => this.setState({ show: false })}
                onClose={() => console.log('close')}
                type={this.state.typeAlert}
              />
            </Col>
        </Col>
      </Col>
  </Row>
  );                                      
  }
}

export default Contacto;
