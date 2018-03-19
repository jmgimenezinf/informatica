import React, { Component } from 'react';
import {TextField, Grid} from 'material-ui';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import InputEmail from '../../componentes/js/InputEmail';

class FormDatosPersonales extends Component {

    constructor(props){
        super(props);
        this.state={
            nombre:"",
            errorNombre:"",
            apellido:"",
            errorApellido:"",
            email:"",
            errorEmail:"",
            telefono:"",
            errorTelefono:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(event){ //setea los estados para el correspondiente input //
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }


    validate(){
        if(this.state.nombre.length < 3){
            this.setState({
                errorNombre: "El nombre debe contener al menos 3 caracteres"
            })
            return false;
        }else{
            this.setState({
                errorNombre: ""
            })
            return true;
        }
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
                    <InputNombre/>
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
                    <InputApellido/>
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
                    <InputEmail/>
                </Grid> 
                <Grid item xs={4}>
                    <TextField 
                        email="tel" 
                        type="number" 
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