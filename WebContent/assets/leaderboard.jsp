<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/ajaxIncluder.js"></script>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/leaderboard.css">
    <title>Leaderboards</title>
  </head>
  <body id="wrapper"> 
    <header>
<%@include file="../includes/navigation.jsp" %>  
      <h1>Leaderboards</h1>
    </header>
    <button onclick="showSuperbowl()">Superbowl Leaderboard</button>
    <button onclick="showMedieval()">Medieval Leaderboard</button>
    <button onclick="showSpace()">Space Leaderboard</button>
    <button onclick="showMatrix()">Matrix Leaderboard</button>
    <div id="main">
    	<!--<c:choose>
    		<c:when test="a == b">
    		<%@include file="../includes/jstl/footballLeaderboard.jsp"%>
    		</c:when>
    		<c:when test="b == c">
    		<%@include file="../includes/jstl/matrixLeaderboard.jsp"%>
    		</c:when>
    		<c:when test="c == d">
    		<%@include file="../includes/jstl/medievalLeaderboard.jsp"%>
    		</c:when>
    		<c:otherwise>
    		<%@include file="../includes/jstl/spaceLeaderboard.jsp"%>
    		</c:otherwise>
    	</c:choose>-->
    </div>
  	<%@include file="../includes/footer.jsp" %> 
  </body>
</html>