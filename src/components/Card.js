import React from 'react';
import './Card.css';
function Card(props) {
    const NewClass="Card "+props.className;
    return (
        <div className={NewClass}>
            {props.children}
        </div>
    )
}

export default Card
