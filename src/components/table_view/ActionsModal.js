import React from 'react';
import '../../App.css';

const ActionsModal = props => {
    return (
        <div style={{ backgroundColor: 'white', width: 50, padding: 10, zIndex: 5 }}>
            <p  className="link"
                style={{ fontSize: 10, padding: 0, margin: 0, marginBottom: 10 }}
                // onClick={ () => { props.closeActionsModal(); alert('clicked 1' + JSON.stringify(props.transaction)) }}>
                onClick={ () => { props.closeActionsModal() }}>
                view as pdf
            </p>
            <hr/>
            <p  className="link"
                style={{ fontSize: 10, padding: 0, margin: 0, marginBottom: 10 }}
                // onClick={ () => { props.closeActionsModal(); alert('clicked 2' + JSON.stringify(props.transaction)) }}>
                onClick={ () => { props.closeActionsModal() }}>
                add note
            </p>
            <hr/>
            <p  className="link"
                style={{ fontSize: 10, padding: 0, margin: 0, marginBottom: 10 }}
                // onClick={ () => { props.closeActionsModal(); alert('clicked 3' + JSON.stringify(props.transaction)) }}>
                onClick={ () => { props.closeActionsModal() }}>
                view note
            </p>
        </div>
    )
}
    
    export default ActionsModal;