import React, { Component } from 'react';
import {TextField, Grid} from 'material-ui';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import InputEmail from '../../componentes/js/InputEmail';

class FormDatosPersonales extends Component {

    constructor(props){
        super(props);
        this.state={
            nombre:this.props.nombre,
            errorNombre:"",
            apellido:this.props.apellido,
            errorApellido:"",
            email:this.props.email,
            errorEmail:"",
            telefono:"",
            errorTelefono:"",
            resetApellido:false,
            resetEmail:false,
            resetNombre:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(event){ //setea los estados para el correspondiente input //
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        }, () => this.props.onDataChange(this.state));
        // console.log("tel form: "+ this.state.telefono);

    }

    componentWillMount(){
        this.setState({
            telefono:this.props.telefono,
        })
    }

    validate(){  
        if(this.state.nombre!==""&& (this.state.apellido!=="") && (this.state.email!=="")){
            return true;
         }else{
            return false;
        }
     }
     

    emailValido(email){
        this.setState({email:email});
        this.validate();
      }
      nombreValido(nombre){
        this.setState({nombre:nombre},this.props.onDataChange(this.state));
        console.log("nombre form" + nombre);
        this.validate();
      }
      apellidoValido(apellido){
        this.setState({apellido:apellido});
        this.validate();
      }

      telefonoValido(){

        this.props.onDataChange(this.state);
      }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    {/* <TextField 
                        name="nombre" 
                        type="text" 
                        label="Nombre" 
                        value={this.state.nombre} 
                        onChange={this.handleChange}
                        error={this.state.errorNombre}
                        fullWidth
                    /> */}
                    <InputNombre 
                        reset={this.state.resetNombre}
                        val={this.state.nombre}
                        onValido={(e) => this.nombreValido(e)}
                    />
                </Grid>
                <Grid item xs={6}>
                    {/* <TextField 
                        name="apellido" 
                        type="text" 
                        label="Apellido" 
                        value={this.state.apellido} 
                        onChange={this.handleChange}
                        fullWidth
                    /> */}
                    <InputApellido 
                        reset={this.state.resetApellido}
                        val={this.state.apellido}
                        onValido={(e)=> this.apellidoValido(e)}
                    />
                </Grid>
                <Grid item xs={8}>
                    {/* <TextField 
                        name="email" 
                        type="email" 
                        label="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        fullWidth
                    /> */}
                    <InputEmail 
                        reset={this.state.resetEmail}
                        val={this.state.email}
                        onValido={(e) => this.emailValido(e)}
                    />
                </Grid> 
                <Grid item xs={4}>
                    <TextField 
                        type="number" 
                        name="telefono"
                        label="Teléfono" 
                        value={this.state.telefono} 
                        onChange={this.handleChange}
                       fullWidth
                    />
                </Grid> 
            </Grid>
        );
    }
}

export default FormDatosPersonales;