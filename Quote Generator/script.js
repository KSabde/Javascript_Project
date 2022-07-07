const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const  twitterBtn= document.getElementById('twitter');
const  newQuoteBtn= document.getElementById('new-quote');
let apiQuotes= [];

// show new quote
function newQuote(){
//    pick random quotes from apiquotes array
   const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
   console.log(quote);
// check if author fieald is blank and replace with unknown
   if(!quote.author){
      authorText.textContent = 'unknown';
   }else{
      authorText.textContent = quote.author;
   }
// check the quote length
   if(quote.text.length>120){
      quoteText.classList.add('long-quote');
   }else{
      quoteText.classList.remove('long-quote');
   }

  // authorText.textContent = quote.author;
   quoteText.textContent = quote.text;

}
// get quoutes from Api
async function getQuotes(){
    const apiUrl ='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes =await response.json();
        newQuote();
    
    }catch(error){
        // catch Error here

    }

    
}


// tweet a quote
function tweetQuote(){
   const tweeterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
   window.open(tweeterUrl, '_blank');
}

// event listner
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click', tweetQuote);

 // on load
 getQuotes();