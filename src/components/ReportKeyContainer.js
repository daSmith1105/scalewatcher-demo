import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AdjustIcon from '@material-ui/icons/Adjust';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import WarningIcon from '@material-ui/icons/Warning';

const ReportKeyContainer = props => {
  return (
    <Col style={{ paddingLeft: 10}}>
        <Row middle="xs">
            <AdjustIcon style={{ fontSize: 24, margin: 0, padding: 0, color: "green" }} />
            <p style={{ marginLeft: 10 }}>entry</p>
        </Row>
        <Row middle="xs">
            <Brightness1Icon style={{ fontSize: 24, margin: 0, padding: 0, color: "red" }} />
            <p style={{ marginLeft: 10 }}>exit</p>
        </Row>
        <Row middle="xs">
            <AssignmentTurnedInIcon style={{ fontSize: 24, margin: 0, padding: 0, color: "black" }} />
            <p style={{ marginLeft: 10 }}>ticket</p>
        </Row>
        <Row middle="xs">
            <WarningIcon style={{ fontSize: 24, margin: 0, padding: 0, color: "goldenrod" }} />
            <p style={{ marginLeft: 10 }}>alert</p>
        </Row>
    </Col>
  );
}

export default ReportKeyContainer;

const styles = {

}