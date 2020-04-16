import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const TableViewHeader= props => {

  return (
    <Row start="xs" >

      <Col xs={6}>
        <Row start="xs">
          <h1 style={{ color: 'goldenrod', padding: 0, margin: 0, textAlign: 'left', marginLeft: 20 }}>Table View</h1> 
        </Row>
      </Col>

      {/* date picker */}
      <Col xs={6}>
        <Row center="xs" around="xs">
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                    style={{ maxWidth: 140 }}
                    //   disableToolbar
                    variant="inline"
                    autoOk={true}
                    disableFuture={true}
                    format="MM/DD/YYYY"
                    id="date-picker-inline"
                    value={Date.now()}
                    onChange={e => console.log(e)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={MomentUtils} >
                <KeyboardDateTimePicker
                    style={{ maxWidth: 140, marginLeft: 20  }}
                    //   disableToolbar
                    variant="inline"
                    autoOk={true}
                    disableFuture={true}
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