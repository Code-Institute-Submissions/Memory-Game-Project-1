let clickedCard = null;
let preventClick = false;
let combosFound = 0;

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

    const cardAIndex = parseInt(Math.random() * cards.length)
    const cardA = cards[cardAIndex]
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);


    const cardBIndex = parseInt(Math.random() * cards.length)
    const cardB = cards[cardBIndex]
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color', color);

}

$(document).ready(function() {

        $(".gamecard").click(function onCardClicked(e) {
            const target = e.currentTarget

            if (preventClick || target === clickedCard || $(target).hasClass("done")) {
                return;
            }

            $(target).removeClass("color-hidden")
            $(target).addClass("done");

            if (!clickedCard) {
                clickedCard = target;
            } else if (clickedCard) {
                if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
                    console.log('cards not equal')
                    preventClick = true;
                    setTimeout(() => {
                        $(clickedCard).removeClass("done").addClass("color-hidden");
                        $(target).removeClass("done").addClass("color-hidden");
                        clickedCard = null;
                        preventClick = false;
                    }, 500);
                } else {
                    combosFound++;
                    clickedCard = null;
                    if (combosFound == 8) {
                        alert("YOU WIN!!")
                    }
                }
            }
        });
    });