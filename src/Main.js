import React from 'react';
import TransactionBoardContainer from './components/transaction_board/TransactionBoardContainer';
import SearchSliderContainer from './components/SearchSliderContainer';
import TableViewContainer from './components/table_view/TableViewContainer';
import { Search } from '@material-ui/icons';
import { Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import tempImg from './todo.jpg';
import './App.css';

class Main extends React.Component {
  state = {
    x: 0,
    y: 0, 
    showTooltip: false,
    currentTooltipEvent: {},
    showSearchSlider: false
  }

  // determine where the mouse is so we can render the tooltip correctly on transaction board
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
        formatted = `${splitData[0]} lb > ${splitData[1]} lb`;
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

  closeSearchSlider = () => {
    this.setState({ showSearchSlider: false })
  }

  render() {
    return (
      <Col xs={12} onMouseMove={ this._onMouseMove } style={{ maxwidth: 900, margin: 'auto' }}>

        { this.state.showSearchSlider ? 
          <div style={{ zIndex: 10, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,.6)' }}>
            <div className="slide" style={{ width: '90%', maxWidth: 860, position: 'absolute', top: 54, right: 0 }}>
              <SearchSliderContainer closeSearchSlider={ this.closeSearchSlider } />
            </div>
          </div> :
          <div style={{ padding: 5, textAlign: 'center', position: 'absolute', top: 54, right: 0, height: 40, width: 40, backgroundColor: 'lightgrey', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, boxShadow: '5px 7px 5px rgba(0,0,0,.7)' }}
               onClick={ () => this.setState({ showSearchSlider: true }) }>
            <Search className="link" style={{ marginTop: 5, fontSize: 30, }} />
          </div>
        }

        { this.state.showTooltip ? 
          <div className="speech-bubble" style={{ textAlign: 'left', zIndex: 10, position: 'absolute', top: this.state.y - 250,  left: this.state.x - (this.state.x / 16), height: 123, width: 'auto' }} >
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
                <div style={{ width: 'auto', padding: 5, borderTop: '1px solid grey', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, backgroundColor: this.parseTooltipHeaderColor(this.state.currentTooltipEvent.type) }}>
                  <p style={{ color: 'white', fontWeight: 'bold', fontSize: 12, margin: 0, padding: 2 }}>{this.parseTooltipDataDisplay(this.state.currentTooltipEvent)}</p> 
                </div>:
                  null
              }
          </div> :
          null
        }
  
        { this.props.activeView === 'transaction' ? 
          <Row center="xs" className="transition" style={{ position: 'fixed', top: 120, left: 0, right: 0 }} >
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <TransactionBoardContainer toggleTooltip={ this.toggleTooltip } />
            </Col>
          </Row> :
          null
        }

        { this.props.activeView === 'table' ? 
                  <Row center="xs" className="transition" style={{ position: 'fixed', top: 120, left: 0, right: 0 }} >
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                      <TableViewContainer x={ this.state.x} y={ this.state.y } />
                    </Col>
                  </Row> :
                  null
                }

        { this.props.activeView === 'log' ? 
                  <Row center="xs" className="transition" style={{ position: 'fixed', top: 120, left: 0, right: 0 }} >
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                      <p style={{ margin: 0, marginTop: -10, padding: 0 }}>This is here just for reference as the search and drill down decisions are being made.</p>
                      <img src={ tempImg } height={680} width={500} alt="" />
                    </Col>
                  </Row> :
                  null
                }
          
              </Col>
            );
          }
}

export default Main;