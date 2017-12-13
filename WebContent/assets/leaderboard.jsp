<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/leaderboard.css">
    <title>Leaderboards</title>
  </head>
  <body id="wrapper"> 
    <header>
<%@include file="../includes/navigation.jsp" %>  
      <h1>Leaderboards</h1>
    </header>
    <div class="main">
	    <c:forEach items="${gameLeaderboards}">
			<table>
	    	    <thead>
		       		<tr>
		        		<th colspan="1" id="gameHeader">${Game} GameTitle</th>
		        	</tr>
		        </thead>
	        	<tr class="gameVariables">
	            	<th>Username</th>
	            	<th>Score</th>
	        	</tr>        
	        	<c:forEach items="${users}">
		            <tr>
		                <td class="text-center">${userName}username value</td>
						<td class="text-center">${score}score value</td>
		            </tr>
		    	</c:forEach>
	    	</table>
	    </c:forEach>
    </div>
  	<footer>
      <p>
        <small>
          Copyright &copy; 2017 ITSD GameCaptone 2017<br>
        </small>        
      </p> 
    </footer>
  </body>
</html>