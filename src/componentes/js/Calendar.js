import React, { Component } from 'react';
import Iframe from 'react-iframe'

class Calendar extends Component {
    render() {

        return (
                <Iframe url="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=2&amp;hl=es&amp;bgcolor=%23ffffff&amp;src=fd7mr7mrcjct59asoqkr85ldl0%40group.calendar.google.com&amp;color=%231B887A&amp;ctz=America%2FArgentina%2FBuenos_Aires" 
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