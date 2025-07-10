# The Odin Project - Battleship Project

This project follows the specifications within the curriculum of The Odin Project <br>
https://www.theodinproject.com/lessons/node-path-javascript-battleship


Javascript bundled with Webpack and testing with Jest
-----------------------------------------------------
This JavaScript project is bundled with Webpack and utilizes Test-Driven Development (TDD) with Jest for the logic.  This approach involves writing tests first and then implementing the code to pass those tests, ensuring the application logic is robust and well-structured.
The project setup includes Webpack for bundling, Jest for testing, and Babel for handling ES6 modules.<br>
The project view is https://manelly67.github.io/TheOdinProject-Battleship

### Css styles ###
Responsive design for screens of different sizes. However in order to see both game boards at the same time, it is recommended to use on medium or large screens.

### JavaScript DOM Access ###
The project generates all the DOM elements through JavaScript code. This approach allows for more dynamic and interactive web pages, as the DOM can be modified in response to user actions or other events.

### Separate JS Logic and UI ###
The JavaScript code separates components into an independent screen-controller file, isolating from the underlying business logic in the game-controller file. To ensure that each component has a single responsibility.

### Class Constructor Usage ###
The project uses a class constructor to create instances of the player, ship, and gameboard objects. <br>
According to object-oriented programming to initialize these objects.

### JavaScript Function Access in the Game Controller ###
The logic code is structured using an object-oriented approach, grouped related functions under a single object.<br>
The main function in the game-controller file, act as the container for the sub-functions. <br>
These sub-functions are properties of the main function and can then be accessed using the syntax game.nameFunction().

### JavaScript Screen Controller ###
The main function for the screen controller facilitates the writing of additional functions in other components, which are responsible for updating the game screen in response to user interactions.<br>

### Intelligence of the computer player ###
After getting a ‘hit’, computer player tries adjacent slots.<br>
For this purpose The map() method in JavaScript is used to create an array of adjacent cells.
And when a hit is getting, the random attack function is replaced by adjacent cell attack.

### JavaScript Set Method Usage ###
Because the Set() method in JavaScript is used to store unique values of any type, was selected for store the array of all attacks and missing attacks in order to use the 
has() method to check if a specific value exists in the set.

### Score Board ###
A scoreboard is used to display the state of the game, with the percentage of success and how many ships have been sunk for each player

### Reset Game ###
The reset for a new game is achieved with a window reload.

### Test ###
The main functions of the logic were tested with Jest 

### Credits ###
The ship and ship sunk images for the scoreboard were created by me.
