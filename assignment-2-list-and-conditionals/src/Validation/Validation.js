import React from 'react';


const ValidationComponent = (props) => {

    const minLength = 5;
    const messages = {
        success : 'Text long enough',
        failure : 'Text too short'
    }

    const validationMessage = (props.textLength >= minLength) ? messages.success : messages.failure;
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}

export default ValidationComponent;