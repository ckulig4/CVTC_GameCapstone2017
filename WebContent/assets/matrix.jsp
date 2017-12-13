<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/matrix.css">
    <title>Matrix Adventure</title>
  </head>
  <body id="wrapper"> 
    <header>
<%@include file="../includes/navigation.jsp" %>  
      <h1>Matrix Text Adventure</h1>
    </header>
    <div class="main" id="blackWindow">
      <div id="story">Enter "start" to start the simulation.</div>
      <small>(type in selection then click enter)<br></small>
      <input type="text" id="answer" data-part="0">
      <button id="matrixButton">Enter</button>
      <script src="js/gameLogic/matrix.js"></script>
    </div>
    <div id="audio">
      <audio controls id="audioController" autoplay="autoplay">
        <source src="music/keephopealive.mp3" type="audio/mpeg">
      </audio>
  	</div>
  	<%@include file="../includes/footer.jsp" %> 
  </body>
</html>


