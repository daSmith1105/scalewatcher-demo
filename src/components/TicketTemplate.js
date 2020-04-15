import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import frontImage from '../images/on.png';
import sideImage from '../images/side.jpeg';
import '../App.css';
import { SaveAlt, Close } from '@material-ui/icons';

const TicketTemplate = props => {
    const { id, order, batch, plant, customer, carrier, truck, product, location, gross, tare, net, timestamp } = props.ticket;

    // id: 1000,
    // order: 'M54221',
    // batch: 'LT808',
    // plant: '54510',
    // customer:'390972 CORSICANA YARD-CREDIT CARD',
    // carrier: '',
    // truck: 'm15',
    // product: '2938 YARD SCRAP',
    // location: 'Scale 1',
    // gross: '42880',
    // tare: '18520',
    // net: '24360',
    // images: '',
    // timestamp: today + ' 02:25:15'

    const savePdf = () => {
        alert('Will save as pdf')
    }

    return (
        <Col xs={12} > 
            <div style={{ position: 'relative', backgroundColor: 'white', padding: 20, width: '70%', margin: 'auto', textAlign: 'left', height: 'auto', maxHeight: '85vh', marginTop: '10vh', overflow: 'scroll', borderRadius: 5,  boxShadow: '5px 10px 18px #888888' }}>
                <Row center="xs" around="xs" >
                    <Col xs={12} md={6} style={{ textAlign: 'left' }}>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Ticket #: {id}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Timestamp: {timestamp}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Order #: {order}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Batch #: {batch}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Plant: {plant}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Customer: {customer}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Carrier: {carrier}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Truck: {truck}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Product: {product}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Location:: {location}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40}}>Tare Weight: {tare}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Gross Weight: {gross}</p>
                        <p style={{ padding: 0, fontSize: 12, color: 'grey', margin: 2, marginLeft: 40 }}>Net Weight: {net}</p>
                    </Col>
                    <Col xs={10} md={6} >
                    {/* images here */}
                        <img src={frontImage} alt="" height={'auto'} width={'80%'} style={{ borderRadius: 5 }} />
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