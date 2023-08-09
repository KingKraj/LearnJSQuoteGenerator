let quotes = [];
let quoteGenerator = document.getElementById("quote-generator");
let quoteText = document.getElementById("quote");
let authorText = document.getElementById("author");
function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quote);
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author.replace(", type.fit", "");
}
async function getQuotes() {
  const quotesUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(quotesUrl);
    quotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, "_blank");
}
// function printPageArea(areaID) {
//   var printContent = document.getElementById(areaID).innerHTML;
//   var originalContent = document.body.innerHTML;
//   document.body.innerHTML = printContent;
//   console.log(window.print());
//   document.body.innerHTML = originalContent;
// }
// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
getQuotes();
