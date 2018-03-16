import React, { Component } from 'react';
import {Input, Button, Icon} from 'react-materialize';
import Iframe from 'react-iframe'
import {Grid, Typography, withStyles,Paper} from 'material-ui';
import PropTypes from 'prop-types';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import '../css/solicitud.css';
import Calendar from '../../componentes/js/Calendar';
// import FormDatosReserva from './FormDatosReserva';
// import FormDatosPersonales from './FormDatosPersonales';

import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import FormDatosPersonales from './FormDatosPersonales';

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


  


class Solicitud extends Component {

    constructor(props){
        super(props);
        this.state = {
            // email:"",
            // telefono:"",
            personalDataError:false,
            selectedDate: new Date(),
            selectedTime: new Date(),
            activeStep:0
        }
    }

    getSteps() {
        return ['Datos personales y de contacto', 'Datos de la reserva', 'Detalle de la solicitud'];
      }
      
    getStepContent(step) {
        switch (step) {
          case 0:
            return   <FormDatosPersonales ref={instance => {this.childPersonales = instance;}}/> 
          case 1:
            return <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <DatePicker
                            disablePast="true"
                            okLabel="Aceptar"
                            cancelLabel="Cancelar"
                            label="Fecha"
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            InputProps={{
                                disableUnderline: true
                            }}
                        />
                    </Grid> 
                    <Grid item xs={4}>
                        <TimePicker
                            label="Hora de inicio"
                            value={this.state.selectedTime}
                            onChange={this.handleTimeChange}
                            InputProps={{
                                disableUnderline: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TimePicker
                            label="Hora de finalización"
                            value={this.state.selectedTime}
                            onChange={this.handleTimeChange}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                </Grid>
                <Grid item xs={12}>
                    <Input type='textarea' label="Motivo de la reserva"/>
                </Grid>
                <Grid item xs={12}>
                    <Input type='textarea' label="Observaciones"/>
                </Grid>
            </Grid>
          case 2: 
            return `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`;
          default:
            return 'Unknown step';
        }
      }

      handleDateChange = date => {
        this.setState({ selectedDate: date })
      }
    
      handleTimeChange = time => {
        this.setState({ selectedTime: time })
      }

    
    //   validatePersonalData(){
    //     if ()
    //   }

      handleNext = () => {
        if(this.state.activeStep == 0){
            if(this.childPersonales.validate()){ //si no hay errores de validación // 
                this.setState({
                  activeStep: this.state.activeStep + 1,
                });
            }
        }
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
      


    render() {
        const { classes } = this.props;
        const steps = this.getSteps();
        const { activeStep } = this.state
        const { selectedDate, selectedTime } = this.state;
        return (
            <div id='contenedorReserva'>
                <div className='solicitudForm'>
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
                                        {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
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
        );
    }
}

Solicitud.propTypes = {
    classes: PropTypes.object,
  };

export default withStyles(styles)(Solicitud);