import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';
import frontImage from '../../images/on.png';
import sideImage from '../../images/side.jpeg';
import leavingImage1 from '../../images/leaving_1.png';
import ticketImage from '../../images/ticket_img.png';
import lprImage from '../../images/lpr_read.png';
import placeholderImage from '../../images/placeholder.jpg';
import '../../App.css';
import moment from 'moment'

let steps = [];

class SingleTransactionGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            currentIndex: 0,
            ready: false
        }
    }

    componentDidMount = () => {
        steps = [];
        let cIndex = null;
       
        cIndex = this.props.events.map(function(e) { return e.type; }).indexOf('TicketReceived');
        console.log(typeof cIndex)
        if( cIndex < 0 ) {
            cIndex = this.props.events.map(function(e) { return e.type; }).indexOf('NoTicket');
        } 
        if( cIndex < 0 ) {
            cIndex = this.props.events.map(function(e) { return e.type; }).indexOf('OverWeight');
        } 
        if( cIndex < 0 ) {
            cIndex = 0;
       } 
       
        this.setState({ events: [], currentIndex: cIndex, ready: false }, 
            () => {
                this.props.events.forEach( ev => steps.push({type: ev.type, timestamp: ev.timestamp}) );
                this.setState({ events: this.props.events },
                    () => {
                        setTimeout( this.setState({ ready: true }), 500 )
                    })
            })
    }

    parseType = event => {
        const type = event.type
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
                return placeholderImage;
        }
    };

    goNext = () => {
        if( this.state.currentIndex < this.state.events.length - 1 ) {
            this.setState({ currentIndex: this.state.currentIndex + 1 })
        }
    }

    goPrevious = () => {
        if( this.state.currentIndex > 0 ) {
            this.setState({ currentIndex: this.state.currentIndex - 1 })
        }
    }

    render() {
    
        return (
            <Col xs={12} style={{ position: 'relative' }} >
                <Row center="xs" middle="xs">
                    <Col xs={2}>
                        { this.state.currentIndex > 0 ?
                            <ArrowBackIos className="link" 
                                        style={{ fontSize: '4vmin', marginLeft: '10vmin'}}
                                        onClick={ () => this.goPrevious() } /> :
                            null
                        }
                    </Col>

                    <Col xs={3} style={{ marginBottom: 20 }} >
                        { this.state.ready ? 
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ margin: 2, padding: 0, fontSize: '2vmin', color: 'grey' }}><span style={{ fontWeight: 'bold' }}>Date:</span> { moment(this.state.events[this.state.currentIndex].timestamp).format('MM-DD-YYYY') }</p>
                                <p style={{ margin: 2, padding: 0, fontSize: '2vmin', color: 'grey' }}><span style={{ fontWeight: 'bold' }}>Time:</span> { moment(this.state.events[this.state.currentIndex].timestamp).format('hh:mm:ss a') }</p>
                                <p style={{ margin: 2, padding: 0, fontSize: '2vmin', color: 'grey' }}><span style={{ fontWeight: 'bold' }}>Type:</span> { this.state.events[this.state.currentIndex].type }</p>
                                <p style={{ margin: 2, padding: 0, fontSize: '2vmin', color: 'grey' }}><span style={{ fontWeight: 'bold' }}>Location:</span> { this.state.events[this.state.currentIndex].location }</p>
                                { this.state.events[this.state.currentIndex].data.length > 0 ?
                                    <p style={{ margin: 2, padding: 0, fontSize: '2vmin', color: 'grey' }}><span style={{ fontWeight: 'bold' }}>Data:</span> { this.state.events[this.state.currentIndex].data}</p> :
                                    null
                                }
                                {/* <p style={{ margin: 2, padding: 0, fontSize: '2vmin', color: 'grey' }}>id: { this.state.events[this.state.currentIndex].eId }</p>
                                <p style={{ margin: 2, padding: 0, fontSize: '2vmin', color: 'grey' }}>transaction: { this.state.events[this.state.currentIndex].tId }</p> */}
                            </div> :
                            null
                        }
                    </Col>
                {/* Image */}
                    <Col xs={5} style={{ marginBottom: 20 }}>
                        { this.state.ready ? 
                            <img src={this.parseType(this.state.events[this.state.currentIndex])} height='auto' width='100%' alt="" style={{ borderRadius: 5, boxShadow: '5px 5px 5px rgba(0,0,0,.4)' }} /> :
                            null
                        }
                    </Col>
                    <Col xs={2}>
                        { this.state.currentIndex < this.state.events.length - 1 ?
                            <ArrowForwardIos className="link" 
                                            style={{ fontSize: '4vmin', marginRight: '10vmin' }}
                                            onClick={ () => this.goNext() } /> :
                            null
                        }
                    </Col>
                </Row>
                <Col xsOffset={1} xs={10} style={{ marginBottom: 20 }}>
                    <Row around="xs">
                        {  steps.map( (s, i) => (
                                <div key={i} style={{ textAlign: 'center', zIndex: 2 }}>
                                    <p  className="cursor-pointer"
                                        style={{    textAlign: 'center', 
                                                    width: 20, 
                                                    margin: 'auto',  
                                                    fontSize: '2vmin', 
                                                    padding: 2, 
                                                    borderRadius: '50vmin', 
                                                    backgroundColor: this.state.currentIndex === i ? 'goldenrod' : 'grey',
                                                    color: 'white',
                                                    border: this.state.currentIndex === i ? '2px solid goldenrod' : '2px solid grey' }}
                                        onClick={ () => this.setState({ currentIndex: i })}>
                                        {i + 1}
                                    </p>
                                    <p  className="cursor-pointer"
                                        style={{ fontSize: '2vmin',  padding: 0, margin: 0, marginTop: 2, color: this.state.currentIndex === i ? 'goldenrod' : 'grey' }}>
                                        {s.type}
                                    </p>
                                    <p  className="cursor-pointer"
                                        style={{ fontSize: '1.6vmin',  padding: 0, margin: 0, marginTop: 2, color: this.state.currentIndex === i ? 'goldenrod' : 'grey' }}>
                                        {moment(s.timestamp).format('hh:mm:ss a')}
                                    </p>
                                </div>
                            )
                        )}
                    </Row>
                </Col>

                <Col xsOffset={2} xs={8} style={{ position: 'absolute', bottom: '6vmin', left: 0, height: '.5vmin', backgroundColor: 'goldenrod', width: '100%' }}>
                </Col>
            </Col>
        )
    }
}

export default SingleTransactionGallery;