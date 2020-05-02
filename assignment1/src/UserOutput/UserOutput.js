import React from 'react';

const UserOutput = (props) => {

    const style = {
        width : '40%',
        padding : '10px',
        margin : '10px auto',
        border : '1px solid #ddd',
        borderRadius : '6px'
    }

    return (
        <div style = { style } >
            <p> Hi, I am { props.username } </p>
            <p> I love coding. </p>
        </div>
    );

}

export default UserOutput;