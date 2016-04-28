window.__quote__ = '';

var errorMessage = 'Oops! There was an error getting the quote.'

function newQuote(e) {
  e && e.preventDefault();
  fetch('https://andruxnet-random-famous-quotes.p.mashape.com/cat=', {
    method: 'GET',
    headers: {
      'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V',
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(function(data) {
    return data.json();
  })
  .then(function(data) {
    //call function again if the response quote is the same as the old one.
    //Otherwise change content of quote to the new quote.
    if(data.quote === window.__quote__) {
      newQuote();
    } else {
      document.getElementById("quote-box").innerText = data.quote;
      document.getElementById("author-box").innerText = '—' + data.author;
      document.getElementById("error-div").innerText = '';
      window.__quote__ = data.quote;
    }
  })
  .catch(function(error) {
    //add the error message to the error-div
    document.getElementById("error-div").innerText = errorMessage;
  });
}

window.onload = function() {
  //get a new quote when the window loads
  newQuote();
  //assign newQuote to the "new quote" button
  document.getElementById("quote-btn").onclick = newQuote;
}