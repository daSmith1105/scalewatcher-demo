import React from 'react';
import ReportContainer from './components/ReportContainer';
import ReportKeyContainer from './components/ReportKeyContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Main = props => {
  return (
    <Col xs={12}>
      <Row>
        <h1>Scalewatcher</h1>
      </Row>

      <Row >
        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
          <ReportContainer />
        </Col>
        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
          <ReportKeyContainer /> 
        </Col>
      </Row>
    </Col>
  );
}

export default Main;