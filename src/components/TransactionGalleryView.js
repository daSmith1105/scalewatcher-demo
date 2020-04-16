import React from 'react';
import SingleTransactionGallery from './SingleTransactionGallery';
import { Close } from '@material-ui/icons';
import { Row, Col } from 'react-flexbox-grid';
import '../App.css';
import moment from 'moment';

const TransactionGalleryView = (props) => {

    return (
        <Col style={{ position: 'relative', textAlign: 'left', width: '90%', maxWidth: 1000, height: 'auto', backgroundColor: 'white', borderRadius: 10, padding: 5, boxShadow: '5px 10px 18px rgba(0,0,0,.4)'}}>
            <h1 style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Transaction Gallery View</h1>
            <Col xsOffset={1} xs={10}>
                <Row center="xs" around="xs" style={{ backgroundColor: 'grey', borderRadius: 5, marginBottom: 10, padding: 1, boxShadow: '5px 10px 18px rgba(0,0,0,.4)' }}>
                    <p style={{ padding: 0, margin: 0, fontSize: '2vmin', color: 'white' }}>Transaction Id: {props.transaction.tId}</p>
                    <p style={{ padding: 0, margin: 0, fontSize: '2vmin', color: 'white' }}>Lpn: {props.transaction.lpn}</p>
                    <p style={{ padding: 0, margin: 0, fontSize: '2vmin', color: 'white' }}>Date: {moment(props.transaction.start).format('MM-DD-YYYY')}</p>
                    <p style={{ padding: 0, margin: 0, fontSize: '2vmin', color: 'white' }}>Duration: {props.transaction.duration} min</p>
                </Row>
            </Col>

            <SingleTransactionGallery events={ props.transaction.events }/> 

            <Close  className="link"
                    style={{ position: 'absolute', top: 10, right: 10, padding: 5 }}
                    onClick={ () => props.closeTransactionGalleryView() } 
                    />
        </Col>
    )
}

export default TransactionGalleryView;