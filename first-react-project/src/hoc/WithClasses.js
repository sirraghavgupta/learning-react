import React from 'react';

const WithClasses = (props) => (
    <div className = {props.classes} >
        {props.children}
    </div>
);

export default WithClasses;