import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../App.css';

const Header = props => {
    return (
        <Col xs={12} style={{ height: 80, width: '100%'  }}>
            <Row center="xs"  middle="xs" style={{ backgroundColor: 'goldenrod', padding: 10, boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <Col xs={10} mdOffset={2} md={8}>
                    <h1 style={{ fontSize: 26, margin: 0, padding: 0, color: 'white' }}>Scale Watcher Dashboard</h1>
                </Col>
                <Col xs={2}>
                    <Row start="xs" style={{ marginLeft: 40}} >
                    <AccountCircleIcon style={{  color: 'white' }} onClick={ () => alert('Account data has not been implemented yet.') } />
                    </Row>
                </Col>
            </Row>
            <Row center="xs" middle="xs" style={{ marginTop: 10 }}>
                <h1 className="link"
                    style={{ fontSize: 20, margin: 0, padding: 0, color: props.activeView === 'transaction' ? 'goldenrod' : 'grey' }}
                    onClick={ () => props.setActiveView('transaction') }>
                    transaction board
                </h1>
                <h1 style={{ fontSize: 20, margin: 0, padding: 0, color: 'grey', marginRight: 10, marginLeft: 10 }}>|</h1>
                <h1 className="link"
                    style={{ fontSize: 20, margin: 0, padding: 0, color: props.activeView === 'table' ? 'goldenrod' : 'grey' }}
                    onClick={ () => props.setActiveView('table') }>
                    table view
                </h1>
                <h1 style={{ fontSize: 20, margin: 0, padding: 0, color: 'grey', marginRight: 10, marginLeft: 10 }}>|</h1>
                <h1 className="link"
                    style={{ fontSize: 20, margin: 0, padding: 0, color: props.activeView === 'log' ? 'goldenrod' : 'grey' }}
                    onClick={ () => props.setActiveView('log') }>
                    log reports
                </h1>
            </Row>
        </Col>
    )
}

export default Header;