import React, {Component} from 'react';
// import classes from './Person.css';

class Person extends Component{

    shouldComponentUpdate(nextProps, nextState){
        console.log( '[Person.js] shouldComponentUpdate() called');
        return true;
    }
    

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log( '[Person.js] getSnapshotBeforeUpdate() called');
        return { message : 'snapshot' };
    }
    

    componentDidUpdate(prevProps, prevState, snapshot){
    console.log( '[Person.js] componentDidUpdate() called', snapshot);
    }     


    componentDidMount(){
        console.log( '[Person.js ] componentDidMount() called' );
    }
    

    render(){
        console.log( '[Person.js] rendering' );
        
        return [
        // <div className = { classes.Person } >

            <p onClick = { this.props.clicked }> I am { this.props.name }. i am { this.props.age }.</p>, 

            <p> { this.props.children } </p>,
            
            <input type = "text" value = { this.props.name } onChange = { this.props.changed }/>
        
        // </div>
        ];
    }

}

export default Person;