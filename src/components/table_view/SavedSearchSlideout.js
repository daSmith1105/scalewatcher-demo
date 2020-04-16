import React from 'react';
import { DoubleArrow } from '@material-ui/icons';
import { Row } from 'react-flexbox-grid';
import '../../App.css';

class SavedSearchSlideout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: ''
        };
    }
    render() {
        return (
            <div style={{ textAlign: 'left', marginTop: 10, marginBottom: 10, marginLeft: 20 }}>
                <Row middle="xs">
                    <p  className="link"
                        style={{ margin: 1, padding: 0, fontSize: 12 }}
                        onClick={ () => alert('slide out saved search history')}>
                        Saved Searches
                    </p>  
                    <DoubleArrow className="link"
                                 style={{ fontSize: 12, marginLeft: 5 }}
                                 onClick={ () => alert('slide out saved search history')}/>
                </Row>
            </div>
        )
    }
}

export default SavedSearchSlideout;