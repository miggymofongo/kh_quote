import React from 'react';
import './quote.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote, whatGameAlert } = props;
    
    return (
        <div className="card" >
            <div className="card-body">
                <p className="card-text">{quote.quote}</p>
                <h5 className="card-title">- {quote.author}</h5>
                <Button
                className='btn-primary'
                onClick={() => generateRandomQuote(quote) }
                type="submit">WEPA!
                </Button>
                <Button
                variant='dark'
                onClick={() => { whatGameAlert(quote)}}
                type="submit">Source
                </Button>
            </div>
        </div>
    )
}