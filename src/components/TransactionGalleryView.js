import React from 'react';
import SingleTransactionGallery from './SingleTransactionGallery';
import { SaveAlt, Close } from '@material-ui/icons';
import { Row, Col } from 'react-flexbox-grid';
import '../App.css';

const TransactionGalleryView = props => {
    return (
        <Col style={{ position: 'relative', textAlign: 'left', width: '90%', height: 'auto', backgroundColor: 'white', borderRadius: 10, padding: 5 }}>
            <h1 style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Transaction Gallery View</h1>
            <p>id: {props.transaction.tId}</p>
            <p>lpn: {props.transaction.lpn}</p>
            <p>location: {props.transaction.location}</p>
            <p>start: {props.transaction.start}</p>
            <p>end: {props.transaction.end}</p>
            <p>duration: {props.transaction.duration}</p>
            <p>complete:{JSON.stringify(props.transaction.complete)}</p>

            <SingleTransactionGallery events={ props.transaction.events }/> 

            <Close  className="link"
                    style={{ position: 'absolute', top: 10, right: 10, padding: 5 }}
                    onClick={ () => props.closeTransactionGalleryView() } />
        </Col>
    )
}

export default TransactionGalleryView;