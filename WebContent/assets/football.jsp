<html>
  <head>
  	<link rel="stylesheet" type="text/css" href="css/main.css">
   	<link rel="stylesheet" type="text/css" href="css/txiong55.css">
   	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
  	<script type="text/javascript" src="js/football.js"></script>
  </head>
  <body>
    <%@include file="../includes/navigation.jsp" %>
    <div class="gameHead">
      <h2 id="footBallHead">Super Bowl</h2>
    </div>
    <div class="gameContainer">
        <span id="name"></span><span id="class"></span>
        <div class="textInput">
          <input class="inputBox" type="text" name="input" placeholder="Enter your text here..." autocomplete="off">
          <br>
        </div>
        <div class="textArea"> 
          <button class="startButton">Start</button>
        </div>
      </div>
      <%@include file="../includes/footer.jsp" %> 
  </body>
</html>