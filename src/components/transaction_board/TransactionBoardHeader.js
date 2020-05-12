import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
// import { ButtonGroup, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

// activate live mode call

const TransactionBoardHeader= props => {
  return (
    <Row center="xs" around="xs" >

      {/* heading */}
      <Col xs={6} md={6} lg={4} >
        <Row start="xs">
          <h1 style={{ color: '#4682B4', padding: 0, margin: 0, marginLeft: 20 }}>Transactions</h1> 
        </Row>
      </Col>
    
      {/* date picker */}
      <Col xs={6} md={6} lg={4}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
          style={{ marginTop: 5}}
              disableToolbar
              variant="inline"
              format="MM/DD/YYYY"
              id="date-picker-inline"
              value={Date.now()}
              onChange={e => console.log(e)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        </MuiPickersUtilsProvider>
      </Col>

      {/* select buttons   */}
      {/* <Col xs={7} md={6} lg={3}>
        <ButtonGroup variant="contained" 
                    aria-label="contained primary button group">
          <Button style={{ color: 'white', fontWeight: 'bold', background: '#4682B4', borderColor: '#4682B4' }}>Transactions</Button>
          <Button style={{ color: '#4682B4', fontWeight: 'bold', background: 'transparent', borderColor: '#4682B4' }}>Vehicles</Button>
        </ButtonGroup>
      </Col> */}
      
      {/* date */}
      <Col xsOffset={6} lgOffset={0} xs={6} md={6} lg={4}>
        <Row end="xs">
        <p style={{ marginRight: 20, fontWeight: 'normal' }}>{moment().format('MMMM Do, YYYY')}</p>
        </Row>
      </Col>

    </Row>
  );
}

export default TransactionBoardHeader;
