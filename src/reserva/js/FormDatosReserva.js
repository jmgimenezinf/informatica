import React, { Component } from 'react';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import {TextField, Grid, IconButton} from 'material-ui';
import List, {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader
} from 'material-ui/List';
import DeleteIcon from 'material-ui-icons/Delete';

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
                    <ListSubheader>Lista de reservas</ListSubheader>
                    <List className="listaReservas">
                        <ListItem>
                            <ListItemText
                                primary="EPYA"
                                secondary="Martes de 17 a 19hs"
                            />
                            <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Algorítmica y Programación I"
                                secondary="Jueves de 14 a 16:30hs"
                            />
                            <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Arquitectura de Computadoras"
                                secondary="Miércoles de 15 a 17:30hs"
                            />
                            <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Base de Datos"
                                secondary="Lunes de 13 a 16hs"
                            />
                            <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        );
    }
}

export default FormDatosReserva;
