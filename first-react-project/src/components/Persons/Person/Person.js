import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component{

    // - should not use here as we dont have any state. 
    // static getDerivedStateFromProps(props, state) {
    //     console.log( '[Person.js] getDerivedStateFromProps() called', props);
    //     return state;
    // }


    shouldComponentUpdate(nextProps, nextState){
        console.log( '[Person.js] shouldComponentUpdate() called');
        return true;
    }
    

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log( '[Person.js] getSnapshotBeforeUpdate() called');
        return { message : 'snapshot' };
    }
    

    componentDidUpdate(prevProps, prevState, snapshot){
    // here we may create the side effects here only.
    console.log( '[Person.js] componentDidUpdate() called', snapshot);
    }     


    componentDidMount(){
        // here we may create the side effects here only. 
        console.log( '[Person.js ] componentDidMount() called' );
    }
    

    render(){
        console.log( '[Person.js] rendering' );
        
        return (
        <div className = { classes.Person } >

            <p onClick = { this.props.clicked }> I am { this.props.name }. i am { this.props.age }.</p> 

            <p> { this.props.children } </p>
            
            <input type = "text" value = { this.props.name } onChange = { this.props.changed }/>
        
        </div>
     );
    }

}

export default Person;