import React from 'react';

const TicketTemplate = props => {
    return (
        <div>
            <p>this is a ticket</p>
            <p>{ JSON.stringify(props) }</p>
        </div>
    )
}

export default TicketTemplate;