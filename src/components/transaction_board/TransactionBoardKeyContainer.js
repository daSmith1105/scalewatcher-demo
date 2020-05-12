import React from 'react';
import { Row } from 'react-flexbox-grid';
import Brightness1Icon from '@material-ui/icons/Brightness1'; // lpr
import PlayArrowIcon from '@material-ui/icons/PlayArrow'; // scale
import WarningIcon from '@material-ui/icons/Warning'; // alert
import StopIcon from '@material-ui/icons/Stop'; // ticket
import GradeIcon from '@material-ui/icons/Grade'; // valve

const TransactionBoardKeyContainer = props => {
  return (
        <Row middle="xs" around="xs" style={{ padding: 0, /*border: '2px solid grey', borderRadius: 10*/ }} >
            <Row middle="xs" >
                <p style={{ fontSize: 12, marginLeft: 10 }}>Event Key: </p>
            </Row>
            <Row middle="xs" >
                <Brightness1Icon style={{ fontSize: 16, margin: 0, padding: 0, color: "green" }} />
                <p style={{ fontSize: 12, marginLeft: 10 }}>lpr</p>
            </Row>
            <Row middle="xs" >
                <PlayArrowIcon style={{ fontSize: 22, margin: 0, padding: 0, color: "red" }} />
                <p style={{ fontSize: 12, marginLeft: 10 }}>scale</p>
            </Row>
            <Row middle="xs" >
                <GradeIcon style={{ fontSize: 18, margin: 0, padding: 0, color: "blue" }} />
                <p style={{ fontSize: 12, marginLeft: 10 }}>valve</p>
            </Row>
            <Row middle="xs" >
                <StopIcon style={{ fontSize: 22, margin: 0, padding: 0, color: "black" }} />
                <p style={{ fontSize: 12, marginLeft: 10 }}>ticket</p>                
            </Row>
            <Row middle="xs" >
                <WarningIcon style={{ fontSize: 16, margin: 0, padding: 0, color: "#4682B4" }} />
                <p style={{ fontSize: 12, marginLeft: 10 }}>alert</p>
            </Row>
        </Row>
  );
}

export default TransactionBoardKeyContainer;
