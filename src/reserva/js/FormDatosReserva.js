import React, { Component } from 'react';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import {Grid} from 'material-ui';
import {Input} from 'react-materialize';

class FormDatosReserva extends Component {

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
        const { selectedDate, selectedTime } = this.state;
        return (
                <Grid container spacing={24}>
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
            </Grid>
        );
    }
}

export default FormDatosReserva;
