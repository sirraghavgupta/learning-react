import React from 'react';

const UserInput = (props) => {

    const style =  {
        width : '40%',
        height : '30px',
        borderRadius : '6px',
        marginTop : '30px',
        border : '2px solid #bca',
        padding : '10px'
    }

    return(
        <input type = "text" 
               style = { style }
               value = { props.username } 
               onChange = { props.change }/>
    );
}

export default UserInput;