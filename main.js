const elaine = document.getElementById('elaine');
const kramer = document.getElementById('kramer');
const jerry = document.getElementById('jerry');
const george = document.getElementById('george');
const newman = document.getElementById('newman');
const frank = document.getElementById('frank');
const quoteButton = document.querySelector('#quote-btn');
const button = document.querySelectorAll('.answer-btn');
const timer = document.querySelector('#seconds');
const gif = document.querySelector('#gif');
const quote = document.querySelector('#text');
const quotation = document.querySelector('#quotation');
const container = document.querySelector('.quote-container');
const citation = document.querySelector('.citation');
const apiKey = "6htGmGphbh72Smi9RnaAh8E7hFZQwtN0";

// Smooth Scroll
$('a').smoothScroll({
    offset: 0
});

// event listener for quote button
quoteButton.addEventListener('click', getQuote);

// Function to Generate random quote from API and update onto page
function getQuote(e){
    e.preventDefault;

    // Reset for Button and Gifs
    $(gif).remove();
    $(timer).show(1500);
    $(quote).show();
    $(button).removeClass('result active');
    $(citation).hide();
    

   
    // Ajax call to Seinfeld API
    $.ajax({
        url: "https://seinfeld-quotes.herokuapp.com/quotes",
        dataType: "JSON",
        method: "GET"
    }).then(function (res) {
        console.log(res);

        // variable made to reference the data from the entire array
        const allQuotes = res.quotes;
        // Used filter method to iterate over all quotes and select ones authored by Elaine
        const selectedQuotes = allQuotes.filter(quote => quote.author === "Elaine" || quote.author === "Jerry" || quote.author === "Kramer" || quote.author === "George" || quote.author === "Newman" || quote.author === "Frank");
        // used the Math.floor/Math.random methods to randomize the index numbers from the filtered results
        const random = Math.floor(Math.random() * (selectedQuotes.length));

        const randomQuote = selectedQuotes[random].quote;
        const character = selectedQuotes[random].author;
        const season = selectedQuotes[random].season;
        const episode = selectedQuotes[random].episode;
        const finalQuote = `${character}, Season ${season}, Episode ${episode}`;

        // display finalQuote onto the page issuing innerHTML
        quote.innerHTML = randomQuote;
        $('.fa-quote-left').show('.fa-quote-left');
        

        setTimeout(function(){
            let countdown = 6;
           
    
            const interval = setInterval(function () {
                countdown--;
                timer.innerHTML = countdown;
               
                if (countdown === 0) {
                    clearInterval(interval);
                    $(timer).hide();
                    showAnswer(character); 
                    $(quote).hide();
                    $('.fa-quote-left').hide();
                    $(citation).fadeIn(1000);
                    citation.innerHTML = finalQuote;
                    $(quotation).append(gif);
                    $(button).removeClass('active');
                    let countdown = 6;
                }
            }, 1000); 
        }), 1000;
    });
}


