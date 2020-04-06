import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import EventTooltip from './EventTooltip';
import ReportTimeStrip from './ReportTimeStrip';
import { eventTypeToIcon } from '../utilities/helper';
import { transactions, events } from './mockData.js';
import moment from 'moment';
import '../App.css';

class Test extends React.Component {

    state = {
        displayEvent: false,
        currentEvent: {}
    }

    parseEventTimestamp = timestamp => {
        const hour = moment(timestamp).format('HH');
        const minute = moment(timestamp).format('mm');
        let ts;
        console.log('H: ', hour)
        console.log('M: ', minute)

        switch (hour.toString()) {
            case '00':
                ts = 130;
                break;
            case '01':
                ts = 380;
                break;
            case '02':
                ts = 615;
                break;
            case '03':
                ts = 850;
                break;
            case '04':
                ts = 1090;
                break;
            case '05':
                ts = 1330;
                break;
            case '06':
                ts = 1560;
                break;
            case '07':
                ts = 1800;
                break;
            case '08':
                ts = 2040;
                break;
            case '09':
                ts = 2270;
                break;
            case '10':
                ts = 2510;
                break;
            case '11':
                ts = 2760;
                break;
            case '12':
                ts = 3005;
                break;
            case '13':
                ts = 3250;
                break;
            case '14':
                ts = 3490;
                break;
            case '15':
                ts = 3725;
                break;
            case '16':
                ts = 3965;
                break;
            case '17':
                ts = 4205;
                break;
            case '18':
                ts = 4440;
                break;
            case '19':
                ts = 4680;
                break;
            case '20':
                ts = 4915;
                break;
            case '21':
                ts = 5155;
                break;
            case '22':
                ts = 5395;
                break;
            case '23':
                ts = 5650;
                break;  
            default:
                ts= 120
        }
        
        if ( minute.toString() !== '00') {
            ts = ts + (minute * 4.4)
        }

        return ts;

    };

    displayEventData = (e, ev) => {
        const el = e.target;
        this.setState({
            currentEvent: ev,
            displayEvent: true
        })
    };

    closeEventDisplay = (e) => {
        this.setState({
            currentEvent: {},
            displayEvent: false
        })
    }
    render() {
        return(
            <Col xs={12} s={12} md={12} lg={12} >
                {/* timeline */}
                <div className="overflowX" style={{ position: 'relative' }}>
                    <div style={{ position: 'fixed', width: 100, height: 40,  backgroundColor: 'white'}}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: 100, width: 5760 }}>
                        <p style={{ color: 'grey' }}>12:00am </p>
                        <p style={{ color: 'grey' }}>12:30am </p>
                        <p style={{ color: 'grey' }}>1:00am </p>
                        <p style={{ color: 'grey' }}>1:30am </p>
                        <p style={{ color: 'grey' }}>2:00am </p>
                        <p style={{ color: 'grey' }}>2:30am </p>
                        <p style={{ color: 'grey' }}>3:00am </p>
                        <p style={{ color: 'grey' }}>3:30am </p>
                        <p style={{ color: 'grey' }}>4:00am </p>
                        <p style={{ color: 'grey' }}>4:30am </p>
                        <p style={{ color: 'grey' }}>5:00am </p>
                        <p style={{ color: 'grey' }}>5:30am </p>
                        <p style={{ color: 'grey' }}>6:00am </p>
                        <p style={{ color: 'grey' }}>6:30am </p>
                        <p style={{ color: 'grey' }}>7:00am </p>
                        <p style={{ color: 'grey' }}>7:30am </p>
                        <p style={{ color: 'grey' }}>8:00am </p>
                        <p style={{ color: 'grey' }}>8:30am </p>
                        <p style={{ color: 'grey' }}>9:00am </p>
                        <p style={{ color: 'grey' }}>9:30am </p>
                        <p style={{ color: 'grey' }}>10:00am </p>
                        <p style={{ color: 'grey' }}>10:30am </p>
                        <p style={{ color: 'grey' }}>11:00am </p>
                        <p style={{ color: 'grey' }}>11:30am </p>
                        <p style={{ color: 'grey' }}>12:00pm </p>
                        <p style={{ color: 'grey' }}>12:30pm </p>
                        <p style={{ color: 'grey' }}>1:00pm </p>
                        <p style={{ color: 'grey' }}>1:30pm </p>
                        <p style={{ color: 'grey' }}>2:00pm </p>
                        <p style={{ color: 'grey' }}>2:30pm </p>
                        <p style={{ color: 'grey' }}>3:00pm </p>
                        <p style={{ color: 'grey' }}>3:30pm </p>
                        <p style={{ color: 'grey' }}>4:00pm </p>
                        <p style={{ color: 'grey' }}>4:30pm </p>
                        <p style={{ color: 'grey' }}>5:00pm </p>
                        <p style={{ color: 'grey' }}>5:30pm </p>
                        <p style={{ color: 'grey' }}>6:00pm </p>
                        <p style={{ color: 'grey' }}>6:30pm </p>
                        <p style={{ color: 'grey' }}>7:00pm </p>
                        <p style={{ color: 'grey' }}>7:30pm </p>
                        <p style={{ color: 'grey' }}>8:00pm </p>
                        <p style={{ color: 'grey' }}>8:30pm </p>
                        <p style={{ color: 'grey' }}>9:00pm </p>
                        <p style={{ color: 'grey' }}>9:30pm </p>
                        <p style={{ color: 'grey' }}>10:00pm </p>
                        <p style={{ color: 'grey' }}>10:30pm </p>
                        <p style={{ color: 'grey' }}>11:00pm </p>
                        <p style={{ color: 'grey' }}>11:30pm </p>
                    </div>

            {/* map our transactions into rows of data */}
            { transactions.map( t => 
                    <div key={t.id} style={{ padding: 5, marginBottom: 5 }}>
                        <div style={{ position: 'relative' }}>
                            <span style={{ zIndex: 20, position: 'fixed', width: 100, marginLeft: -4, backgroundColor: 'white', textAlign: 'left', height: 20 }}>{t.sLpn}</span>
                            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'lightgrey', width: 5800, height: 20, marginLeft: 100 }} className="overflowX">
                                {/* filter and map the events that pertain to this transaction */}
                                { events.filter( ev => ev.bTransId === t.id ).map( (ev,i) => 
                                    <div key={ev.id} style={{ padding: 1, paddingTop: 4, color: 'black' }} onMouseEnter={ (e) => this.displayEventData(e, ev) }  onMouseLeave={ (e) => this.closeEventDisplay(e) } >
                                        <span style={{ position: 'absolute', left: this.parseEventTimestamp(ev.dTimestamp) }}>{eventTypeToIcon(ev.sEventType)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> 
                )}
    {/* place items on the time line with position fixed left value */}
    {/* each hour is 100px, position 1 is 120, start adding 100 from there */}
    
               
                </div>
    
                {/* tooltip of information view displayed on event hover */}
                { this.state.displayEvent ? 
                   <EventTooltip event={ this.state.currentEvent} /> :
                    null
                }
            </Col>
        )
    }
}

export default Test;