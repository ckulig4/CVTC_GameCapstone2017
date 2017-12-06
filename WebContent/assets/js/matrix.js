function main() {
  //variable
  var answer = document.getElementById("answer");
  var button = document.getElementById("matrixButton");
  var state = 0;
  
  button.addEventListener("click", function(e) {
    state = storyRouter(state, answer.value);
    displayState(state);
    answer.value = "";  // clear text box
  });
  
  //call the story function
  displayState(state);
}

// displays the story state in the main box.
function displayState(state){
  //variable
  var story = [];  
  story = [
    "Welcome to the simulation, Enter \"start\" to begin.",
    "Wake Up Neo... <br>" +
      "The Matrix has you <br>" +
      "Follow the White Rabbit <br>" +
      "Knock Knock Neo <br><br><br>" +
      "People show up to door and you notice someone has a white rabbit tattoo <br>" +
      "They ask if you want to go to a party<br><br><br>" +
      "Do you wish to follow? Enter y or n",
    "You go to the party.<br><br>You are approached by a mysterious woman <br>" +
      "with black hair who identifies herself as Trinity.<br><br>" +
      "She tells you about the situation that you are in.<br><br>" +
      "She hints at the Matrix, she says that she can show you the way.<br><br>" +
      "Enter \"c\" to continue<br>",
    "You say that you have work tomorrow\, <br>" +
      "They prompt you again do you want to go to the party?<br><br><br>" +
      "Do you wish to follow? Enter y or n",
    "You decide to go bed and try to get some sleep for tomorrow<br><br>" +
      "Enter \"c\" to continue<br>",
    "You wake up late for work, boss is pissed,<br> You hurry back to your cubicle.<br><br>" +
      "There is a package on you desk containing a phone, it starts to ring.<br>" +
      "You pick it up and a man starts to talk to you.<br>" +
      "<br>\"Is this Morpheus?\" you question.<br><br> The man says \"Yes, but I must be brief,<br>" + 
      "there are a group of men coming for you from the elevator.\"<br><br>" + 
      "You look over and see them approaching.<br><br> You must make a decision to follow Morpheus's instructions or be captured.<br><br>" + 
      "Do you wish to follow, y or n?<br>",
    "You are apprehended<br><br>" +     
      "The agents interrogate you and insert a tracking device into your belly button.<br><br>" +
      "You wake up the next day, you hope it was all a dream.<br><br> You get a phone call to meet with Morpheus.<br><br>" +
      "You visit with Morpheus and they remove the tracker.<br>" +
      "During your meeting with Morpheus he explains to you that you are a slave of the world you live in.<br>" +
      "\"Unfortunately,\" he explains \"you can’t be told what the Matrix is to understand,\" <br><br>You have to see it for yourself.\"<br><br>" +
      "Morpheus has a proposition for you in the form of two pills: red and blue.<br><br>" + 
      "IF you take the blue pill, the adventure is over, you wake up and nothing has changed.<br>" +
      "IF you take the red pill, Morpheus will show you what the Matrix is and what it is all about.<br><br><br>"+
      "Enter \"red\" or \"blue\"",
    "Congratulations,<br><br>You have chosen the Path of the One,<br>You have advanced further down the rabbit hole.<br><br><br>" +
      "END PART ONE!<br><br><br>" +
      "Enter \"r\" to restart or \"c\" to continue to part 2!<br>" ,
    "Sorry,<br><br>You are not the one, your adventure has come to an end.<br><br>" +
      "GAME OVER!<br><br><br>" +
      "Enter \"r\" to restart or close window<br>",
    "<br><br>STAY TUNED FOR PART 2!<br><br><br>" +
      "Enter \"r\" to restart or close window"
  ];
  //display story based on what state it is at
  document.getElementById("story").innerHTML = story[state];
}

// Main logic for determining how the story flows based on what they type.
function storyRouter(state, value) {
  switch(state) {
    case 0:
      if (value === "start") {
        state = 1;
      } else {
        alert("That's not valid.");
      }
      break;
    case 1: 
      if (value === "y") {
        state = 2;
      } else if (value === "n") {
        state = 3;
      } else {
        alert("Enter y or n");
      }
      break;
    case 2:
      if (value === "c" ) {
        state = 5;
      } else {
        alert("Enter \"c\" to continue or close window to quit");
      }
      break;
    case 3:
      if (value === "y" ) {
        state = 2;
      } else if (value === "n") {
        state = 4;
      } else {
        alert("Enter y or n");
      }
      break;
    case 4:
      if (value === "c" ) {
        state = 5;
      } else {
        alert("Enter \"c\" to continue or close window to quit");
      }
      break;
    case 5:
      if (value === "y" ) {
        state = 6;
      } else if (value === "n") {
        state = 6;
      } else {
        alert("Enter y or n");
      }
      break;
    case 6:
      if (value === "red" ) {
        state = 7;
      } else if (value === "blue") {
        state = 8;
      } else {
        alert("Enter red or blue");
      }
      break;
    case 7:
      if (value === "r" ) {
        state = 0;
      } else if (value === "c") {
        state = 9;
      } else {
        alert("Enter r to restart or c to continue");
      }
      break;
    case 8:
      if (value === "r" ) {
        state = 0;
      } else {
        alert("Enter r to restart");
      }
      break;
    case 9:
      if (value === "r" ) {
        state = 0;
      } else {
        alert("Enter r to restart");
      }
      break;
    // add more....
  }
  
  // return the state back so we can assign it
  // and use it.
  return state;
  
}

main();