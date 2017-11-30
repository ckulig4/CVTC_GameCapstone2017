<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/matrix.css">
    <title>Matrix Adventure</title>
  </head>
<%@include file="../includes/navigation.jsp" %>
  <body id="wrapper">
    <div id="sendRight">
      <audio controls>
        <source src="music/keephopealive.mp3" type="audio/mpeg">
        Your browser does not support the audio feature.
      </audio>
  </div>  
    <header>
      <h1>Matrix Text Adventure</h1>
    </header>
    <div class="main" id="blackWindow">
      <div id="story">Enter "start" to start the simulation.</div>
      <small>(type in selection then click enter)<br></small>
      <input type="text" id="answer" data-part="0"> <button id="button">Enter</button>
      <script src="js/matrix.js"></script>
    </div>
    <footer>
      <p>
        <small>
          Copyright &copy; 2017 Cole Kulig<br>
          <a href="mailto:ckulig4@student.cvtc.edu">ckulig4@student.cvtc.edu</a>
        </small>        
      </p> 
    </footer>
  </body>
</html>


