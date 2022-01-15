const api = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

async function getData()
{
    const response = await fetch(api);
    const data = await response.json();
    printData(data)
}




function printData(data){
    const quote = document.getElementById('quote')
    const author = document.getElementById('author')
    quote.innerHTML = `
    <p>${data.map(m => m.quote)}</p>
    `
    author.innerHTML = `
    <p>${data.map(m => m.author)}</p>
    `
}

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.map(m => m.quote)}"`;
      author.innerHTML = `- ${data.map(m => m.author)}`;
    });
}


getData()