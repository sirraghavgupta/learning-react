import React from 'react';
// import './Person.css'
import styled from 'styled-components';

/**
 * by using styled component, we do like this. 
 * the styled object has methods for all the html elements. 
 * so, div is a method here. 
 * whatevwer we write between the `` is passes to the method in a special 
 * way and that helps to apply the css we give. 
 * we can give all the css here, may be normal, pseudo or animation.
 * 
 * all these methods return a fucntional component and so that we can directly 
 * use them here as tag. 
 * 
 * now, here we dont need to use the JS syntax for css properties because
 * in the end, its going to make classes for these properties and add them 
 * in the components where its required. 
 * all this willl be added to the head of the page also. 
 * so, we can openly use all the css. great!! --------------- 
 */
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
        // see here --------- how to use. 
        <StyledDiv>
            <p onClick = {props.click}>I am {props.name}. i am {props.age}.</p> 
            <p>{props.children}</p>
            <input type = "text" value = {props.name} onChange = {props.changed}/>
        </StyledDiv>
     )

}

export default person;