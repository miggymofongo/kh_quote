import React from 'react';
import './quote.css'

export default function 
QuoteCard({ quote, game, name, key}) {
   

    return ( <div class="quote-wrapper">
        <quote>{quote}</quote>
        <h2>{name}</h2>
        
        <h3>{game}</h3>
        
        <div></div>
    </div>
     );
}