// function to highlight answer once the quote has been display
function showAnswer(param) {

    const lowercaseCharacter = param.toLowerCase();
    const btncontainer = document.querySelector('button-container');
    const result = document.querySelector(`#${lowercaseCharacter}`);
    
    const elaineGif = "https://api.giphy.com/v1/gifs/search?q=elaine+benes+julia+louis-dreyfus&api_key=6htGmGphbh72Smi9RnaAh8E7hFZQwtN0&limit=40";

    const jerryGif = "https://api.giphy.com/v1/gifs/search?q=jerry+seinfeld&api_key=6htGmGphbh72Smi9RnaAh8E7hFZQwtN0&limit=40";
    
    const georgeGif = "https://api.giphy.com/v1/gifs/search?q=george+costanza+jason+alexander&api_key=6htGmGphbh72Smi9RnaAh8E7hFZQwtN0&limit=40";

    const kramerGif = "https://api.giphy.com/v1/gifs/search?q=cosmo+kramer&api_key=6htGmGphbh72Smi9RnaAh8E7hFZQwtN0&limit=30";

    const frankGif = "https://api.giphy.com/v1/gifs/search?q=frank+costanza+seinfeld&api_key=6htGmGphbh72Smi9RnaAh8E7hFZQwtN0&limit=10";

    const newmanGif = "https://api.giphy.com/v1/gifs/search?q=newman+seinfeld&api_key=6htGmGphbh72Smi9RnaAh8E7hFZQwtN0&limit=10";

    if(lowercaseCharacter === "elaine"){
       getElaine();
    } else if (lowercaseCharacter === "kramer"){
        getKramer();
    } else if (lowercaseCharacter === "george"){
        getGeorge();
    } else if (lowercaseCharacter === "jerry"){
        getJerry();
    } else if (lowercaseCharacter === "frank"){
        getFrank();
    } else {
        getNewman();
    }


    function getElaine(){
        $.ajax({
            url: elaineGif,
            dataType: "JSON",
            method: "GET"
        }).then(function (res) {

            elaineData = res.data;
            console.log(elaineData);
            firstGif = elaineData.map(gif => gif);
            const randomItem = firstGif[Math.floor(Math.random() * firstGif.length)];
            $(randomItem).fadeIn();
            const source = randomItem.embed_url;
            gif.src = source;
            $(gif).fadeIn(2000);
        });
    }

    function getKramer() {
        $.ajax({
            url: kramerGif,
            dataType: "JSON",
            method: "GET"
        }).then(function (res) {


            kramerData = res.data;
            console.log(elaineData);
            firstGif = kramerData.map(gif => gif);

            const randomItem = firstGif[Math.floor(Math.random() * firstGif.length)];

            const source = randomItem.embed_url;
            gif.src = source;
            $(gif).fadeIn(2000);
        });
    }

    function getJerry() {
        $.ajax({
            url: jerryGif,
            dataType: "JSON",
            method: "GET"
        }).then(function (res) {

            jerryData = res.data;
            firstGif = jerryData.map(gif => gif);

            const randomItem = firstGif[Math.floor(Math.random() * firstGif.length)];
            const source = randomItem.embed_url;
            gif.src = source;
            $(gif).fadeIn(2000);
        });
    }

    function getGeorge() {
        $.ajax({
            url: georgeGif,
            dataType: "JSON",
            method: "GET"
        }).then(function (res) {

            georgeData = res.data;
            firstGif = georgeData.map(gif => gif);

            const randomItem = firstGif[Math.floor(Math.random() * firstGif.length)];
            const source = randomItem.embed_url;
            gif.src = source;
            $(gif).fadeIn(2000);
        });
    }

    function getFrank() {
        $.ajax({
            url: frankGif,
            dataType: "JSON",
            method: "GET"
        }).then(function (res) {

            frankData = res.data;
            firstGif = frankData.map(gif => gif);

            const randomItem = firstGif[Math.floor(Math.random() * firstGif.length)];
            const source = randomItem.embed_url;
            gif.src = source;
            $(gif).fadeIn(2000);
        });
    }


    function getNewman() {
        $.ajax({
            url: newmanGif,
            dataType: "JSON",
            method: "GET"
        }).then(function (res) {

            newmanData = res.data;
            firstGif = newmanData.map(gif => gif);

            const randomItem = firstGif[Math.floor(Math.random() * firstGif.length)];
            const source = randomItem.embed_url;
            gif.src = source;
            $(gif).fadeIn(2000);
        });
    }



    for (let i = 0; i < result.parentNode.children.length; i++) {
        result.parentNode.children[i].classList.remove('result');
    }
    
    const highlightedResult = result.classList.add('result');
    const twoClasses = document.querySelector('.active.result');
    let score = document.querySelector(".score-number");
    
    if (twoClasses) {
        score.innerHTML++;
    } else {
        score.innerHTML--
    }

}


// function to add active class to user selection
function selectChoice(e){
    // e.preventDefault allows the selection to clear everytime a quote is generated
    e.preventDefault;
   
    // if a button is selected (e.target) then loop through all of the children (buttons) and remove the class of active
    if(e.target){
        for(let i = 0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove('active');
        }
    }
    // add the class of active to selected button
    const active = e.target.classList.add('active');  
}



// All Event Listeners
elaine.addEventListener("click", selectChoice);
george.addEventListener("click", selectChoice);
jerry.addEventListener("click", selectChoice);
kramer.addEventListener("click", selectChoice);
newman.addEventListener("click", selectChoice);
frank.addEventListener("click", selectChoice);
















