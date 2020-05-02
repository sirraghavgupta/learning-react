import React from 'react';
import './Fruit.css';


const fruit = (props) => {

    return (
        <tr>
            <td> { props.name } </td>
            <td> { props.quantity } </td>
            <td>
                <button onClick = { props.delete } > Delete </button>
            </td>
        </tr>
    );
}

export default fruit;