<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Space Caravan</title>
        <link rel="stylesheet" href="css/main.css"/>
        <link rel="stylesheet" href="css/spaceCaravan.css"/>
    </head>
    <%@include file="../includes/navigation.jsp" %>
    <body>
        <div id="spaceContent">
            <h2 id="pageHeader">Space Caravan</h2>
            <div id="home"></div>
            <div id="progress-area">
                <h2 id="background"><img id="stars" src="images/spaceBackground.png" /></h2>
                <img id="ship" src="images/spaceShip.png" />
            </div>
            <div id="controlPanel">
                <button id="start">Start</button>
                <button id="pause">Pause</button>
                <button id="resume">Resume</button>
                <button id="restart">Restart</button>
            </div>
            <div id="dashboard">
                <div id="statBoard">
                    <h2 class="sectionHeads">Information Dashboard</h2>
                    <div id="stats-area">
                        <div class="stat">Day <span id="stat-day" class="stat-value"></span></div>
                        <div class="stat">Distance <span id="stat-distance" class="stat-value"></span></div>
                        <div class="stat">Crew <span id="stat-crew" class="stat-value"></span></div>
                        <div class="stat">Fuel <span id="stat-fuel" class="stat-value"></span></div>
                        <div class="stat">Food <span id="stat-food" class="stat-value"></span></div>
                        <div class="stat">Money <span id="stat-money" class="stat-value"></span></div>
                        <div class="stat">Plasma Torpedos <span id="stat-firepower" class="stat-value"></span></div>
                        <div class="stat">Weight <span id="stat-weight" class="stat-value"></span><span id="stat-capacity" class="stat- value"></span></div>
                    </div>
                </div>
                <div id="updateBoard">
                    <h2 class="sectionHeads">Daily Event Log</h2>
                    <div class="updates-area" id="updates-area"></div>
                </div>
                <div id="activityBoard">
                    <h2 class="sectionHeads">Activity Notification</h2>
                    <div id="shop" class="hidden">
                        <div id="prods"></div>
                        <button>End Trading</button>
                    </div>
                    <div id="attack" class="hidden">
                        <div id="attack-description"></div>
                        <button id="fight">Fight</button>
                        <button id="runaway">Run away</button>
                    </div>
                    <div id="event"></div>
                </div>
            </div>
            <script src="js/SpaceCaravan/Event.js"></script>
            <script src="js/SpaceCaravan/Caravan.js"></script>
            <script src="js/SpaceCaravan/UI.js"></script>
            <script src="js/SpaceCaravan/Game.js"></script>
        </div>
      	<%@include file="../includes/footer.jsp" %> 
    </body>
</html>
