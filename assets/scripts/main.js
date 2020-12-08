let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let numberOfTries = 0;
let hasSecondSquareBeenClicked = false;

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

const cards = [...document.querySelectorAll('.gamecard')];
for (let color of colors) {

    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);


    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color', color);

}

function tutorialFunction() {
    if (hasSecondSquareBeenClicked === false) {
        $(".tutorial").html("<h4>Now press a second square!</h4>");
        hasSecondSquareBeenClicked = true;
    } else {
        $(".tutorial").addClass("hidden");
        $(".restartbtn").removeClass("hidden");
    };
};

function scoreFunction () {
    $(".score-title").html(`<h2 class="score-title">Combos</h2>`);
    $(".tries-title").html(`<h2 class="tries-title">Number of Tries</h2>`);
    $(".score").html(combosFound);
    $(".tries").html(`<p> ${numberOfTries} </p>`);
};

$(document).ready(function() {

        $(".gamecard").click(function onCardClicked(e) {
            const target = e.currentTarget;
            if (preventClick || target === clickedCard || $(target).hasClass("done")) {
                return;
            };
            tutorialFunction();

            $(target).removeClass("color-hidden");
            $(target).addClass("done");

            if (!clickedCard) {
                clickedCard = target;
                numberOfTries++;
            } else if (clickedCard) {
                if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
                    console.log('cards not equal');
                    preventClick = true;
                    scoreFunction();
                    clickTimeout = setTimeout(() => {
                        $(clickedCard).removeClass("done").addClass("color-hidden");
                        $(target).removeClass("done").addClass("color-hidden");
                        clickedCard = null;
                        preventClick = false;
                        clearTimeout(clickTimeout); 
                    }, 500);
                } else {
                    scoreFunction();
                    combosFound++;
                    $(".score").html(combosFound);
                    clickedCard = null;
                    if (combosFound == 8) {
                        $(".score").html("");
                        $(".score-title").html("<h2>YOU WON!!</h2>");
                        preventClick = true;
                    };
                };
            };
        });
    });