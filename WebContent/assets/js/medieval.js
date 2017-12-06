$(document).ready(function(){  
  //Variables assigned values later
  var myName;
  var damage;
  var totalHealth;
  var totalAttack;
  var totalDefense;
  var enemyHealth;
  var enemyAttack;
  var enemyDefense;
  var oldLevel;
  //Empty strings for verifying input
  var myClass = "";
  var position = "";
  var userInput = "";
  //Starting booleans
  var hasKey = false;
  var hasTorch = false;
  var gameStart = false;
  var firstDoorOpen = false;
  var secondStart = false;
  var secondDoorOpen = false;
  //Monster booleans
  var goblin = true;
  //Starting level and section
  var level = 0;
  var levelTracker = 1;
  var sectionTracker = 1;
  var experienceTracker = 0;
  var doorHealth = 4;

  $(".approval").hide().fadeIn(1500);

  $(".startButton").click(function() {
    $(".startButton").fadeOut(1500);
    setTimeout(function() {
      $(".textArea").html("<div id=\"textOutput\">Welcome, type in \"start\" to begin, or \"instructions\" to learn the basic commands</div>");
      
      $(".textArea").hide().fadeIn(1500);
      $(".textInput").hide().fadeIn(1500);
    }, 1000);
  });

  $(".textInput").on('keyup', function (e) {
      if (e.keyCode == 13) {
        userInput = $(".inputBox").val().toLowerCase();
        $(".textArea").fadeOut(1000);
        setTimeout(function() {
          adventure(levelTracker, sectionTracker);
        }, 1000);
        $(".textArea").fadeIn(1000);
        $(".inputBox").val("");
        
        if (levelTracker > 1 || sectionTracker > 2) {
          statCheck();
        }
      }
  });
  //IN PROGRESS
  function combat(enemy, enemyHealth, enemyAttack, enemyDefense) {
    if (userInput == "attack") {
        damage = myDamage(enemyDefense, totalAttack);
        enemyHealth -= damage;
        $("#textOutput").text("You deal " + damage + " damage");
        if (enemyHealth <= 0) {
          $("#textOutput").text("You have defeated the " + enemy + "!");
          removeEnemy(enemy);
          experienceTracker += experienceValue;
          myExperience(experienceTracker);
        }
        else if (enemyHealth > 0) {
          damage = enemyDamage(enemyAttack, totalDefense)
          totalHealth -= damage;
          $("#textOutput").text("You are dealt " + damage + " damage");
        }
      }
      else if (userInput == "flee") {
        $("#textOutput").text("You flee from the battle"); 
      }
  }
  //COMPLETED
  function enemyDamage(attack, defense) {
    var randomResult = Math.floor(Math.random() * 4) + 1;
    damage = ((randomResult + attack) - defense);
    if (damage < 0) {
      damage = 0;
    }
    return damage;
  }
  //COMPLETED
  function myDamage(attack, defense) {
    var randomResult = Math.floor(Math.random() * 6) + 1;
    damage = ((randomResult + attack) - defense) + 100; //Make sure to remove + 100 later
    if (damage < 1) {
      damage = 1;
    }
    return damage;
  }
  //IN PROGRESS
  function myExperience(experience) {
    oldLevel = level;
    if (experience >= 165) {
      level = 5;
      totalHealth += 4;
      totalAttack += 2;
      totalDefense += 2;
    }
    else if (experience >= 95) {
      level = 4;
      totalHealth += 3;
      totalAttack += 1;
      totalDefense += 1;
    }
    else if (experience >= 45) {
      level = 3;
      totalHealth += 2;
      totalAttack += 1;
      totalDefense += 1;
    }
    else if (experience >= 15) {
      level = 2;
      totalHealth += 2;
      totalAttack += 1;
      totalDefense += 1;
    }
    else if (experience >= 5) {
      level = 1;
      totalHealth += 1;
      totalAttack += 1;
      totalDefense += 1;
    }
    if (level > oldLevel) {
      $("#levelUp").hide().fadeIn(2000);
      $("#levelUp").text("You Leveled Up! You are now level " + level + "!");
      $("#levelUp").fadeOut(2000);
    }
  }
  //IN PROGRESS
  function removeEnemy(enemy) {
    if (enemy == "goblin") {
      goblin = false;
    }
  }
  //IN PROGRESS
  function fight(enemy) {
    if (enemy == "goblin") {
      enemyHealth = 6;
      enemyAttack = 1;
      enemyDefense = 1;
      experienceValue = 5;
    }
    else if (enemy == "skeleton") {
      enemyHealth =10;
      emeyAttack =2;
      enemyDefense =2;
      experienceValue =10;
    }
    else if (enemy == "mercenary") {
      enemyHealth =12;
      emeyAttack =3;
      enemyDefense =2;
      experienceValue =25;
    }
    else if (enemy == "dragon") {
      enemyHealth =25;
      emeyAttack =5;
      enemyDefense =5;
      experienceValue =50;
    }
    combat(enemy, enemyHealth, enemyAttack, enemyDefense);
  }
  //COMPLETED
  function statCheck() {
    $("#healthValue").text(totalHealth);
    $("#attackValue").text(totalAttack);
    $("#armorValue").text(totalDefense);
    
    if (totalHealth <= 0) {
      $("#textOutput").text("You have died");
      levelTracker = -1;
    }
  }
  //COMPLETED
  function characterClass(className) {
    if (className == "barbarian") {
      totalHealth = 15;
      totalAttack = 4;
      totalDefense = 1;
    }
    else if (className == "archer") {
      totalHealth = 12;
      totalAttack = 3;
      totalDefense = 2;
    }
    else if (className == "magician") {
      totalHealth = 10;
      totalAttack = 4;
      totalDefense = 2;
    }
    else if (className == "warlord") {
      totalHealth += 10;
      totalAttack += 3;
      totalDefense += 1;
    }
    else if (className == "ranger") {
      totalHealth += 6;
      totalAttack += 2;
      totalDefense += 3;
    }
    else if (className == "wizard") {
      totalHealth += 5;
      totalAttack += 4;
      totalDefense += 1;
    }
    myClass = className.charAt(0).toUpperCase() + className.slice(1)
    $("#class").text(" the " + myClass);
  }
  //IN PROGRESS
  function textOutput(level, section, textSection) {
	if (level == -1) {
		//Allows no other actions
		 $("#textOutput").text("You cannot do anything, you are dead");
	}
	 //Basic actions -> Not allowed yet
	else if (level == 0) {
      if (section == 0) {
        if (textSection == 1) {
          $("#textOutput").text("There is nothing for you to open here");
        }
        else if (textSection == 2) {
          $("#textOutput").text("There is nothing for you to fight here");
        }
        else if (textSection == 3) {
          $("#textOutput").text("There is nothing for you to insepct here");
        }
        else if (textSection == 4) {
          $("#textOutput").text("There is nothing for you to pickup here");
        }
        else if (textSection == 5) {
          $("#textOutput").text("There is nothing notable to the north");
        }
        else if (textSection == 6) {
          $("#textOutput").text("There is nothing notable to the south");
        }
        else if (textSection == 7) {
          $("#textOutput").text("There is nothing notable to the east");
        }
        else if (textSection == 8) {
          $("#textOutput").text("There is nothing notable to the west");
        }
      }
    }
    //First level of game
    if (level == 1) {
      if (section == 1) {
        if (textSection == 1) {
          $("#textOutput").text("In order to play this game, you must simply type in a word into the text box, and press enter to submit it. For basic commands type in \"next\". When you are ready to begin, enter in \"start\"");
        }
        else if (textSection == 2) {
          $("#textOutput").text("Movement commands: north, south, east, west.\nCombat commands: attack.\nBasic commands: open, pickup, inspect, fight, check area, restart.");
        }
        else if (textSection == 3) {
          $("#textOutput").text("What is your name?");
        }
        else if (textSection == 4) {
          $("#textOutput").text("Please choose a class: Barbarian, Archer, or Magician");
        }
      }
      else if (section == 2) {
        if (textSection == 1) {
          $("#textOutput").text("Are you sure you want to be a " + myClass + "?");
        }
        else if (textSection == 2) {
          $("#textOutput").text("Welcome " + myName + "! When you are ready to being your advenutre, enter in \"begin\"");
        }
      }
      else if (section == 3) {
        if (textSection == 1) {
          $("#textOutput").text("You wake up in a damp, dimmly lit room. You see a door on the north side of the room, and a metal window on the south side.");
        }
        else if (textSection == 2) {
          $("#textOutput").text("You approach the door on the north side of the room");
        }
        else if (textSection == 3) {
          $("#textOutput").text("You approach the window on the south side of the room");
        }
        else if (textSection == 4) {
          $("#textOutput").text("You cannot go further north, a door is blocking your way.");
        }
        else if (textSection == 5) {
          $("#textOutput").text("You are already on the south side of the room");
        }
        else if (textSection == 6) {
          $("#textOutput").text("You open the door, revealing a large hallway leading north. Further down the hallway you see a shrouded figure.");
        }
        else if (textSection == 7) {
          $("#textOutput").text("You cannot pickup the door, it is too heavy.");
        }
        else if (textSection == 8) {
          $("#textOutput").text("You punch the door, hurting your hand in the process.");
        }
        else if (textSection == 9) {
          $("#textOutput").text("The closed door appears to made of oak.");
        }
        else if (textSection == 10) {
          $("#textOutput").text("You cannot open the window, it is barred.");
        }
        else if (textSection == 11) {
          $("#textOutput").text("The window is impossible to pull from the wall.");
        }
        else if (textSection == 12) {
          $("#textOutput").text("You punch the window, hurting your hand in the process.");
        }
        else if (textSection == 13) {
          $("#textOutput").text("The window is barred shut, it would be impossible to try and escape through it.");
        }
        else if (textSection == 14) {
          $("#textOutput").text("You are in a damp, dimmly lit room. There is a door on the north side of the room, and a metal window on the south side.");
        }
        else if (textSection == 15) {
          $("#textOutput").text("You are in a damp dimmly lit room. There is a an open door on the north side of the room, and a metal window on the south side.")
        }
        else if (textSection == 16) {
          $("#textOutput").text("The door is already open");
        }
        else if (textSection == 17) {
          $("#textOutput").text("It is an open, oak door.");
        }
        else if (textSection == 18) {
          $("#textOutput").text("You go through the open door, into a large hallways that leads north. Further down the hallway you see a shrouded figure.")
        }
      }
      else if (section == 4) {
        if (textSection == 1) {
          $("#textOutput").text("You sneak up behind the figure and attack it!");
        }
        else if (textSection == 2) {
          $("#textOutput").text("You approach the figure in the hallway who turns its face to reveal a goblin face. The goblin attacks you!");
        }
        else if (textSection == 3) {
          $("#textOutput").text("You are in a hallway that leads to the north, with an open door to the south. The remains of a goblin lay in the middle of the hallway.");
        }
        else if (textSection == 4) {
          $("#textOutput").text("You go down the hallway and come upon a stone staircase. You walk up the steps, and come across a door at the top");
        }
        else if (textSection == 5) {
          $("#textOutput").text("You are in a hallway that leads to the north, with an open door to the south. In front of you is a shrouded figure.")
        }
        else if (textSection == 6) {
        $("#textOutput").text("You loot the goblin, and find a small key.");
        }
        else if (textSection == 7) {
        $("#textOutput").text("There is nothing else of value on the goblin.");
        }
      }
      else if (section == 5) {
        if (textSection == 1) {
          $("#textOutput").text("You unlock and open the door revealing sunlight from outside.");
        }
        else if (textSection == 2) {
          $("#textOutput").text("The door is already open");
        }
        else if (textSection == 3) {
          $("#textOutput").text("You try to open the door, but it is locked.");
        }
        else if (textSection == 4) {
          $("#textOutput").text("You go through the doorway, revealing a bright light and the sounds of people cheering. Who knows what will come next?\nThank you for playing!");
        }
        else if (textSection == 5) {
          $("#textOutput").text("You are at the top of a stone staircase. To the north, there is an open door leading towards outside. Going to the south would lead you down the staircase");
        }
        else if (textSection == 6) {
          $("#textOutput").text("You are at the top of a stone staircase. To the north, there is a closed door. Going to the south would lead you down the staircase.");
        }
        else if (textSection == 7) {
          $("#textOutput").text("You cannot pickup the door.");
        }
        else if (textSection == 8) {
          $("#textOutput").text("Before you is a closed, oak door.");
        }
        else if (textSection == 9) {
          $("#textOutput").text("Before you is an open, oak door.");
        }
        else if (textSection == 10) {
          $("#textOutput").text("You punch the door, hurting your fist slightly, but slightly opening the door.");
        }
        else if (textSection == 11) {
          $("#textOutput").text("You punch the door, hurting your fist again, but the door budges open a little further.");
        }
        else if (textSection == 12) {
          $("#textOutput").text("You punch the door again, your fist hurts now, but the door is almost open...");
        }
        else if (textSection == 13) {
          $("#textOutput").text("You punch the door one final time, pushing it open.");
        }
        else if (textSection == 14) {
          $("#textOutput").text("The door is already open, but you punch it anways. Your fist hurts slightly, but you feel satisfied.");
        }
      }
    }
  }
  //IN PROGRESS
  function adventure(level, section) {
	if(userInput == "restart" && gameStart == true) {
	  console.log(userInput);
      levelTracker = 1;
  	  sectionTracker = 1;
  	  gameStart = false;
  	  $("#healthValue").text("");
      $("#attackValue").text("");
      $("#armorValue").text("");
      $("#name").text("Name");
      $("#class").text("");
      $(".textArea").html("<div id=\"textOutput\">Welcome, type in \"start\" to begin, or \"instructions\" to learn the basic commands</div>");
  	}
    if (userInput == "start" && gameStart != true) {
      gameStart = true;
    }
    else if (userInput == "instructions" && gameStart != true) {
      textOutput(1,1,1);
    }
    else if (userInput == "next" && gameStart != true) {
      textOutput(1,1,2);
    }
    
    if (level == 1 && gameStart == true) {
    
      if (section == 1) {
        textOutput(1,1,3);
      
        if (userInput != "start" && userInput != "") {
          textOutput(1,1,4);
          userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
          $("#name").text(userInput);
          myName = userInput;
          sectionTracker++;
        }
      }
      
      else if (section == 2) {
   
        if (userInput == "barbarian") {
          characterClass("barbarian");
        }
        else if (userInput == "archer") {
          characterClass("archer");
        }
        else if (userInput == "magician") {
          characterClass("magician");    
        }
        if ((userInput == "yes" || userInput == "y") && myClass != "") {
          sectionTracker++;
          textOutput(1,2,2);
        }
        else if ((userInput == "no" || userInput == "n") && myClass != "") {
          myClass = "";
          $("#class").text(myClass);
          textOutput(1,1,4);
        }
        else if (myClass != "") {
          textOutput(1,2,1);
        }
      }
      else if (section == 3) {
        if (userInput == "begin" && secondStart == false) {
          textOutput(1,3,1);
          secondStart = true;
        }
        else if (userInput.includes("open") && (position != "north" && position != "south")) {
          textOutput(0,0,1);
        }
        else if ((userInput.includes("fight") || userInput.includes("attack")) && (position != "north" && position != "south")) {
          textOutput(0,0,2);
        }
        else if (userInput.includes("inspect") && (position != "north" && position != "south")) {
          textOutput(0,0,3);
        }
        else if (userInput.includes("pickup") && (position != "north" && position != "south")) {
          textOutput(0,0,4);
        }
        else if (userInput.includes("east")) {
          textOutput(0,0,7);
          position = "east";
        }
        else if (userInput.includes("west")) {
          textOutput(0,0,8)
          position = "west";
        }
        else if (userInput.includes("north") && position != "north") {
          position = "north";
          textOutput(1,3,2);
        }
        else if (userInput.includes("south") && position != "south") {
          position = "south";
          textOutput(1,3,3);
        }
        else if (userInput.includes("north") && position == "north" && firstDoorOpen == false) {
          textOutput(1,3,4);
        }
        else if (userInput.includes("south") && position == "south") {
          textOutput(1,3,5);
        }
        else if (userInput.includes("open") && position == "north" && firstDoorOpen == false) {
          textOutput(1,3,6);
          firstDoorOpen = true;
          sectionTracker++;
        }
        else if (userInput.includes("pickup") && position == "north") {
          textOutput(1,3,7);
        }
        else if (userInput.includes("fight") && position == "north") {
          textOutput(1,3,8);
          totalHealth -= 1;
          statCheck();
        }
        else if (userInput.includes("inspect") && position == "north" && firstDoorOpen == false) {
          textOutput(1,3,9);
        }
        else if (userInput.includes("open") && position == "south") {
          textOutput(1,3,10);
        }
        else if (userInput.includes("pickup") && position == "south") {
          textOutput(1,3,11);
        }
        else if (userInput.includes("fight") && position == "south") {
          textOutput(1,3,12);
          totalHealth -= 1;
          statCheck();
        }
        else if (userInput.includes("inspect") && position == "south") {
          textOutput(1,3,13);
        }
        else if (userInput.includes("check area") && firstDoorOpen == false) {
          textOutput(1,3,14);
        }
        else if (userInput.includes("check area") && firstDoorOpen == true) {
          textOutput(1,3,15);
        }
        else if (userInput.includes("open") && position == "north" && firstDoorOpen == true) {
          textOutput(1,3,16);
        }
        else if (userInput.includes("inspect") && position == "north" && firstDoorOpen == true) {
          textOutput();
        } 
        else if (userInput.includes("north") && position == "north" && firstDoorOpen == true && goblin == false) {
          textOutput(1,4,3);
          sectionTracker++;
        }
        else if (userInput.includes("north") && position == "north" && firstDoorOpen == true && goblin == true) {
          textOutput(1,3,18);
          sectionTracker++;
        }
      }
      
      else if (section == 4) {
        if ((userInput.includes("fight") || userInput.includes("attack")) && goblin == true) {
          textOutput(1,4,1);
          fight("goblin");
        }
        else if (userInput.includes("north") && goblin == true) {
          textOutput(1,4,2);
          totalHealth -= 1;
          fight("goblin");
          statCheck();
        }
        else if (userInput.includes("check area") && goblin == false) {
          textOutput(1,4,3);
        }
        else if (userInput.includes("check area") && goblin == true) {
          textOutput(1,4,5);
        }
        else if (userInput.includes("north") && goblin == false) {
          textOutput(1,4,4);
          sectionTracker++;
        }
        else if (userInput.includes("open")) {
          textOutput(0,0,1);
        }
        else if (userInput.includes("fight") && goblin == false) {
          textOutput(0,0,2);
        }
        else if (userInput.includes("pickup") && goblin == true) {
          textOutput(0,0,4);
        }
        else if (userInput.includes("east")) {
          textOutput(0,0,7);
        }
        else if (userInput.includes("west")) {
          textOutput(0,0,8);
        }
        else if (userInput.includes("pickup") && goblin == false && hasKey == false) {
          textOutput(1,4,6);
          hasKey = true;
        }
        else if (userInput.includes("pickup") && goblin == false && hasKey == true) {
          textOutput(1,4,7);
        }
        else if (userInput.includes("south")) {
          sectionTracker--;
          position = "";
          textOutput(1,3,15);
        }
      }
      if (section == 5) {
        if (userInput.includes("south")) {
          sectionTracker--;
          position = "";
          textOutput(1,4,3);
        }
        else if (userInput.includes("open") && secondDoorOpen == false && hasKey == true) {
          textOutput(1,5,1);
          secondDoorOpen = true;
        }
        else if (userInput.includes("open") && secondDoorOpen == true) {
          textOutput(1,5,2);
        }
        else if (userInput.includes("open") && secondDoorOpen == false && hasKey == false) {
          textOutput(1,5,3);
        }
        else if (userInput.includes("north") && secondDoorOpen == true) {
          textOutput(1,5,4);
          sectionTracker ++;
        }
        else if (userInput.includes("check area") && secondDoorOpen == true) {
          textOutput(1,5,5);
        }
        else if (userInput.includes("check area") && secondDoorOpen == false) {
          textOutput(1,5,6);
        }
        else if (userInput.includes("east")) {
          textOutput(0,0,7);
        }
        else if (userInput.includes("west")) {
          textOutput(0,0,8);
        }
        else if (userInput.includes("pickup")) {
          textOutput(1,5,7);
        }
        else if (userInput.includes("inspect") && secondDoorOpen == false) {
          textOutput(1,5,8);
        }
        else if (userInput.includes("inspect") && secondDoorOpen == true) {
          textOutupt(1,5,9);
        }
        else if ((userInput.includes("fight") || userInput.includes("attack")) && secondDoorOpen == false) {
          textOutput(1,5,10);
          totalHealth -= 1;
          doorHealth -= 1;
          statCheck();
          if (doorHealth == 2) {
            textOutput(1,5,11);
          } 
          else if (doorHealth == 1) {
            textOutput(1,5,12);
          }
          else if (doorHealth == 0) {
            textOutput(1,5,13);
            secondDoorOpen = true;
          }
        }
        else if ((userInput.includes("fight") || userInput.includes("attack")) && secondDoorOpen == true) {
          textOutput(1,5,14);
          totalHealth -= 1;
        }
      }
    }
    //For future chapters...
    else if (level == 2) {
    	
    }
  }
  
  //Sound Control
  var audioC = document.getElementById("audioController");
  var musicCounter = 0;
  
  audioC.volume = 0.3;
  
  audioC.addEventListener("ended", function() {
	  if (musicCounter != 3) {
		  musicCounter++;
	  }
	  else {
		  musicCounter = 0;
	  }
	  
	  if (musicCounter == 0) {
		  audioC.src = ("music/medieval/wolf.mp3");
	  }
	  else if (musicCounter == 1) {
		  audioC.src = ("music/medieval/fabula.mp3");
	  }
	  else if (musicCounter == 2) {
		  audioC.src = ("music/medieval/tol.mp3");
	  }
	  else if (musicCounter == 3) {
		  audioC.src = ("music/medieval/afraid.mp3");
	  }
	  
	  audioC.load();
	  audioC.play(); 
  });
});