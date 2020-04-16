import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import frontImage from '../images/on.png';
import sideImage from '../images/side.jpeg';
import leavingImage from '../images/leaving.png';
import leavingImage1 from '../images/leaving_1.png';
import ticketImage from '../images/ticket_img.png';
import lprImage from '../images/lpr_read.png';
import '../App.css';
import { SaveAlt, Close } from '@material-ui/icons';
import { tickets } from './mockData';
import moment from 'moment';

const TransactionPdf = props => {
     const { tId, lpn, start, end, duration, events } = props.transaction;

    const savePdf = () => {
        alert('Will save as pdf')
    }

   const toTitleCase = function (str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    };

    const transformData = (type, data) => {
        switch (type) {
            case 'TruckOn':
                return toTitleCase(data) + 'lb';
            case 'LprRead':
                return data.toUpperCase();
            case 'TicketReceived':
                return <span className="link" onClick={ () => props.displayTicket( tickets.filter( t => t.id.toString() === data.split(':')[1].trim() )) } style={{ textDecoration: 'underline', color: 'blue', fontWeight: 'bold' }}>Ticket: {data.split(':')[1].trim()}</span>
            case 'TruckLeaving':
                return toTitleCase(data) + ' lb'
            case 'OverWeight':
                return toTitleCase(data.split(',')[0]) + ' > ' + toTitleCase(data.split(',')[1])
            default:
                return data
        }
    }

    return (
        <Col xs={12} > 
            <div style={{ position: 'relative', backgroundColor: 'white', padding: 20, width: '80%', maxWidth: 800, margin: 'auto', textAlign: 'left', height: '90vh', maxHeight: '90vh', marginTop: '4vh', overflow: 'scroll', borderRadius: 5,  boxShadow: '5px 10px 18px #888888' }}>
                <Row center="xs" around="xs" >
                    <Col xs={12} md={6} style={{ textAlign: 'left', padding: 20 }}>
                        <p style={{ padding: 0, fontSize: '2vmin', color: 'grey', margin: 2, marginLeft: 40, marginBottom: 10, fontWeight: 'bold' }}>
                            Transaction Id: {tId}
                        </p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}>
                            <span style={{ fontWeight: 'bold' }}>Start:</span> {moment(start).format('MM-DD-YYYY   hh:mm:ss a')}
                        </p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}>
                            <span style={{ fontWeight: 'bold' }}>End:</span>  {moment(end).format('MM-DD-YYYY   hh:mm:ss a')}
                        </p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}>
                            <span style={{ fontWeight: 'bold' }}>Duration:</span>  {duration} min
                        </p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}>
                            <span style={{ fontWeight: 'bold' }}>Lpn:</span>  {lpn}
                        </p>
                        <p style={{ padding: 0, fontSize: '2vmin', color: 'grey', margin: 2, marginLeft: 40, fontWeight: 'bold', marginTop: 10 }}>Events:</p>
                        <div style={{ marginLeft: 5 }}>
                            { events.map( (ev, i) => (
                                <div key={ev.eId}>                           
                                    <p  style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>{i + 1} ) </span><span style={{ marginRight: 8, fontWeight: 'bold' }}> {ev.type}</span>  {moment(ev.timestamp).format('MM-DD-YYYY   hh:mm:ss a')}</p>
                                    <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 60 }}><span style={{ fontWeight: 'bold' }}>location:</span>  {ev.location}</p>
                                    {ev.data !== '' ?
                                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 60 }}><span style={{ fontWeight: 'bold' }}>data:</span> {transformData(ev.type,ev.data)}</p> :
                                        null
                                    }
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col xs={10} md={6} style={{ textAlign: 'left', padding: 20 }} >
                    {/* images here */}
                        <img src={sideImage} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5 }} />
                        <img src={frontImage} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5, marginBottom: 20 }} />
                    </Col>
                </Row>
                <Row center="xs" around="xs">
                    <Col xs={10} md={6} style={{ textAlign: 'left', padding: 20 }}>
                    <img src={ticketImage} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5 }} />
                    </Col>
                    <Col xs={10} md={6} style={{ textAlign: 'left', padding: 20 }}>
                        <img src={lprImage} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5 }} />
                    </Col>
                </Row>
                <Row center="xs" around="xs">
                    <Col xs={10} md={6} style={{ textAlign: 'left', padding: 20 }}>
                        <img src={leavingImage1} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5 }} />
                    </Col>
                    <Col xs={10} md={6} style={{ textAlign: 'left', padding: 20 }}>
                        <img src={leavingImage} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5 }} />
                    </Col>
                </Row>
                <Close style={{ position: 'absolute', top: 10, right: 10, padding: 5, color: 'grey' }}
                                  onClick={ () => props.closeTransactionPdf() } />
                <SaveAlt style={{ position: 'absolute', top: 60, right: 10, padding: 5, color: 'grey' }}
                                  onClick={ () => savePdf() } />
            </div>
        </Col>
    )
}

export default TransactionPdf;