// import React from 'react';
// no need of React as we are not returning any JSX.

/**
 * we may think that we are still returning discrete components as props.children
 * is that only. but the point is - the reasom behing returning was very tehcnical. 
 * actually when we return, we are returning a call to React.createElement() 
 * and we can't return multiple things together. 
 * 
 * so, here we just rerurn a single object. and that too is the case with array. 
 * awesome !!!! -
 */
const Aux = (props) => props.children;

export default Aux;