import React from 'react';

function Spinner(props) {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
            
        </div>
    )
}

Spinner.defaultProps = {
    message : "Loading..."
}

export default Spinner;
