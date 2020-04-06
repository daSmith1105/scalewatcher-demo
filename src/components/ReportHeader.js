import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ButtonGroup, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

// activate live mode call

const ReportHeader= props => {
  return (
    <Row  center="xs" >

      {/* heading */}
      <Col xs={6} md={6} lg={3} >
        <h1 style={{ color: 'goldenrod', padding: 0, margin: 0 }}>Transactions</h1> 
      </Col>
    
      {/* date picker */}
      <Col xs={6} md={6} lg={3} >
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
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
      <Col xs={8} md={6} lg={3}>
        <ButtonGroup variant="contained" 
                    aria-label="contained primary button group">
          <Button style={{ color: 'white', fontWeight: 'bold', background: 'goldenrod', borderColor: 'goldenrod' }}>Transactions</Button>
          <Button style={{ color: 'goldenrod', fontWeight: 'bold', background: 'transparent', borderColor: 'goldenRod' }}>Vehicles</Button>
        </ButtonGroup>
      </Col>
      
      {/* date */}
      <Col xs={4} md={6} lg={3}>
        <p>{moment().format('MMMM Do, YYYY')}</p>
      </Col>

    </Row>
  );
}

export default ReportHeader;

const styles = {
   
}