import React, { Component } from 'react';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import {TextField, Grid} from 'material-ui';

class FormEvento extends Component {
constructor(props){
    super(props);
    this.state = {
        fecha: new Date(),
        horaInicio: new Date(),
        horaFin: new Date(),
        titulo:""
    }
    this.handleDateChange=this.handleDateChange.bind(this);    
    this.handleHoraInicioChange = this.handleHoraInicioChange.bind(this);  
    this.handleHoraFinChange=this.handleHoraFinChange.bind(this);  
    this.handleTituloChange=this.handleTituloChange.bind(this);
}

handleDateChange(date){
    console.log(date);
    this.setState({ fecha: date })
    this.props.fechaValue(date);
}
    
handleHoraInicioChange(time){
    this.setState({ horaInicio: time })
    this.props.horaInicioValue(time);
}

handleHoraFinChange(time){
    this.setState({ horaFin: time })
    this.props.horaFinValue(time);
}
handleTituloChange(titulo){
    console.log(titulo.target.value);
     this.setState({titulo: titulo.target.value});
    this.props.tituloValue(titulo.target.value);
}
render() {
    return (
        <Grid item container >
            <Grid item xs={12}>
                <TextField 
                    fullWidth
                    label="Título del evento"
                    value={this.state.titulo}
                    onChange={(titulo)=>this.handleTituloChange(titulo)}
                />
            </Grid> 
            <Grid item xs={12}>
                <DatePicker
                    disablePast="true"
                    okLabel="Aceptar"
                    cancelLabel="Cancelar"
                    label="Fecha"
                    value={this.state.fecha}
                    onChange={(date)=>this.handleDateChange(date)}
                />
            </Grid> 
            <Grid item  xs={6} >
                <TimePicker
                    label="Hora de inicio"
                    value={this.state.horaInicio}
                    onChange={(time)=>this.handleHoraInicioChange(time)}
                />
            </Grid>
            <Grid item  xs={6}>
                <TimePicker
                    label="Hora de finalización"
                    value={this.state.horaFin}
                    onChange={(time)=>this.handleHoraFinChange(time)}
                />
            </Grid>
        </Grid>
    );
}
}
export default FormEvento;