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
function horaInicioFinFormat(evento){
    let inicio = new Date(evento.horaInicio);
    let fin = new Date(evento.horaFin);
    return "desde "+inicio.getHours() + ":"+inicio.getMinutes()
    +" hasta "+fin.getHours()+":"+fin.getMinutes();
}
function ListEventos(props){
    const eventos = props.eventos;
    const list = eventos.map((evento,index)=>
            <ListItem>
                <ListItemText
                    primary={evento.titulo}
                    secondary={evento.fecha + " " +horaInicioFinFormat(evento)}
                />
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
            titulo:"",
            horaInicio: new Date(),
            horaFin: new Date(),
            fecha:new Date(),
            eventos:[]
        }
        this.handleHoraInicio = this.handleHoraInicio.bind(this);
        this.handleHoraFin = this.handleHoraFin.bind(this);
        this.handleFechaEvento = this.handleFechaEvento.bind(this);
        this.handleTitulo = this.handleTitulo.bind(this);
        this.handleAgregarEvento = this.handleAgregarEvento.bind(this);
        this.borrarEvento = this.borrarEvento.bind(this);
        
    }

    handleHoraInicio(hora){
        this.setState({horaInicio: hora});
    }
    handleHoraFin(hora){
        this.setState({horaFin:hora});
    }
    handleFechaEvento(fecha){
        this.setState({fechaEvento:fecha});
    }
    handleTitulo(titulo){
        this.setState({titulo:titulo});
    }
    handleAgregarEvento(){
        let evento = {
            titulo:this.state.titulo,
            fecha:this.state.fecha.toLocaleDateString(),
            horaInicio:this.state.horaInicio.toISOString(),
            horaFin:this.state.horaFin.toISOString()
        }
        let updateEventos = this.state.eventos;
        updateEventos.push(evento);
        this.setState({eventos:updateEventos});
    }
    borrarEvento(index){
        let updateEventos = this.state.eventos;
        updateEventos.splice(index,1);
        this.setState({eventos:updateEventos});
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
                <Grid item xs={12} justify='flex-end'>
                    <Button color="primary" onClick={this.handleAgregarEvento}>
                        Agregar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <ListSubheader>Lista de reservas</ListSubheader>
                    <ListEventos self={this} eventos={this.state.eventos} />
                </Grid>
            </Grid>
        );
    }
}

export default FormDatosReserva;
