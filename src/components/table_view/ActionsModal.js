import React from 'react';

const ActionsModal = props => {
    return (
        <div style={{ backgroundColor: 'white', width: 60, padding: 10, zIndex: 5 }}>
            <p style={{ fontSize: 10, color: 'grey', padding: 0, margin: 0, marginBottom: 10 }}
                onClick={ () => {alert('clicked 1' + JSON.stringify(props.transaction))}}>
                view transaction pdf
            </p>
            <p style={{ fontSize: 10, color: 'grey', padding: 0, margin: 0, marginBottom: 10 }}
                onClick={ () => {alert('clicked 2' + JSON.stringify(props.transaction))}}>
                add note
            </p>
            <p style={{ fontSize: 10, color: 'grey', padding: 0, margin: 0, marginBottom: 10 }}
                onClick={ () => {alert('clicked 3' + JSON.stringify(props.transaction))}}>
                view/edit note
            </p>
        </div>
    )
}
    
    export default ActionsModal;