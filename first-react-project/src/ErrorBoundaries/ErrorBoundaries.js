import React, {Component} from 'react';

// name is up to us. 
class ErrorBoundaries extends Component{

    state = {
        hasError : false,
        errorMessage : ''
    }

    /**
     * componentDidCatch, this is a method which receives potential error 
     * and some additional information passed into it automatically by 
     * react and componentDidCatch will be executed whenever a component 
     * we wrap with the error boundary throws an error. 
     * 
     * it will be called whenever a componenet within the error boundary wil throw an error. 
    */

    componentDidCatch = (error, info) => {
        console.log("error found");
        this.setState({
            hasError : true,
            errorMessage : error
        });
    }

    render(){
        if(this.state.hasError){
            return <h1>{ this.state.errorMessage }</h1>;
        }
        else{
            // we need to use this while accessing props in a class based comp
            return this.props.children;
        }
    }
}

export default ErrorBoundaries;

/**
 * by doing this much, ww will still get the error. But that only happens during development mode,
   once you've built this for production and ship it to a real server, we will get the code we return
   from the error boundary. 
   also, dont cluster ur code with error boundaries. use them only where it might unexpectedly 
   fail like making a server call etc. dont use it for where u may have written a wrong code. 
 */