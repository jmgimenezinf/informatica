import React, { Component } from 'react';
import {Input, Button, Icon} from 'react-materialize';
import {ValidatorForm} from 'react-material-ui-form-validator';
import Iframe from 'react-iframe'
import {Grid, Typography, withStyles,Paper} from 'material-ui';
import PropTypes from 'prop-types';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import '../css/solicitud.css';
import Calendar from '../../componentes/js/Calendar';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import FormDatosPersonales from './FormDatosPersonales';
import FormDatosReserva from './FormDatosReserva';
import { blue700 } from 'material-ui/colors';
import { red100 } from 'material-ui/colors';

const styles = theme => ({
    palette: {
        primary: red100,
      },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    root: {
        width: '90%',
    },
    button: {
    color:red100,
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


  


class Solicitud extends Component {

    constructor(props){
        super(props);
        this.state = {
            personalDataError:false,
            selectedDate: new Date(),
            selectedTime: new Date(),
            activeStep:0,
            nombre:"",
            apellido:"",
            email:"",
            telefono:null,
        }
    }

    getSteps() {
        return ['Elija los espacios vacios del calendario para agregar eventos a su reserva','Datos personales y de contacto', 'Detalle de la solicitud'];
      }
      
    getStepContent(step) {
        switch (step) {
            case 0:
                return <FormDatosReserva/>
            case 1:
                return  <FormDatosPersonales
                            nombre={this.state.nombre}
                            apellido={this.state.apellido}
                            email={this.state.email}
                            telefono={this.state.telefono}
                            onDataChange = {(state) => this.updatePersonalState(state)}
                            ref={instance => {this.childPersonales = instance;}}
                        /> 
            case 2: 
                return `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`;
            default:
                return 'Unknown step';
        }
      }
      

      updatePersonalState(state){
          this.setState({
              nombre:state.nombre,
              telefono:state.telefono,
          })
          console.log(state.telefono);
      }

      handleDateChange = date => {
        this.setState({ selectedDate: date })
      }
    
      handleTimeChange = time => {
        this.setState({ selectedTime: time })
      }

    
      handleNext = () => {
        let datosPersonales = this.childPersonales;

        if(this.state.activeStep == 0){
            if(this.childPersonales.validate()){ //si no hay errores de validación //
                // console.log(datosPersonales.state.nombre);
                this.setState({
                    nombre:datosPersonales.state.nombre,
                    apellido:datosPersonales.state.apellido,
                    email:datosPersonales.state.email,
                    telefono:datosPersonales.state.telefono,
                    activeStep: this.state.activeStep + 1,
                });
            }
        }
            // this.setState({
            //     activeStep: this.state.activeStep + 1,
            // });
      };
    
      handleBack = () => {

        this.setState({
          activeStep: this.state.activeStep - 1,
        });
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };
      

      handleSubmit(){
          
      }


    render() {
        const { classes } = this.props;
        const steps = this.getSteps();
        const { activeStep } = this.state
        const { selectedDate, selectedTime } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                instantValidate
            >
                <div id='contenedorReserva'>
                    <div className='solicitudForm'>
                        <h4 align="center"> Solicitud de reserva </h4>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => {
                                return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                    <Typography>{this.getStepContent(index)}</Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}
                                            className={classes.button}
                                        >
                                            Volver
                                        </Button>
                                        <Button
                                            variant="raised"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}
                                        
                                        >
                                            {activeStep === steps.length - 1 ? 'Enviar' : 'Continuar con la reserva'}
                                        </Button>
                                        </div>
                                    </div>
                                    </StepContent>
                                </Step>
                                );
                            })}
                        </Stepper>  
                    </div>
                    <div className='calendarContainer'>
                        <Calendar/>
                    </div>
                </div>
            </ValidatorForm>
        );
    }
}

Solicitud.propTypes = {
    classes: PropTypes.object,
  };

export default withStyles(styles)(Solicitud);