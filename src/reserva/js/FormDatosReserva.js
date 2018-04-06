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
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withMobileDialog,
  } from 'material-ui/Dialog';
import PropTypes from 'prop-types';


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
            eventoActual:"",
            eventos:[],
            dialogTitle:"",
            dialogContent:"",
            openDialog:false,
            dialogPregunta:""
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
        this.mostrarDisponibilidad= this.mostrarDisponibilidad.bind(this);
        this.handleCloseDialog=this.handleCloseDialog.bind(this);
        this.handleConsultarEvento=this.handleConsultarEvento.bind(this);
        this.handleAgregar=this.handleAgregar.bind(this);
        
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
    
    mostrarDisponibilidad(evento){
        this.setState({disponible:evento.libre});
        this.setState({openDialog:true});
        if(evento.libre){
            this.setState({botones:
            <div>
                <Button onClick={this.handleCloseDialog} color="primary">
                    No
                </Button>
                <Button onClick={this.handleAgregarEvento} color="primary" autoFocus>
                    Si
                </Button>
            </div>
            });
            let texto="El laboratorio se encuentra disponible para el dia "+
            this.state.fecha.toLocaleDateString() + horaInicioFinFormat(evento);
            this.setState({openAgregarEvento:true});
            this.setState({dialogTitle:<div align="center"><h4>¿Desea reservarlo?</h4></div>})
            this.setState({dialogPregunta:""});
            this.setState({dialogContent:texto});
        }else{
            let texto="El laboratorio se encuentra ocupado para el dia "+
            this.state.fecha.toLocaleDateString() + horaInicioFinFormat(evento);
            this.setState({openAgregarEvento:true});
            this.setState({dialogTitle:texto})
            this.setState({dialogPregunta:""});
            this.setState({dialogContent:""});
        }
    }
    verificarEvento(evento){
        return new Promise(function(resolve,reject){
            axios.post("http://10.15.1.181:7527/validar-evento",evento)
            .then(function(response){
                resolve(response.data);
            }).catch(()=>{
                console.log("inaccesible")
            });
        })      
    }
    handleAgregar(){
        let updateEventos = this.state.eventos;
        let evento = this.state.eventoActual;
        evento.titulo = this.state.titulo;
        updateEventos.push(evento);
        this.setState({
            eventos:updateEventos,
            mensaje:""
        });
        this.handleCloseDialog();
    }
    handleAgregarEvento(){
        this.setState({botones:
        <div>
            <Button onClick={this.handleCloseDialog} color="primary">
                Cancelar
            </Button>
            <Button onClick={this.handleAgregar} color="primary" autoFocus>
                Agregar
            </Button>
        </div>
        });
     
        this.setState({dialogContent:""})
        this.setState({dialogTitle:<div align="center"><h4>Ingrese un título para el evento</h4></div>})
        this.setState({dialogPregunta:<TextField 
            fullWidth
            label="Título del evento"
            value={this.state.titulo}
            placeholder="Ej Curso de Informática"
            onChange={(e)=>this.handleTituloChange(e)}
        />});
        this.setState({openAgregarEvento:true});

    }

    handleTituloChange(titulo){
         this.setState({titulo: titulo.target.value});
    }
    handleConsultarEvento(){
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
                this.mostrarDisponibilidad(evento);
                this.setState({eventoActual:evento})
            });
        }else{
            this.setState({mensaje:"Existe un evento agregado en ese rango de tiempo"});
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
    handleCloseDialog(){
        this.setState({openDialog:false});
    }
    render() {
        const { fullScreen } = this.props;
        return (
            <Grid container spacing={12}>
                <Dialog
                fullScreen={fullScreen}
                open={this.state.openDialog}
                onClose={this.handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{this.state.dialogTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.dialogContent}
                        </DialogContentText>
                        <DialogContentText>
                            {this.state.dialogPregunta}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {(this.state.disponible)?
                        <div>
                            {this.state.botones} 
                        </div>
                            :
                            <Button onClick={this.handleCloseDialog} color="primary">
                                Aceptar
                            </Button>
                            }
                    </DialogActions>
                </Dialog>
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
                    <Button color="primary" onClick={this.handleConsultarEvento}>
                        Consultar
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
FormDatosReserva.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
  };
export default withMobileDialog()(FormDatosReserva);
