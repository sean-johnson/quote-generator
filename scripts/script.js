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
    if(data.quote === window.__quote__) {
      newQuote(window.__quote__);
    } else {
      document.getElementById("quote-box").innerHTML = data.quote;
      document.getElementById("author-box").innerHTML = '—' + data.author;
      document.getElementById("error-div").innerHTML = '';
      window.__quote__ = data.quote;
    }
  })
  .catch(function(error) {
    document.getElementById("error-div").innerHTML = errorMessage;
  });
}

window.onload = function() {
  newQuote();
  document.getElementById("quote-btn").onclick = newQuote;
}