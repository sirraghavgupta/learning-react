import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;

    @media (min-width : 450px){
        width : 500px;
    }
`;

const person = (props)=>{

    return (
        <StyledDiv>
            <p onClick = {props.click}>I am {props.name}. i am {props.age}.</p> 
            <p>{props.children}</p>
            <input type = "text" value = {props.name} onChange = {props.changed}/>
        </StyledDiv>
     )

}

export default person;