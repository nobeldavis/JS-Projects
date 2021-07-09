const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');
const instagramBtn = document.getElementById('instagram')


// Get the APIs
async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json(); 
        /* If Author name is blank */
        if(data.quoteAuthor ===''){
            authorText.innerText = 'Unknown';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        //Reduce font size for long quotes
        if(data.quoteText.length > 50){
             quoteText.classList.add('long-quote');
        }else{
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = data.quoteText
    } catch (error) {
        //getQuote();
        console.log("Error", error);
    }
}

function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl,'_blank ');

}
//Even Elements
twitterBtn.addEventListener('click',tweetQuote);

// Load Page
getQuote();

/* 
Testing...Testing.....

async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = '';
    
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        geQuote();
        console.log("Error", error);
    }
}

getQuote();

*/
