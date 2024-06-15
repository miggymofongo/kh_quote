import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import quotes from '../Quote/quotes';
import QuoteCard from '../Quote/QuoteCard';
import { Carousel } from 'bootstrap';
import UncontrolledExample from '../Carousel/Carousel';
import Footer from '../Footer/Footer';

export default class App extends Component {

  /* declare an object state to hold each quote as
   cycles through the quotes array */
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author,
    game: quotes[0].game
  }

  /* this function will generate diffrent quote
  by updating state with the shuffleQuotes
  function that curcles through the quotes
  array*/
  generateRandomQuote = (arr) => {
    //
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
      game: newQuote.game
    })

    this.shuffleQuotes(quotes)

  }
  
  //shuffle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }


/* make a function that outputs a modal with the 
  source of the quote. installment is set to
  the game key value pair describing which installment
  in the series it is from*/

  whatGameAlert = () => {

    alert(this.state.game);
  }


  render() {
    return (
      
      <div>
<Header /><div className='wrapper'>
        <h1 className="text-center">Random Kingdom Hearts Quote Generator</h1>
        <p> Click the WEPA! button to cycle through an array of different 
          character quotes from the Kingdom Hearts video game series!
        </p>
        <QuoteCard
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
          author={this.state.author}
          whatGameAlert={this.whatGameAlert}
          game={this.state.game}
        />
        
        </div>
        <div className='wrapper'>
      <UncontrolledExample></UncontrolledExample>
      </div>
      <Footer></Footer>
      </div>
    )
  }
}
