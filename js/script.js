// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

const quotes = [{
        quote: "Get busy living or get busy dying.",
        source: "Stephen King",
        year: ""
    },
    {
        quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
        source: "Mark Caine",
        year: ""
    },
    {
        quote: "Success is how high you bounce when you hit bottom.",
        source: "George S. Patton",
        year: ""
    }
]
console.log(quotes)

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array) {
    let quoteNum = Math.floor(Math.random() * 3);
    return array[quoteNum];
    }
var randomQuote1 = getRandomQuote(quotes);

console.log(randomQuote1)

// Create the printQuote funtion and name it printQuote

function printQuote(data) {

    let quote1 = '<p class="quote">' + data.quote + '</p>';
    let source1 = '<p class="source">' + data.source +
    '<span class="year">' + data.year + '</span></p>';
    let source2 = '<p class="source">' + data.source + '</p>';


    if (data.year === "") {
        document.getElementById('quote-box').innerHTML = quote1 + source2
    } else {
        document.getElementById('quote-box').innerHTML = quote1 + source1
    };

    //document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}





// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote(randomQuote1));
