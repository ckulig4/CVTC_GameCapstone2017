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
		<table>
	 		<thead>
		     	<tr class="gameVariables">
	            	<th>Username</th>
	            	<th>Score</th>
	        	</tr> 
	       	</thead>
        	<tbody>       
	            <tr>
	                <td>${userName} A</td>
					<td>${score} 1 </td>
	            </tr>
	            <tr>
	            	<td>${userName} B </td>
					<td>${score} 2</td>
	            </tr>
	            <tr>
	            	<td>${userName} C</td>
					<td>${score} 3</td>
	            </tr>
	    	</tbody>
    	</table>
    </div>
  	<%@include file="../includes/footer.jsp" %> 
  </body>
</html>