import React, { Component } from 'react';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import {TextField, Grid, IconButton,Button} from 'material-ui';
import List, {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader
} from 'material-ui/List';
import DeleteIcon from 'material-ui-icons/Delete';
import FormEvento from './FormEvento';
import { equal } from 'assert';
import axios from 'axios';

function horaInicioFinFormat(evento){
    let inicio = new Date(evento.horaInicio);
    let fin = new Date(evento.horaFin);
    return " de "+  ('0' + inicio.getHours()).slice(-2) + ":" + ('0' + inicio.getMinutes()).slice(-2)
    +" a "+ ('0' + fin.getHours()).slice(-2)+":" + ('0' + fin.getMinutes()).slice(-2)
}
function ListEventos(props){
    const eventos = props.eventos;
    const list = eventos.map((evento,index)=>
            <ListItem>
                <ListItemText
                    primary={evento.titulo}
                    secondary={evento.fecha.toLocaleDateString() + " " +horaInicioFinFormat(evento)}
                />
                <h6>{(evento.libre)?"libre":"ocupado"}</h6>
                <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={()=>props.self.borrarEvento(index)}>
                    <DeleteIcon />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
    );
    return ( <List className="listaReservas"> {list} </List>);
}


class FormDatosReserva extends Component {
    constructor(props){
        super(props);
        this.state={
            titulo:null,
            fecha:this.inicializarFecha(),
            horaInicio: this.inicializarHoraInicio(),
            horaFin: this.inicializarHoraFin(),
            eventos:[],
            mensaje:""
        }
        this.handleHoraInicio = this.handleHoraInicio.bind(this);
        this.handleHoraFin = this.handleHoraFin.bind(this);
        this.handleFechaEvento = this.handleFechaEvento.bind(this);
        this.handleTitulo = this.handleTitulo.bind(this);
        this.handleAgregarEvento = this.handleAgregarEvento.bind(this);
        this.borrarEvento = this.borrarEvento.bind(this);
        this.jsonEqual = this.jsonEqual.bind(this);
        this.existeEvento = this.existeEvento.bind(this);
        this.beetwenDate = this.beetwenDate.bind(this);
        this.inicializarHoraInicio=this.inicializarHoraFin.bind(this);
        this.inicializarHoraFin=this.inicializarHoraFin.bind(this);
        this.inicializarFecha=this.inicializarFecha.bind(this);
        
    }

    jsonEqual(a,b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    existeEvento(evento,eventos){
        let self=this;
        return eventos.find(function(elem){
                if(evento.fecha.toLocaleDateString() == elem.fecha.toLocaleDateString()){
                    if(self.beetwenDate(evento.horaInicio,elem.horaInicio,elem.horaFin)){
                        return true;
                    }else if(self.beetwenDate(evento.horaFin,elem.horaInicio,elem.horaFin)){
                        return true;
                    }
                }
                return false
        })
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
    handleHoraInicio(hora){
        this.setState({horaInicio: hora,mensaje:""});
    }
    handleHoraFin(hora){
        this.setState({horaFin:hora,mensaje:""});
    }
    handleFechaEvento(fecha){
        this.setState({fecha:fecha,mensaje:""});
    }
    handleTitulo(titulo){
        this.setState({titulo:titulo});
    }
    beetwenDate(date,minDate,maxDate){
        if( date >=minDate && date < maxDate){
            return true;
        }
        return false;
    }
    verificarEvento(evento){
        return new Promise(function(resolve,reject){
            axios.post("http://192.168.1.37:7527/validar-evento",evento)
            .then(function(response){
                resolve(response.data);
            }).catch(()=>{
                console.log("inaccesible")
            });
        })      
    }
     handleAgregarEvento(){

        if(this.state.titulo !== null){
            let evento = {
                titulo:this.state.titulo,
                fecha:this.state.fecha,
                horaInicio:this.state.horaInicio.toISOString(),
                horaFin:this.state.horaFin.toISOString(),
                libre:null
            }
            console.log(Date.UTC(evento.fecha));
            let updateEventos = this.state.eventos;
            let existe = this.existeEvento(evento,updateEventos);
            if (!existe){
                this.verificarEvento(evento).then((libre)=>{
                    evento.libre= libre;
                    updateEventos.push(evento);
                    this.setState({
                        eventos:updateEventos,
                        mensaje:""
                    });
                });
            }else{
                this.setState({mensaje:"Existe un evento agregado en ese rango de tiempo"});
            }
        }
    }
    borrarEvento(index){
        let updateEventos = this.state.eventos;
        updateEventos.splice(index,1);
        this.setState({
            eventos:updateEventos,
            mensaje:"Evento eliminado"
        });
    }
    render() {
        const { selectedDate, selectedTime } = this.state;
        return (
            <Grid container spacing={12}>
                <FormEvento 
                fechaValue={(e) => this.handleFechaEvento(e)} 
                horaInicioValue={(e) => this.handleHoraInicio(e)} 
                horaFinValue={(e) => this.handleHoraFin(e)}
                tituloValue={(e)=> this.handleTitulo(e)}
                />
                <Grid item xs={8} justify='flex-end'>
                    <div><h7>{this.state.mensaje}</h7></div>
                </Grid>
                <Grid item xs={4} justify='flex-end'>
                    <Button color="primary" onClick={this.handleAgregarEvento}>
                        Agregar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <ListSubheader>Eventos agregados</ListSubheader>
                    <ListEventos self={this} eventos={this.state.eventos} />
                </Grid>
            </Grid>
        );
    }
}

export default FormDatosReserva;
