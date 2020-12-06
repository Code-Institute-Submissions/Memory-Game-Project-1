let clickedCard = null;
let preventClick = false;
let combosFound = 0;

$(document).ready(function() {

        $(".card").click(function onCardClicked(e) {
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