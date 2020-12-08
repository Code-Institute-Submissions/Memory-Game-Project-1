// Memory Game by Cameron Malkani
// Code inspired and modified to used JQuery from Web Dev Junkies youtube tutorial (credits in the ReadMe)

// Defining all the variables used in the code
let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let numberOfTries = 0;
let hasSecondSquareBeenClicked = false;

// Defining an array for all the colours used in the colour grid.
const colors = [
    'pink',
    'yellow',
    'red',
    'cyan',
    'blue',
    'teal',
    'orange',
    'green',
]

// This loop randomizes the colours in the grid, taken from Web Dev Junkies tutorial
const cards = [...document.querySelectorAll('.gamecard')];
for (let color of colors) {                                                                         // Begin loop
    const cardAIndex = parseInt(Math.random() * cards.length);                                      // Get a random number from the length of the cards
    const cardA = cards[cardAIndex];                                                                // Set the cardA variable to the random number
    cards.splice(cardAIndex, 1);                                                                    // Remove the colour chosen so that it can't be picked again.
    cardA.className += ` ${color}`;                                                                 // Assign card the random colour
    cardA.setAttribute('data-color', color);                                                        // Assign card the random colour
    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color', color);

}

// This function updates the tutorial at the top of the page
function tutorialFunction() { 
    if (hasSecondSquareBeenClicked === false) {                                                     // Detects whether or not the user has selected a second square
        $(".tutorial").html("<h4>Now press a second square!</h4>");                                 // If they haven't then update the tutorial to guide them
        hasSecondSquareBeenClicked = true;                                                          // Set the the variable to true
    } else {                                                                                        // If they have clicked the second square
        $(".tutorial").addClass("hidden");                                                          // Hide the tutorial text
        $(".restartbtn").removeClass("hidden");                                                     // Show the restart button
    };
};

// This function updates the scores
function scoreFunction () {
    $(".score-title").html(`<h2 class="score-title">Combos</h2>`);                                  // Changes the score title
    $(".tries-title").html(`<h2 class="tries-title">Number of Tries</h2>`);                         // Changes the tries title
    $(".score").html(combosFound);                                                                  // Updates the text under the title with the number of combos found
    $(".tries").html(`<p> ${numberOfTries} </p>`);                                                  // Updates the text under the title with the number of tries
};


// This is the main function for the game. It detects what cards have been pressed and whether they are the matching colour.
$(document).ready(function() {
        $(".gamecard").click(function onCardClicked(e) {                                            // When a gamecard is clicked execute the function onCardClicked with parameter "e"
            const target = e.currentTarget;                                                         // Sets the target variable for the card that was clicked

            if (preventClick || target === clickedCard || $(target).hasClass("done")) {             // If preventClick = true, the target is the same card as
                return;                                                                             // before or the target has the css class "done" then 
            };                                                                                      // return and don't allow the user to click.

            tutorialFunction();                                                                     // Once a card has been clicked, run the tutorial function above.

            $(target).removeClass("color-hidden");                                                  // Once a card has been clicked, reveal its colour
            $(target).addClass("done");                                                             // Once a card has been clicked, remove the highlight and disallow further clicking

            if (!clickedCard) {                                                                     // if clickedCard = null
                clickedCard = target;                                                               // set clickedCard to target
                numberOfTries++;                                                                    // increase the number of tries
            } else if (clickedCard) {                                                               // if clickedCard != null
                if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) { // check to see if the two cards selected are equal
                    console.log('cards not equal');                                                 // log to the console that the cards are not equal
                    preventClick = true;                                                            // prevent clicking while the program shows the colours and hides them again
                    scoreFunction();                                                                // update the score
                    clickTimeout = setTimeout(() => {                                               // set a timeout before the colours are hidden again
                        $(clickedCard).removeClass("done").addClass("color-hidden");                // removes the class done and adds the class color-hidden back to the clicked card
                        $(target).removeClass("done").addClass("color-hidden");                     // removes the class done and adds the class color-hidden back to the clicked card
                        clickedCard = null;                                                         // resets the clickedCard variable
                        preventClick = false;                                                       // allows the user to click again
                        clearTimeout(clickTimeout);                                                 // clears the timeout
                    }, 500);                                                                        // the length of the timeout
                } else {                                                                            // if the two cards match
                    scoreFunction();                                                                // run score function
                    combosFound++;                                                                  // increase the number of combos found
                    clickedCard = null;                                                             // resets the clickedCard variable
                    if (combosFound == 8) {                                                         // if the combosfound = 8
                        $(".score").html("");                                                       // remove the combo counter 
                        $(".score-title").html("<h2>YOU WON!!</h2>");                               // display "YOU WON!" for the user
                        preventClick = true;                                                        // prevent the user from clicking the game any more.

                    };
                };
            };
        });
    });