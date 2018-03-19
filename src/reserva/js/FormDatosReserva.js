import React, { Component } from 'react';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import {TextField, Grid } from 'material-ui';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List';

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
                    <Grid item xs={12}>
                        <TextField 
                            fullWidth
                            label="Título del evento"
                        />
                    </Grid> 
                    <Grid item xs={4}>
                        <DatePicker
                            disablePast="true"
                            okLabel="Aceptar"
                            cancelLabel="Cancelar"
                            label="Fecha"
                            value={selectedDate}
                            onChange={this.handleDateChange}
                        />
                    </Grid> 
                    <Grid item xs={4}>
                        <TimePicker
                            label="Hora de inicio"
                            value={selectedTime}
                            onChange={this.handleTimeChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TimePicker
                            label="Hora de finalización"
                            value={selectedTime}
                            onChange={this.handleTimeChange}
                        />
                </Grid>
                <Grid item xs={12}>
  
                </Grid>
            </Grid>
        );
    }
}

export default FormDatosReserva;
