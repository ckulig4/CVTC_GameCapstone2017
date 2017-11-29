$(document).ready(function(){  

  var userInput = "";
  var gameStart = false;
  var quarter = 1;
  var quaterTracker = 1;
  var sectionTracker = 1;


    function output(quater, groupText) {
    //start of game
 if (quater == 1) {
        if (groupText == 1) {
          $("#output").text("Welcome! This is a Football careet, you'll be able to choose teams, discuss your pay and fight your way to the top! First off what position are you? QB, RB, WR.");
        }
         else if (groupText == 2) {
          $("#output").text("You have been asked to join 3 teams. 1.Minnesota Vikings, 2.Green Bay Packers, or the 3.Chicago Bears! type in vikings, bears, or packers to pick your team to join!");
        }
     // condition hard
      else if (groupText == 3) {
          $("#output").text("You arrived and your teammates all seem super friendly and you're having a fantastic time, only a week till your first game! What will you do? 1. Condition hard, you'll need the training                  2. Relax, you need the time to resty why not just take the week off?         3. Get to know your team, you'll need to know them for the games.");
        }
          else if (groupText == 4) {
          $("#output").text("You trained every day for a week till you puked not its time fo the game! Your coach has noticed how in shpae you've gotten and has already guaranteed you a starting position in your first start! Type go to continue!");
        }
        else if (groupText == 5) {
          $("#output").text("You Started and your coach noticed you were extremely tired and slow from your nonstop conditioning, he immediately took you out and said he must've been wrong about picking you he tought you were a much better athlete, he payed to cancel the contract!");
        }
     // relax
      else if (groupText == 6) {
          $("#output").text("Your coach has notice that you've gotten a bit out of shape, he said you will still make your debut in the first game but not as a starter! type starter to continue");
        }
        else if (groupText == 7) {
          $("#output").text("The coach put in in with 10 minutes remaining, down 10 - 7 hoping you could be the game changer, however without any training you were not prepared for this advanced game play you failed the team and the final score ended 17-7 causing the coach to pay to cancel your contract!");
        }
     // get to know your team
     else if (groupText == 8) {
             $('#output').text("Your coach has noticed that you've been putting in work with the rest of the team and getting to know them all, he's notice that you've gotten along with everyone and has personally guaranteed you a spot in the first game! type work to continue");
         } 
         else if (groupText == 9) {
             $('#output').text("The coach was impressed with your skills he said you rescued the team in their near defeat, barely sliding by one of the best teams in the league and winning 17 - 16! type in winning to continue");
         }
         else if (groupText == 10) {
             $('#output').text("You started the next game and continued to impress, you even scored twice! An incredible proformace by you! You ended up winning the game for your team 20 - 0 and scouts from a few top teams have been checking you out! type offers to continue");
         }
         else if (groupText == 11) {
             $('#output').text("You got trading offers from 1.Seattle Seahawks and the 2.New York Giants or you can stay with your current team! Type in seahawks, giants, or current!");
         }
     
     // offers
     else if (groupText == 12) {
             $('#output').text("You went to the Seattle Seahawks and have practicing all week for their next game against the 49ers! Type beat to continue");
         } 
         else if (groupText == 13) {
             $('#output').text("The coach started you to try you instead of on e of their usual starters. The game went terribly the play was sloppy and the final score was 30-7 loss on your part! The coach and general public are actually blaming you for the loss. It is clear you weren't ready for this top trade!");
         } 
     // new york
     else if (groupText == 14) {
             $('#output').text("You went to The New York Giants and have been practicing all week, you are ready to play your next game! type play to continue");
         }
         else if (groupText == 15) {
             $('#output').text("You started and did great! The coach was even impressed with your plays. You have earned the starting spot and the coach had decided yo go ahead and try you out in a playoff game! type playoffs to continue");
         }
         else if (groupText == 16) {
             $('#output').text("Your first playoff game went horrible and your tore you ALC! You retired after having surgery!");
         }
     // stayed with team
     else if (groupText == 17) {
             $('#output').text("Your coach is glad you chose to stay with the team! You have played very well all year and have made it to the super bowl! type team player to continue");
         } else if (groupText == 18) {
             $('#output').text("You are down by a field goal and its fourth down! There is only 25 seconds left. You can kick a field goal to tie and go into overtime or you decide to go for the win! What do you do? 1.Pass 2.Kick");
         }
     
     // pass
     else if (groupText == 19) {
             $('#output').text("You decided to pass! Annnnnnd It paid off! TOUCHDOWN! You've won the game! You are a Super Bowl Champs!");
         }
     
     // kick
     else if (groupText == 20) {
             $('#output').text("You decided to kick! Annnnnnd it's wide right! The opponents got the ball back and decided to kneel the ball and the time clock expires! You Lost! Better luck next year! ");
         }
     }
    }
 


  
    function footballGame(quater) {
    if (userInput == "start" && gameStart != true) {
      gameStart = true;
    }
    
    if (quater == 1 && gameStart == true) {
    
        output(1,1);
          
        if ((userInput == "qb" || userInput == "QB" || userInput == "wr" || userInput == "WR" || userInput == "RB" || userInput == "rb") && userInput != "") {
            output(1,2);
        } else if (userInput == "vikings" || userInput == "bears" || userInput == "packers") {
            output(1,3);
            
        } else if (userInput == "1") {
            output(1,4);
        } else if (userInput == "go") {
            output(1,5);
        }
        else if (userInput == "2") {
            output(1,6);
        } else if(userInput == "starter") {
            output(1,7);
        } else if(userInput == "3") {
            output(1,8);
        } else if (userInput == "work") {
            output(1,9);
        } else if (userInput == "winning") {
            output(1,10);
        } else if (userInput == "offers") {
            output(1,11);
        } else if (userInput == "seahawks") {
            output(1,12);
        } else if (userInput == "beat") {
            output(1,13);
        } else if (userInput == "giants") {
            output(1,14)
        } else if (userInput == "play") {
            output(1,15)
        } else if (userInput == "playoffs") {
            output(1,16);
        } else if (userInput == "current") {
            output(1,17);
        } else if (userInput == "team player") {
            output(1,18);
        } else if (userInput == "pass" || userInput == "Pass") {
            output(1,19);
        } else if (userInput == "kick" || userInput == "Kick") {
            output(1,20);
        }
    }
    }
    
    
  $(".approval").hide().fadeIn(1500);

  $(".startButton").click(function() {
    $(".startButton").fadeOut(1500);
    setTimeout(function() {
      $(".textArea").html("<div id=\"output\">To begin type in \"start\"!</div>");
      
      $(".textArea").hide().fadeIn(1500);
      $(".textInput").hide().fadeIn(1500);
    }, 1000);
  });

  $(".textInput").on('keyup', function (e) {
      if (e.keyCode == 13) {
        userInput = $(".inputBox").val().toLowerCase();
        $(".textArea").fadeOut(1000);
        setTimeout(function() {
          footballGame(quaterTracker, sectionTracker);
        }, 1000);
        $(".textArea").fadeIn(1000);
        $(".inputBox").val("");
      }
  });
    
    
    
});