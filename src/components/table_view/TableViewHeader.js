import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker, DateTimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

const TableViewHeader= props => {
    const selectedDate = new Date();

    const handleDateChange = e => {
        alert(e)
    }
  return (
    <Row center="xs" around="xs" >

      <Col xs={4}>
        <Row start="xs">
          <h1 style={{ color: 'goldenrod', padding: 0, margin: 0, marginLeft: 20 }}>Table View</h1> 
        </Row>
      </Col>

      {/* date picker */}
      <Col xs={4}>
        <Row middle="xs">
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                    style={{ maxWidth: 140, fontSize: 10 }}
                    //   disableToolbar
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
            <MuiPickersUtilsProvider utils={MomentUtils} style={{fontSize: 10}}>
                <KeyboardDateTimePicker
                    style={{ maxWidth: 140, marginLeft: 20, fontSize: 10  }}
                    //   disableToolbar
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
        </Row>
      </Col>

      <Col xs={0}>
      </Col>

    </Row>
  );
}

export default TableViewHeader;