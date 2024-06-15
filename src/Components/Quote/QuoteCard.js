import React from 'react';
import './quote.css'

export default function 
QuoteCard(props) {
    const { name, key } = props;

    return ( <div><h2>{name}</h2>
    <h4>{key}</h4></div>
     );
}
