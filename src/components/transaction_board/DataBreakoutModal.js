import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Close } from '@material-ui/icons';
import frontImage from '../../images/on.png';
import sideImage from '../../images/side.jpeg';
import leavingImage1 from '../../images/leaving_1.png';
import ticketImage from '../../images/ticket_img.png';
import lprImage from '../../images/lpr_read.png';
import placeholderImage from '../../images/placeholder.jpg';
import moment from 'moment';

const DataBreakoutModal = props => {

    const parseType = type => {

        switch (type) {
            case 'LprRead':
                return lprImage; 
            case 'TruckEntering':
                return sideImage;
            case 'TruckOn':
                return frontImage;
            case 'TruckLeaving':
                return leavingImage1;
            case 'TicketReceived':
                return ticketImage;
            case 'OverWeight':
                return frontImage;
            case 'NoTicket':
                return frontImage;
            case 'TareWeightContamination':
                return frontImage;
            default:
                return placeholderImage
        }
    };

    console.log(props)
  
    return (
        <div style={{ padding: 30, backgroundColor: 'white', width: 540, height: 240, margin: 'auto', borderRadius: 5, marginTop: 100, position: 'relative', boxShadow: '5px 10px 18px black' }}>
            <Row center="xs">
                <Col xs={6} >
                    <h1 style={{ color: 'grey', fontSize: 18, margin: 0, textAlign: 'left'  }}>Event Quick View</h1>
                    <hr/>
                    <div style={{ marginTop: 30 }}>
                        <p style={{ margin: 2, padding: 0, fontSize: 13, color: 'grey', textAlign: 'left' }}><span style={{ fontWeight: 'bold' }}>Type:</span> {props.event.type}</p>
                        <p style={{ margin: 2, padding: 0, fontSize: 13, color: 'grey', textAlign: 'left' }}><span style={{ fontWeight: 'bold' }}>Transaction Id:</span> {props.event.tId}</p>
                        <p style={{ margin: 2, padding: 0, fontSize: 13, color: 'grey', textAlign: 'left' }}><span style={{ fontWeight: 'bold' }}>Event Id:</span> {props.event.eId}</p>
                        <p style={{ margin: 2, padding: 0, fontSize: 13, color: 'grey', textAlign: 'left' }}><span style={{ fontWeight: 'bold' }}>Timestamp:</span> {moment(props.event.timestamp).format('MM-DD-YYYY   hh:mm:ss a')}</p>
                        <p style={{ margin: 2, padding: 0, fontSize: 13, color: 'grey', textAlign: 'left' }}><span style={{ fontWeight: 'bold' }}>Location:</span> {props.event.location}</p>
                        <p style={{ margin: 2, padding: 0, fontSize: 13, color: 'grey', textAlign: 'left' }}><span style={{ fontWeight: 'bold' }}>Data:</span> {props.event.data}</p>
                    </div>
                </Col>
                <Col xs={6}>
                <img src={parseType( props.event.type )} width={'100%'} height={'auto'} alt="" style={{ borderRadius: 5, marginTop: 30 }} />
                </Col>
            </Row>
            
            <p className="link" 
                style={{ position: 'absolute', top: 0, right: 160, padding: 5, fontSize: 14 }}
                // this needs to open the current transaction in table view as well, already changes the view to table
                onClick={ () => { props.setActiveView('table'); props.closeBreakoutModal() }} >
                table view
            </p>
            <p className="link" 
                style={{ position: 'absolute', top: 0, right: 60, padding: 5, fontSize: 14 }}
                onClick={ () => { props.displayTransactionGalleryView(props.transaction); props.closeBreakoutModal() }} >
                gallery view
            </p>
            <Close className="link" style={{ position: 'absolute', top: 10, right: 10, padding: 5 }}
                                    onClick={ () => props.closeBreakoutModal() } />
        </div>
    )
}

export default DataBreakoutModal;