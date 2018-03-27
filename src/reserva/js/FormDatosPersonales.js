import React, { Component } from 'react';
import {Grid, Button} from 'material-ui';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import InputEmail from '../../componentes/js/InputEmail';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    root: {
        width: '90%',
    },
    button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    },
    actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
    padding: theme.spacing.unit * 3,
    },
});


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
                resetApellido:false,
                resetEmail:false,
                resetNombre:false,
                submitted: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
    handleSubmit(){
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <TextValidator 
                        name="nombre" 
                        type="text" 
                        label="Nombre" 
                        value={this.state.nombre} 
                        onChange={this.handleChange}
                        errorMessages={[
                            'Este campo es obligatorio',
                            'El nombre no puede contener números'
                        ]}
                        fullWidth
                        validators = {[
                            'required',
                            'matchRegexp:^[a-zA-Z /t]+$'

                        ]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextValidator 
                        name="apellido" 
                        type="text" 
                        label="Apellido" 
                        value={this.state.apellido} 
                        onChange={this.handleChange}
                        errorMessages={[
                            'Este campo es obligatorio'
                        ]}
                        fullWidth
                        validators = {[
                            'required',

                        ]}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextValidator 
                        name="email" 
                        type="email" 
                        label="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        errorMessages={[
                            'Este campo es obligatorio',
                            'El email es inválido'
                        ]}
                        fullWidth
                        validators = {[
                            'required',
                            'isEmail'

                        ]}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default FormDatosPersonales;