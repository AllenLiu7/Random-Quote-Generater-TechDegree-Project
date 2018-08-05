// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [{
        quote: "Get busy living or get busy dying.",
        source: "Stephen King",
        year: "",
        tag: "Career"
    },
    {
        quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
        source: "Mark Caine",
        year: "",
        tag: "Career"
    },
    {
        quote: "Success is how high you bounce when you hit bottom.",
        source: "George S. Patton",
        year: "",
        tag: "Career"
    },
    {
        quote: "A friend is someone who gives you total freedom to be yourself.",
        source: "Jim Morrison",
        year: "1999",
        tag: "Relation"
    },
    {
        quote: "No one really knows why they are alive until they know what they’d die for.",
        source: "Martin Luther King Jr",
        year: "1968",
        tag: "Life"
    }
]
console.log(quotes)

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array) {
    let quoteNum = Math.floor(Math.random() * 5);
    return array[quoteNum];
    }

//Auto refresh the quote
var myVar = setInterval(printQuote, 3000);

// Create the printQuote funtion and name it printQuote
function printQuote() {

    getRandomQuote(quotes)
    var randomQuote = getRandomQuote(quotes);
//Creat the content of html
    let quote1 = '<p class="quote">' + randomQuote.quote + '</p>';
    let source1 = '<p class="source">' + randomQuote.source +
    '<span class="year">' + randomQuote.year + '</span><span class="tag">' + randomQuote.tag + '<span/></p>';
    let source2 = '<p class="source">' + randomQuote.source + '<span class="tag">' + randomQuote.tag + '<span/></p>';
//Use different source depends of the year condition
    if (randomQuote.year === "") {
//document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
        document.getElementById('quote-box').innerHTML = quote1 + source2
    } else {
        document.getElementById('quote-box').innerHTML = quote1 + source1
    };

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

    document.body.style.backgroundColor = getRandomColor()


}
//Print the random quote when refresh
printQuote()


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click",printQuote,false);
