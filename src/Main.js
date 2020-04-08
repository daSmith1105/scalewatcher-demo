import React from 'react';
import ReportContainer from './components/ReportContainer';
import { Row, Col } from 'react-flexbox-grid';
import moment from 'moment';

class Main extends React.Component {
  state = {
    x: 0,
    y: 0, 
    showTooltip: false,
    currentTooltipEvent: {}
  }

  _onMouseMove = e => {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  parseTooltipHeaderColor = (eventtype) => {  
    let color;
    if ( eventtype === 'LprRead' ) {
        color = 'green'
    } else if ( eventtype === 'TruckEntering' || eventtype === 'TruckOn' || eventtype === 'TruckLeaving' ) {
        color = 'red'
    } else if ( eventtype === 'TicketReceived' ) {
        color = 'black'
    } else if ( eventtype === 'ValveOpened' || eventtype ==='ValveClosed' ) {
        color = 'blue'
    } else if ( eventtype === 'NoTicket' || eventtype === 'ValveAlert' || eventtype === 'OverWeight' || eventtype === 'TareWeightContamination' ) {
        color = 'goldenrod'
    } else {
        color = 'grey'
    }
    return color;
};

parseTooltipDataDisplay = event => {
    let formatted;

    if ( event.type === 'LprRead' ) {
        formatted = `LPN: ${event.data}`; 
    } else if ( event.type === 'TruckEntering' || event.type === 'TruckOn' || event.type === 'TruckLeaving' ) {
        formatted = `${event.data} lb`
    } else if ( event.type === 'TicketReceived' ) {
        let splitData = event.data.split(':')[1];
        formatted = `Ticket: #${splitData}`
    } else if ( event.type === 'ValveOpened' || event.type ==='ValveClosed' ) {
        formatted = `${event.data}`
    } else if ( event.type === 'OverWeight' ) {
      let splitData = event.data.split(',');
        formatted = `${splitData[0]} lb < ${splitData[1]} lb`;
    } else if ( event.type === 'NoTicket' || event.type === 'ValveAlert' || event.type === 'TareWeightContamination' ) {
        formatted = event.data
    } else {
        formatted = ''
    }
    return formatted;
};

  toggleTooltip = ( toggleType, event ) => {
    this.setState({
      showTooltip: toggleType,
      currentTooltipEvent: event
    })
  }

  render() {
    return (
      <Col xs={12} onMouseMove={ this._onMouseMove }>

        { this.state.showTooltip ? 
          <div className="speech-bubble" style={{ textAlign: 'left', zIndex: 100, position: 'absolute', top: this.state.y - 230,  left: this.state.x + (this.state.x / 20), height: 'auto', width: 'auto' }} >
            <div style={{ width: 'auto', 
                          backgroundColor: this.parseTooltipHeaderColor(this.state.currentTooltipEvent.type), 
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          margin: 0,
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingRight: 10, 
                          paddingLeft: 10,  
                          borderBottom: '1px solid grey',
                          textAlign: 'left'}}>
              <p style={{ fontWeight: 'bold', fontSize: 12, color: 'white', margin: 0, padding: 0 }}>
                {this.state.currentTooltipEvent.type.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")} - {this.state.currentTooltipEvent.location}
              </p>
            </div>
            <div style={{ padding: 5 }}>
              <p style={{ fontWeight: 'bold', fontSize: 12, margin: 0, padding: 2 }}>transaction id: {this.state.currentTooltipEvent.tId}</p> 
              <p style={{ fontWeight: 'bold', fontSize: 12, margin: 0, padding: 2 }}>date: {moment(this.state.currentTooltipEvent.timestamp).format('MM/DD/YYYY')}</p> 
              <p style={{ fontWeight: 'bold', fontSize: 12, margin: 0, padding: 2 }}>time: {moment(this.state.currentTooltipEvent.timestamp).format('hh:mm:ss a')}</p> 
            </div>
            { this.state.currentTooltipEvent.data !== '' ?
                <div style={{ width: 'auto', padding: 5, borderTop: '1px solid grey', backgroundColor: this.parseTooltipHeaderColor(this.state.currentTooltipEvent.type) }}>
                  <p style={{ color: 'white', fontWeight: 'bold', fontSize: 12, margin: 0, padding: 2 }}>{this.parseTooltipDataDisplay(this.state.currentTooltipEvent)}</p> 
                </div>:
                  null
              }
          </div> :
          null
        }
  
        <Row center="xs" style={{ marginTop: 20}} >
          <Col xs={12} sm={12} md={10} lg={10} xl={10}>
            <ReportContainer toggleTooltip={ this.toggleTooltip } />
          </Col>
        </Row>
  
      </Col>
    );
  }
}

export default Main;