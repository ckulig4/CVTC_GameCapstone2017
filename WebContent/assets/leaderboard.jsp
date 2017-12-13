<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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
	                <td>${userName} Tony</td>
					<td>${score} 12 </td>
	            </tr>
	            <tr>
	            	<td>${userName} Cole</td>
					<td>${score} 9</td>
	            </tr>
	            <tr>
	            	<td>${userName} Kyle</td>
					<td>${score} 13</td>
	            </tr>
	            <tr>
	            	<td>${userName} Mike</td>
					<td>${score} 8</td>
	            </tr>
	    	</tbody>
    	</table>
    </div>
  	<%@include file="../includes/footer.jsp" %> 
  </body>
</html>