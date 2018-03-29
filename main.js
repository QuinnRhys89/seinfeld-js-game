const elaine = document.getElementById('elaine');
const kramer = document.getElementById('kramer');
const jerry = document.getElementById('jerry');
const george = document.getElementById('george');

// Comments
// Git Issue

// Event Listener for Elaine Benice
elaine.addEventListener("click", function (e) {
    console.log("elaine was clicked");

    $.ajax({
        url: "https://seinfeld-quotes.herokuapp.com/quotes",
        dataType: "JSON",
        method: "GET"
    }).then(function (res) {
        console.log(res);
        // variable made to reference the data from the entire array
        const allQuotes = res.quotes;
        // Used filter method to iterate over all quotes and select ones authored by Elaine
        const elaineQuotes = allQuotes.filter(quote => quote.author === "Elaine");
        // used the Math.floor/Math.random methods to randomize the index numbers from the filtered results
        const random = Math.floor(Math.random() * (elaineQuotes.length));
        // created a finalQuote variable to store the randomized index that references a quote
        const randomQuote = elaineQuotes[random].quote;
        const season = elaineQuotes[random].season;
        const episode = elaineQuotes[random].episode;
        const finalQuote = `${randomQuote} - Elaine Benice Season ${season}, Episode ${episode}`;

    
        // const image = elaineQuotes[random].image;
        // if (image !== ''){
        //         document.getElementsByTagName('img').src = image;
        //         console.log(image);
        // }

        function getResult(){
            document.getElementById('elaine').classList.add('active');
        }

        setTimeout(getResult,3000);
    

        
        // find the 'text' id and update text using the finalQuote variable
        document.getElementById('text').innerHTML = finalQuote;
        
    });
});


// Event Listener for Kramer 
kramer.addEventListener("click", function (e) {
    console.log("kramer was clicked");
    $.ajax({
        url: "https://seinfeld-quotes.herokuapp.com/quotes",
        dataType: "JSON",
        method: "GET"
    }).then(function (res) {
        // variable made to reference the data from the entire array
        const allQuotes = res.quotes;
        // Used filter method to iterate over all quotes and select ones authored by Elaine
        const kramerQuotes = allQuotes.filter(quote => quote.author === "Kramer");
        // used the Math.floor/Math.random methods to randomize the index numbers from the filtered results
        const random = Math.floor(Math.random() * (kramerQuotes.length));
        // created a finalQuote variable to store the randomized index that references a quote
        const randomQuote = kramerQuotes[random].quote;
        const season = kramerQuotes[random].season;
        const episode = kramerQuotes[random].episode;
        const finalQuote = `${randomQuote} - Kramer Season ${season}, Episode ${episode}`;

        const image = kramerQuotes[random].image;
        // find the 'text' id and update text using the finalQuote variable
        document.getElementById('text').innerHTML = finalQuote;
    });

});

// Event Listener for Jerry 
jerry.addEventListener("click", function (e) {
    $.ajax({
        url: "https://seinfeld-quotes.herokuapp.com/quotes",
        dataType: "JSON",
        method: "GET"
    }).then(function (res) {
        // variable made to reference the data from the entire array
        const allQuotes = res.quotes;
        // Used filter method to iterate over all quotes and select ones authored by Elaine
        const jerryQuotes = allQuotes.filter(quote => quote.author === "Jerry");
        // used the Math.floor/Math.random methods to randomize the index numbers from the filtered results
        const random = Math.floor(Math.random() * (jerryQuotes.length));
        // created a finalQuote variable to store the randomized index that references a quote
        const randomQuote = jerryQuotes[random].quote;
        const season = jerryQuotes[random].season;
        const episode = jerryQuotes[random].episode;
        const finalQuote = `${randomQuote} - Jerry Seinfeld Season ${season}, Episode ${episode}`;
        // find the 'text' id and update text using the finalQuote variable
        document.getElementById('text').innerHTML = finalQuote;
    });
    
});

// Event Listener for George
george.addEventListener("click", function (e) {
    $.ajax({
        url: "https://seinfeld-quotes.herokuapp.com/quotes",
        dataType: "JSON",
        method: "GET"
    }).then(function (res) {
        // variable made to reference the data from the entire array
        const allQuotes = res.quotes;
        // Used filter method to iterate over all quotes and select ones authored by Elaine
        const georgeQuotes = allQuotes.filter(quote => quote.author === "Jerry");
        // used the Math.floor/Math.random methods to randomize the index numbers from the filtered results
        const random = Math.floor(Math.random() * (georgeQuotes.length));
        // created a finalQuote variable to store the randomized index that references a quote
        const randomQuote = georgeQuotes[random].quote;
        const season = georgeQuotes[random].season;
        const episode = georgeQuotes[random].episode;
        const finalQuote = `${randomQuote} - George Costanza Season ${season}, Episode ${episode}`;
        // find the 'text' id and update text using the finalQuote variable
        document.getElementById('text').innerHTML = finalQuote;
    });
});

// Event Listener for Other Characters
other.addEventListener("click", function (e) {
    $.ajax({
        url: "https://seinfeld-quotes.herokuapp.com/quotes",
        dataType: "JSON",
        method: "GET"
    }).then(function (res) {
        // variable made to reference the data from the entire array
        const allQuotes = res.quotes;
        // Used filter method to iterate over all quotes and select ones authored by Elaine
        const otherQuotes = allQuotes.filter(quote => quote.author !== "Jerry" && quote.author !== "Elaine" && quote.author !== "George" && quote.author !== "Kramer");
        // used the Math.floor/Math.random methods to randomize the index numbers from the filtered results
        const random = Math.floor(Math.random() * (otherQuotes.length));
        // created a finalQuote variable to store the randomized index that references a quote
        const randomQuote = otherQuotes[random].quote;
        const season = otherQuotes[random].season;
        const episode = otherQuotes[random].episode;
        const finalQuote = `${randomQuote} - ${otherQuotes[random].author} Season ${season}, Episode ${episode}`;
        // find the 'text' id and update text using the finalQuote variable
        document.getElementById('text').innerHTML = finalQuote;
    });
});






