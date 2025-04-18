const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerText = data.content;
  author.innerText = data.author;
  console.log(data)
}

getQuote(api_url);