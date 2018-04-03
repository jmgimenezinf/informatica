import React, { Component } from 'react';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import {TextField, Grid} from 'material-ui';

class FormEvento extends Component {
constructor(props){
    super(props);
    this.state = {
        fecha: this.inicializarFecha(),
        horaInicio: this.inicializarHoraInicio(),
        horaFin: this.inicializarHoraFin(),
        titulo:""
    }
    this.handleDateChange=this.handleDateChange.bind(this);    
    this.handleHoraInicioChange = this.handleHoraInicioChange.bind(this);  
    this.handleHoraFinChange=this.handleHoraFinChange.bind(this);  
    this.handleTituloChange=this.handleTituloChange.bind(this);
    this.fechaMin = this.fechaMin.bind(this);
    this.horaInicioMax = this.horaInicioMax.bind(this);
    this.horaFinMin = this.horaFinMin.bind(this);
    this.horaMin = this.horaMin.bind(this);
    this.horaMax = this.horaMax.bind(this);
    this.inicializarHoraFin= this.inicializarHoraFin.bind(this);
    this.inicializarHoraInicio = this.inicializarHoraInicio.bind(this);
    this.inicializarFecha = this.inicializarFecha.bind(this);
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
inicializarHoraInicio(){
    let date = new Date();
    date.setHours(8);
    date.setMinutes(0);
    return date;
}
inicializarHoraFin(){
    let date = new Date();
    date.setHours(8);
    date.setMinutes(30);
    return date;
}
inicializarFecha(){
    let date = new Date();
    date.setDate(date.getDate() +1);
    return date;
}
fechaMin(){
    let date = new Date();
    date.setDate(date.getDate());
    return date;
}
horaMin(){
    let date = new Date();
    date.setHours(7);
    date.setMinutes(59);
    return date;
}
horaMax(){
    let date = new Date();
    date.setHours(23);
    date.setMinutes(55);
    return date;
}
horaInicioMax(){
    let fin = new Date(this.state.horaFin.toISOString());
    fin.setMinutes(fin.getMinutes()-30);
    return fin;  
}
horaFinMin(){
    let fin = new Date(this.state.horaInicio.toISOString());
    fin.setMinutes(fin.getMinutes()+30);
    return fin; 
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
                    minDate={this.fechaMin()}

                />
            </Grid> 
            <Grid item  xs={6} >
                <TimePicker
                    label="Hora de inicio"
                    value={this.state.horaInicio}
                    onChange={(time)=>this.handleHoraInicioChange(time)}
                    ampm={false}
                    autoOk={false}
                    okLabel="Aceptar"
                    cancelLabel="Cancelar"
                    minDateMessage="el laboratorio se encuentra cerrado en ese horario"
                    minDate={this.horaMin()}
                    maxDate={this.horaMax()}
                />
            </Grid>
            <Grid item  xs={6}>
                <TimePicker
                    label="Hora de finalización"
                    value={this.state.horaFin}
                    okLabel="Aceptar"
                    cancelLabel="Cancelar"
                    onChange={(time)=>this.handleHoraFinChange(time)}
                    ampm={false}
                    maxDate={this.horaMax()}
                    minDate={this.horaFinMin()}
                    minDateMessage="deben transcurrirse al menos 30 min después de la hora de inicio"
                    maxDateMessage="el laboratorio se encuentra cerrado en ese horario"
                />
            </Grid>
        </Grid>
    );
}
}
export default FormEvento;