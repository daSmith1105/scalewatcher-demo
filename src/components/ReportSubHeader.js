import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ReportKeyContainer from './ReportKeyContainer';

const ReportSubHeader= props => {
  return (
    <Row middle="xs" style={{ marginTop: 20, marginBottom: 10 }}>
      <Col xs={12} md={6} >
        <Row start="xs" >
          <p style={{ marginLeft: 10 }}>Site: Demo Site</p>
        </Row>
      </Col>
      <Col xs={12} md={6}>
        <ReportKeyContainer />
      </Col>
    </Row>
  );
}

export default ReportSubHeader;
