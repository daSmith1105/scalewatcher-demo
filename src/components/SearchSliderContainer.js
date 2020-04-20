import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Close } from '@material-ui/icons';
import '../App.css';

const SearchSliderContainer = props => {
    return (
        <Col xs={12} className="slide" style={{ padding: 5, position: 'relative', width: '100%', height: 'calc(100vh - 66px)', overflow: 'scroll', backgroundColor: 'white', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, textAlign: 'center', boxShadow: '10px 10px 10px 10px black' }}>
            <p style={{fontSize: 20}}>Search Builder</p>
            <div style={{ textAlign: 'left', marginLeft: 20 }}>
                <p style={styles.textStyle}><span style={styles.bold}>Date: </span> equal to, greater than, less than, between</p>
                <p style={styles.textStyle}><span style={styles.bold}>Id: </span>transaction, event, ticket, any : equal to, greater than, less than, between</p>
                <p style={styles.textStyle}><span style={styles.bold}>Location: </span>transaction, event, ticket, any : equal to, not equal to, contains, does not contain : allow multiple imput to get multiple locations if desired</p>
                <p style={styles.textStyle}><span style={styles.bold}>Event Type: </span>multiple choices : any, or select/deselect from below</p>
                <p style={styles.textStyle}><span style={styles.bold}>scale : </span>choices - TruckEntering, TruckOn, TruckLeaving : any, multiple select/deselect</p>
                <p style={styles.textStyle}><span style={styles.bold}>lpr : </span>choices - LprRead : none, any</p>
                <p style={styles.textStyle}><span style={styles.bold}>valve : </span>choices - any, ValveOpen, ValveClose : none, all, multiple select/deselect </p>
                <p style={styles.textStyle}><span style={styles.bold}>alert : </span>choices - (possible) any, NoTicket, Overweight, TareContamination, TicketCount, WeightMismatch, InboundException, ScaleConnectionLost, ScaleConnectionRestored  : all, multiple select/deselect</p>
                <p style={styles.textStyle}><span style={styles.bold}>Transaction Status: </span>any, complete, incomplete</p>
                <p style={styles.textStyle}><span style={styles.bold}>Ticket: </span>multiple choices : any, or select/deselect from below</p>
                <p style={styles.textStyle}><span style={styles.bold}>sales order #: </span>any, equal to, greater than, less than, between</p>
                <p style={styles.textStyle}><span style={styles.bold}>batch #: </span>any, equal to, greater than, less than, between</p>
                <p style={styles.textStyle}><span style={styles.bold}>plant : </span>any, equal to, not equal to, contains, does not contain : allow multiple imput to get multiple locations if desired</p>
                <p style={styles.textStyle}><span style={styles.bold}>customer : </span>any, equal to, not equal to, contains, does not contain : allow multiple imput to get multiple locations if desired</p>
                <p style={styles.textStyle}><span style={styles.bold}>carrier : </span>any, equal to, not equal to, contains, does not contain : allow multiple imput to get multiple locations if desired</p>
                <p style={styles.textStyle}><span style={styles.bold}>truck : </span>any, equal to, not equal to, contains, does not contain : allow multiple imput to get multiple locations if desired</p>
                <p style={styles.textStyle}><span style={styles.bold}>product : </span>any, equal to, not equal to, contains, does not contain : allow multiple imput to get multiple locations if desired</p>
                <p style={styles.textStyle}><span style={styles.bold}>tare weight : </span>any, equal to, greater than, less than, between</p>
                <p style={styles.textStyle}><span style={styles.bold}>gross weight : </span>any, equal to, greater than, less than, between</p>
                <p style={styles.textStyle}><span style={styles.bold}>net weight : </span>any, equal to, greater than, less than, between</p>
                <p style={styles.textStyle}></p>
                <hr/>
                <p></p>
                <p style={styles.bold} >will have tha ability to save and reuse searches</p>
                <p style={styles.bold}>custom searches can be downloaded as a file and then imported for other to use</p>
                <p style={styles.bold}>everyone can run the same searches and in addition have the ability to create their custom searches based of uploaded template or drill down</p>

            </div>
            <hr />
            <Row center="xs" middle="xs">
                <p style={{ fontSize: '2.2vmin', color: 'grey', textDecoration: 'underline' }}> View Charts: </p>
                <p  className="link" 
                    style={{ fontSize: '2vmin', marginLeft: 20 }}
                    onClick={ () => props.addActiveChart('pie') }>
                    Pie Chart
                </p>
                <p style={{ fontSize: '2vmin', marginLeft: 20, marginRight: 20 }}>|</p>
                <p  className="link" 
                    style={{ fontSize: '2vmin', marginLeft: 20 }}
                    onClick={ () => props.addActiveChart('bar') }>
                    Bar Chart
                </p>
                <p style={{ fontSize: '2vmin', marginLeft: 20, marginRight: 20 }}>|</p>
                <p className="link" 
                    style={{ fontSize: '2vmin', marginLeft: 20 }}
                    onClick={ () => props.addActiveChart('line') }>
                    Line Chart
                </p>
            </Row>
            <Close  className="link"
                    style={{ position: 'absolute', top: 10, right: 10, padding: 5 }}
                    onClick={ () => props.closeSearchSlider() } />
        </Col>
    )
}

export default SearchSliderContainer;

const styles = {
    textStyle: {
        fontSize: 12,
        margin: 3
    },
    bold: {
        fontWeight: 'bold'
    }
}