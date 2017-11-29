<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/medieval.css">
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/medieval.js"></script>
  </head>
  <body>
  	<%@include file="../includes/navigation.jsp" %>
    <div class="gameHead">
      <h2 id="medievalHead">Application Name</h2>
    </div>
    <div class="gameContainer">
      <div id="medievalContainer">
        <div class="stats">
          <span id="name">Name</span><span id="class"></span>
          <ul class="statsList">
            <li>Health: <span id="healthValue"></span></li>
            <li>Attack: <span id="attackValue"></span></li>
            <li>Armor: <span id="armorValue"></span></li>
          </ul>
        </div>
        <div id="levelUp"></div>
        <div class="user">
          <span id="username">Username</span>
        </div>
        <div class="textInput">
          <input class="inputBox" type="text" name="input" placeholder="Enter your text here..." autocomplete="off">
          <br>
        </div>
        <div class="textArea">
          <button class="startButton">Start</button>
        </div>
      </div>
    </div>
  </body>
</html>