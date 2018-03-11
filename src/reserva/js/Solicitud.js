import React, { Component } from 'react';
import {Input, Button, Icon} from 'react-materialize';
import Iframe from 'react-iframe'
import esLang from 'date-fns/locale/es';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import {Grid, TextField} from 'material-ui';
import '../css/solicitud.css';
import InputNombre from '../../componentes/js/InputNombre';
import InputApellido from '../../componentes/js/InputApellido';
import Calendar from '../../componentes/js/Calendar';
    


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
});


class Solicitud extends Component {

    state = {
        selectedDate: new Date(),
        selectedTime: new Date(),
      }
    
      handleDateChange = date => {
        this.setState({ selectedDate: date })
      }
    
      handleTimeChange = time => {
        this.setState({ selectedTime: time })
      }
    


    render() {

        const { selectedDate, selectedTime } = this.state
        
        return (
            <div id='contenedorReserva'>
                <div className='solicitudForm'>
                    <div id="encabezadoSol">
                        <h5 id="tituloSol" align="center">Solicitud de reserva</h5>
                    </div>
                    <div className="form">
                        <Grid container spacing={24}>
                            <Grid item xs={6}>
                                <InputNombre/>
                            </Grid>
                            <Grid item xs={6}>
                                <InputApellido/>
                            </Grid>
                            <Grid item xs={8}>
                                <Input type="email" label="Email" s={12}/>
                            </Grid> 
                            <Grid item xs={4}>
                                <Input type="number" label="Teléfono" s={12}/>
                            </Grid> 
                            <Grid item xs={4}>
                                <DatePicker
                                    disablePast="true"
                                    okLabel="Aceptar"
                                    cancelLabel="Cancelar"
                                    label="Fecha"
                                    value={selectedDate}
                                    onChange={this.handleDateChange}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid> 
                            <Grid item xs={4}>
                                <TimePicker
                                    label="Hora de inicio"
                                    value={selectedTime}
                                    onChange={this.handleTimeChange}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TimePicker
                                    label="Hora de finalización"
                                    value={selectedTime}
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
                            <Grid item xs={12}>
                                <Button className="blue" waves='light'>Enviar<Icon left>send</Icon></Button>
                            </Grid>
                        </Grid>
                    </div>                
                </div>
                <div className='calendarContainer'>
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default Solicitud;