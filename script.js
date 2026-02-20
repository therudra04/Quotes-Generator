let displayQuote = document.querySelector("#displayQuote");
let displayAuthor = document.querySelector("#displayAuthor");


const api_url = "https://motivational-spark-api.vercel.app/api/quotes/random";

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    displayQuote.innerHTML = data.quote;
    displayAuthor.innerHTML = data.author + ".";
    console.log(data)
}




