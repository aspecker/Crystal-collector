 # CRYSTAL COLLECTOR TO-DOs
 * better spacing on buttons
 * logic to prevent the same number from being selected by multiple buttons
 * shorten the underlines so they are only under each word
 * some sort of end of game celebration, like a shower of gems

# DONES
* * stop function to prevent it from shaking for 10 seconds after many clicks

 # Crystal Collector Pseudocode

 ## Buttons

 * four buttons needed, each with a different image
 * a random number between 19 and 120 will be generated in one box
 * total score will be displayed in another box, starts at 0

 * each button will have a random number assigned to it from 1-12 at the start of each game
 * each button will add this random value to the total score

 * if the total score is equal to the random number, add one to win column, generate new random number and generate new values for the buttons
 * if the total score goes over the random number, add one to the loss column, generate new random number and generate new values for the buttons

 ## JQUERY NOTES TO HELP WITH ASSIGNMENT
 
 *    $("element") - element selector, works on ids classes and elements
  
*        $("p").on("click", function(){
*        $(this).function();
*        });     - "click" can be substituted for a variety of triggers

*     $("element").toggle() switches between hide and show

*     $("element").fadeIn(speed,callback e.g. "slow") fades in, can be used to show new random number

*      $("div").animate({left: '250px'}); moves an element, could be used to wiggle a button on click
*      By default, all HTML elements have a static position, and cannot be moved. 
*      To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute

*      $("button").click(function(){
*       $("p").hide("slow", function(){
*        alert("The paragraph is now hidden");
*      });   - displays use of a callback function, which can be used to make sure one function triggers after another one
*      });   - alert will display after full hide. may be important for some of the key functions

*      $("#p1").css("color", "red").slideUp(2000).slideDown(2000);   - displays method chaining
*      $("#p1").css("color", "red")
*        .slideUp(2000)
*        .slideDown(2000);   -displays another way to do method chaining

*       .text() - Sets or returns the text content of selected elements  **- will be used to change the scores and the hidden value
*       .html() - Sets or returns the content of selected elements (including HTML markup)
*       .attr() - The jQuery attr() method is used to get attribute values.

*       append() - Inserts content at the end of the selected elements
*       prepend() - Inserts content at the beginning of the selected elements
*       after() - Inserts content after the selected elements
*       before() - Inserts content before the selected elements

*      function appendText() {
*      var txt1 = "<p>Text.</p>";              // Create text with HTML
*      var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
*      var txt3 = document.createElement("p");
*      txt3.innerHTML = "Text.";               // Create text with DOM
*      $("body").append(txt1, txt2, txt3);     // Append new elements
*      } - three different ways to use the APPEND method

*      $("p").remove(.test, .demo) - Removes the selected element (and its child elements)  - has a parameter for class, this will only remove p elements with thise classes
*      empty() - Removes the child elements from the selected element  -two ways to remove 

*      .css() - allows jquery to change css properties





 # jQuery Assignment
 
 ### Option One: CrystalsCollector Game (Recommended)
 
 ![Crystal Collector](Images/1-CrystalCollector.jpg)
 
 1. [Watch the demo](homework_demos/crystalsCollector_demo.mp4).
 
 2. The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters. 
 
 3. Here's how the app works:
 
    * There will be four crystals displayed as buttons on the page.
 
    * The player will be shown a random number at the start of the game.
 
    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
 
      * Your game will hide this amount until the player clicks a crystal.
      * When they do click one, update the player's score counter.
 
    * The player wins if their total score matches the random number from the beginning of the game.
 
    * The player loses if their score goes above the random number.
 
    * The game restarts whenever the player wins or loses.
 
      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
 
    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
 
 ##### Option 1 Game design notes
 
 * The random number shown at the start of the game should be between 19 - 120.
 
 * Each crystal should have a random hidden value between 1 - 12.
 

 
 ### Minimum Requirements
 
 Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.
 
 - - -
 
 ### Add To Your Portfolio
 
 After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
 
 - - -
