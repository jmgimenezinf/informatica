import React, { Component } from 'react';
import {Input} from 'react-materialize';
import Iframe from 'react-iframe'
import TextField from 'material-ui/TextField';
import { TimePicker, DatePicker } from 'material-ui-pickers'
import Grid from 'material-ui/Grid';
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
                    <div className="form">
                        <Grid container spacing={24}>
                            <Grid item xs={6}>
                                <InputNombre/>
                            </Grid>
                            <Grid item xs={6}>
                                <InputApellido/>
                            </Grid>
                            <Grid item xs={12}>
                                <Input type="email" label="Email" s={12} />
                            </Grid> 
                            <Grid item xs={4}>
                                <DatePicker
                                    value={selectedDate}
                                    onChange={this.handleDateChange}
                                />
                            </Grid> 
                            <Grid item xs={4}>
                                <TimePicker
                                value={selectedTime}
                                onChange={this.handleTimeChange}
                                />
                            </Grid> 
                        </Grid>
                    </div>

            
                    
                        {/* <Row>
                            <Col l={4}> 
                                <div>
                                    <Row>
                                        <Col l={12}>
                                            <TextField
                                                className="input"
                                                floatingLabelText="Nombre"
                                                type="text"
                                            />
                                            <TextField
                                                floatingLabelText="Apellido"
                                                type="text"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col l={10}>
                                        <TextField
                                            floatingLabelText="Email"
                                            type="email"
                                            fullWidth="true"
                                        />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col l={8}>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col l={12}>

                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col l={8}>
                                <div>
                                    <Calendar/>
                                </div>
                            </Col>
                        </Row> */}
                    

                </div>
                <div className='calendarContainer'>
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default Solicitud;