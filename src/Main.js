import React from 'react';
import ReportContainer from './components/ReportContainer';
import { Row, Col } from 'react-flexbox-grid';

const Main = props => {
  return (
    <Col xs={12}>
      <Row>
        <h1>Scalewatcher</h1>
      </Row>

      <Row center="xs" >
        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
          <ReportContainer />
        </Col>
      </Row>

    </Col>
  );
}

export default Main;