import React, { Component } from 'react';
import Iframe from 'react-iframe'

class Calendar extends Component {
    render() {

        return (
                <Iframe url="https://calendar.google.com/calendar/embed?src=fd7mr7mrcjct59asoqkr85ldl0%40group.calendar.google.com&ctz=America/Argentina/Buenos_Aires" 
                            display="initial"
                            position="absolute"
                            allowFullScreen
                            height="90%"
                            width="65%"
                />
        );
    }
}

export default Calendar;