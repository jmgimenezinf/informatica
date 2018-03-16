import React, { Component } from 'react';
import {Grid} from 'material-ui';
import {Input} from 'react-materialize';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';

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
                    <Input 
                        name="nombre" 
                        type="text" 
                        label="Nombre" 
                        value={this.state.nombre} 
                        onChange={this.handleChange}
                        error={this.state.errorNombre}
                        s={12}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input 
                        name="apellido" 
                        type="text" 
                        label="Apellido" 
                        value={this.state.apellido} 
                        onChange={this.handleChange}
                        s={12}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Input 
                        name="email" 
                        type="email" 
                        label="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        s={12}
                    />
                </Grid> 
                <Grid item xs={4}>
                    <Input 
                        email="tel" 
                        type="number" 
                        label="Teléfono" 
                        value={this.state.telefono} 
                        onChange={this.handleChange}
                        s={12}
                    />
                </Grid> 
            </Grid>
        );
    }
}

export default FormDatosPersonales;