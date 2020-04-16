import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import sideImage from '../images/side.jpeg';
import ticketImage from '../images/ticket_img.png';
import '../App.css';
import { SaveAlt, Close } from '@material-ui/icons';
import moment from 'moment';

const TicketTemplate = props => {
    const { id, order, batch, plant, customer, carrier, truck, product, location, gross, tare, net, timestamp } = props.ticket;

    const savePdf = () => {
        alert('Will save as pdf')
    }

    return (
        <Col xs={12} > 
            <div style={{ position: 'relative', backgroundColor: 'white', padding: 20, width: '70%', maxWidth: 720,margin: 'auto', textAlign: 'left', height: 'auto', maxHeight: '85vh', marginTop: '10vh', overflow: 'scroll', borderRadius: 5,  boxShadow: '5px 10px 18px #888888' }}>
                <Row center="xs" around="xs"style={{ padding: 10 }} >
                    <Col xs={12} md={6} style={{ textAlign: 'left' }}>
                        <p style={{ padding: 0, fontSize: '2vmin', color: 'grey', margin: 2, marginLeft: 40, fontWeight: 'bold' }}>Ticket: {id}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40, marginTop: 10 }}><span style={{ fontWeight: 'bold'}}>Timestamp:</span>   {moment(timestamp).format('MM-DD-YYYY   hh:mm:ss a')}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Order:</span> {order}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Batch:</span> {batch}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Plant:</span> {plant}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Customer:</span> {customer}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Carrier:</span> {carrier}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Truck:</span> {truck}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Product:</span> {product}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Location:</span> {location}</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Tare Weight:</span> {tare} lb</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Gross Weight:</span> {gross} lb</p>
                        <p style={{ padding: 0, fontSize: '1.5vmin', color: 'grey', margin: 2, marginLeft: 40 }}><span style={{ fontWeight: 'bold' }}>Net Weight:</span> {net} lb</p>
                    </Col>
                    <Col xs={10} md={6} style={{ marginTop: 10 }}>
                    {/* images here */}
                        <img src={ticketImage} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5 }} />   
                    </Col>
                </Row>
                <Row center="xs" around="xs" style={{ padding: 10, marginTop: -10 }}>
                    <Col xs={10}  md={6} mdOffset={6} >
                        <img src={sideImage} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5 }} />
                    </Col>
                </Row>

                <Close style={{ position: 'absolute', top: 10, right: 10, padding: 5, color: 'grey' }}
                                  onClick={ () => props.closeTicketView() } />
                <SaveAlt style={{ position: 'absolute', top: 60, right: 10, padding: 5, color: 'grey' }}
                                  onClick={ () => savePdf() } />
            </div>
        </Col>
    )
}

export default TicketTemplate;