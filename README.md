# Memory Game Project

For my Interactive Frontend Development I have decided to remake an old classic memory game using HTML, CSS, JavaScript, JQuery and Bootstrap.
This game is built to test the memory of the user by having them reveal colours two at a time and trying to match the colours by remembering
where they were on the board.
 
## UX

I wanted to keep the UI as simple and intuitive as possible. I knew from the very beginning that I would want
a flat white background with dark text in an easily readable format that would fit nicely on any screen.
I believe this helps a lot with the accessibility of the website considering it's such a simple game.

Later in the project I decided to add in Modals instead of extra pages for the "How to Play" and "Credits"
to further ground the simplicity in the website.

To begin with the user is greeted by the home page; the nav bar, the title, some basic instructions added to the top
of the page and a 4x4 grid. The user is told to "Press any square to begin!" or they can click on "How to Play" to receive more detail
on how the game works. Once they click on a square then the game prompts them to "Select a second square!". Once the user has clicked two squares
then the game shows the restart button and starts tracking the combos and numbers of tries at the bottom of the 
page. A lot of this is done in JavaScript which I will explain in the JavaScript Code section.

I used Bootstrap to give the website a consistent aesthetic.

The website serves a couple main functions:

* It's a fun and simple game that anyone can pick up and play.
* It gives fun feedback such as the number of tries it took you and how many combos you have.
* It can be played on any device.

These are some User Stories which I will address further in the Testing section.

* Someone that wants a simple game that they can pick up and play with very little trouble
* Someone that wants to be able to "win" the game
* Someone that wants to restart their game should they want to try again
* Someone that wants to challenge their friends and family

### Colours 

I left the background colour entirely unstyled and used a very dark blue for the text and button elements. I had originally
planned to use black but after testing towards the final website I really liked the way the dark blue looked.

I was originally going to use pastel colours for the main squares of the game however changed my mind during the wireframing
as I believed brighter colours would provide more visual feedback.

### Wireframes

I built one wireframe for this project and I had a clear idea in my head for how the website should look
before I began coding again leaning into the simplicity, the wireframe can be viewed in the "wireframes" directory.

## JavaScript Code

The code was adapted and modified from [Web Dev Junkie's basic youtube tutorial](https://www.youtube.com/watch?v=bbb9dZotsOc). I modified it to use JQuery, as well as to add additional features
such as the number of tries tracker and the tutorial area. The code is split up into 3 main functions.

* onCardClicked
    - This function checks what card has been clicked, reveals the colour by removing the "color-hidden" class and adds the "done" class. It then checks if the second card clicked is the same colour.
    If they are the same colour then keep the colours revealed and add the "done" class, otherwise hide the colours again by adding the "color-hidden" class and remove the "done" class.
* tutorialFunction
    - This function simply updates the tutorial text at the top of the page.
* scoreFunction
    - This function is called to update the score at the bottom of the page. It is called after a card has been clicked.

## Features

The game was originally planned with very few "extra features" in terms of outside the actual game, however I ended up adding some 
as the website was being built.
 
### Existing Features

- A fun colour matching memory game
- Randomised colour tiles so not every game will be the same
- A combo tracker to see how many pairs of colours you have matched
- A number of tries tracker so you can challenge your friends or see how well you done
- Modals used to explain to the user "How to Play" and the "Credits"
- A basic tutorial shown at the top of the screen to get users started
- A restart button that will refresh the page

### Features Left to Implement

- Include the option to change between 3x3, 4x4, 5x5 etc grids.
- Include a hard mode that involves timing the user

## Technologies Used

- HTML & CSS
    - These languages are the core of the website.
- JavaScript
    - Used to write the majority of the game script.
- JQuery
    - Used to access and modify classes throughout the script.
- [Bootstrap](https://getbootstrap.com/)
    - Bootstrap was used to provide attractive styling universally across all pages.


## Testing

### Core Website Testing

The website was tested using Chrome Developer Tools on several mobile platforms, as well as on Mozilla Firefox and a 15.6 inch laptop using Google Chrome.

#### Testing

Device | Browser | Resolution | Intended Result | Result |
------------ | ------------ | ------------- | ------------ | ------------- |
My Computer | Google Chrome | 27 inch Monitor, 1920 x 1080 | Game should be clearly visible on a single page | Result as intended
My Computer | Google Chrome | Moto G4/Galaxy S5, 360 x 640 | Game should be clearly visible on a single portrait page | Game required you to scroll down to view scores. Fix documented below.
My Computer | Google Chrome | Pixel 2, 411 x 731 | Game should be clearly visible on a single portrait page | Result as intended
My Computer | Google Chrome | Pixel 2 XL, 411 x 823 | Game should be clearly visible on a single portrait page | Result as intended
My Computer | Google Chrome | iPhone 5 SE, 320 x 568 | Game should be clearly visible on a single portrait page | Result as intended
My Computer | Google Chrome | iPhone 6/7/8, 375 x 667  | Game should be clearly visible on a single portrait page | Result as intended
My Computer | Google Chrome | iPhone 6/7/8 Plus, 414 x 736 | Game should be clearly visible on a single portrait page | Result as intended
My Computer | Google Chrome | iPhone X, 375 x 812 | Game should be clearly visible on a single portrait page | Result as intended
My Computer | Google Chrome | iPad, 768 x 1024 | Game should be clearly visible on a single portrait page | Result as intended
My Computer | Google Chrome | iPad Pro, 1024 x 1366 | Game should be clearly visible on a single portrait page | Game size is too small. Fix documented below.
My Computer | Google Chrome | Surface Duo, 540 x 720 | Game should be clearly visible on a single portrait page | Result as intended
My Computer | Google Chrome | Galaxy Fold, 280 x 653 | Game should be clearly visible on a single portrait page | Result as intended



#### Issues

- Phones would require you to scroll down to view the scores
    - FIX: Added a media query to reduce the text size and padding when viewed on a smaller screen.
- Squares would stack very strangely on smaller screens, especially phone screens.
    - FIX: Added a media query to reduce the size of the squares when viewed on a smaller screen.
- Bootstrap overwriting the color of the game cards 
    - FIX: To fix this I had to change the class name of all game cards from .card to .gamecard. This fixed the issue.
- Game too small on iPad pro screen
    - FIX: Added a media query to increase the size of the square when viewed on an iPad Pro

### Code Testing and Bugfixing

- Bugs Documented
    - The game would think that matching colours are not matching and vice versa. 
        - FIX: Line 69 in main.js operator was set to === instead of !==. This simple change fixed the bug.
    - Game completely stopped responding
        - FIX: Forgot to update variable "secondSquare" to "hasSquareBeenClicked" on Line 37

## Deployment

I deployed this website by taking the following steps:

1. Going to github.com and logging in to my account.
2. Choosing the project repository.
3. Opening the settings and scrolling down to "GitHub Pages"
4. Enabling GitHub Pages by selecting the master branch and the root folder.
5. Pressing save.
6. After a short wait the website should be deployed at https://cmalky.github.io/Memory-Game-Project/index.html

## Credits

### Content

### Media

### Acknowledgements
