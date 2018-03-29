const elaine = document.getElementById('elaine');
const kramer = document.getElementById('kramer');
const jerry = document.getElementById('jerry');
const george = document.getElementById('george');
const newman = document.getElementById('newman');
const frank = document.getElementById('frank');
const quoteButton = document.querySelector('#quote-btn');

// event listener for quote button
quoteButton.addEventListener('click', function(e){
    getQuote();

});

// Function to Generate random quote from API and update onto page
function getQuote(){
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
        const selectedQuotes = allQuotes.filter(quote => quote.author === "Elaine" || quote.author === "Jerry" || quote.author === "Kramer" || quote.author === "George" || quote.author === "Newman" || quote.author === "Frank Costanza");
        // used the Math.floor/Math.random methods to randomize the index numbers from the filtered results
        const random = Math.floor(Math.random() * (selectedQuotes.length));

        const randomQuote = selectedQuotes[random].quote;
        const character = selectedQuotes[random].author;
        const season = selectedQuotes[random].season;
        const episode = selectedQuotes[random].episode;
        const finalQuote = `${randomQuote} - ${character} Season ${season}, Episode ${episode}`;

        // display finalQuote onto the page issuing innerHTML
        document.getElementById('text').innerHTML = finalQuote;

        // function to highlight answer once the quote has been display
        function showAnswer(param) {
            
            const lowercaseCharacter = param.toLowerCase();
            const btncontainer = document.querySelector('button-container');

            const result = document.querySelector(`#${lowercaseCharacter}`)
            for (let i = 0; i < result.parentNode.children.length; i++) {
                result.parentNode.children[i].classList.remove('result');
            }

            // adds a result class to the highlightedResult
            function showResult(){
                const highlightedResult = result.classList.add('result'); 
            }

            // calling setTimeout function which has showResult as parameter
            // showAnswer runs after 3000 (3 secs)
            setTimeout(showResult, 5000);
        }

        // Call showAnswer function
        showAnswer(character);

    });
}






// function to add active class to user selection
function selectChoice(e){
    // console.log("selected");
    e.preventDefault;
    console.log(e.target);
    // if a button is selected (e.target) then loop through all of the children (buttons) and remove the class of active
    if(e.target){
        for(let i = 0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove('active');
        }
    }
    // add the class of active to selected button
    e.target.classList.add('active');
}



elaine.addEventListener("click", selectChoice);
george.addEventListener("click", selectChoice);
jerry.addEventListener("click", selectChoice);
kramer.addEventListener("click", selectChoice);
newman.addEventListener("click", selectChoice);
frank.addEventListener("click", selectChoice);




// function getResult() {
//     document.getElementById('elaine').classList.add('active');
// }

// setTimeout(getResult, 3000);



