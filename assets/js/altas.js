let gameBoardInfo = new Request ("http://localhost/planetx/mars-attack/assets/data/ismailBoard.json");
fetch(gameBoardInfo)
    .then(function(response){
    return response.json();
}).then(function(obj){
    console.log(obj);

}).catch(function (error){
    console.error('Something went wrong with retrieving the armies!');
    console.error(error);

});

//Messages functions=>

function Start(){
    var startText = "<h2>Collect O2 200</h2>"
    document.getElementById("property-info").innerHTML = startText;
}

function Mercure(){
    var mercureText = "<h4>Welcome to Mercure, No atmosphere but plenty of cheap mines!</h4>"
    document.getElementById("property-info").innerHTML = mercureText;
}
function Inventory_station_0(){
    var inventoryText = "<h4>You have got a new inventory</h4>"
    document.getElementById("property-info").innerHTML = inventoryText;
}
function Venus(){
    var venusText = "<h4>Welcome to Venus, very thick atmosphere!</h4>"
    document.getElementById("property-info").innerHTML = venusText;
}
function Meteor_damage(){
    var meteorText = "<h4>You have lost your 200 of your Oxyjen containers!</h4>"
    document.getElementById("property-info").innerHTML = meteorText;
}
function Earth_station(){
    var earthStText = "<h4>Control all the stations to kneel the Empire!</h4>"
    document.getElementById("property-info").innerHTML = earthStText;
}
function Earth(){
    var earthText = "<h4>This was once your home!<br>Think agin if you have gone too far!<br>Never too late to turn back</h4>"
    document.getElementById("property-info").innerHTML = earthText;
}
function New_discovery_0(){
    var discoveryText = "<h4>Congratulation, You have made a new discovery!<br> Beware not all the discoveries are good!</h4>"
    document.getElementById("property-info").innerHTML = discoveryText;
}
function Moon(){
    var moonText = "<h4>You are a bit late to land on moon for the first time <br> but never too late to attack!</h4>"
    document.getElementById("property-info").innerHTML = moonText;
}
function Mars(){
    var marsText = "<h4>On Mars act like a martian! Attack!</h4>"
    document.getElementById("property-info").innerHTML = marsText;
}
function Blackhole(){
    var blackholeText = "<h4>Roll all your engines, make sure they both in full speed!</h4>"
    document.getElementById("property-info").innerHTML = blackholeText;
}
function Jupiter(){
    var jupiterText = "<h4>Bevare of the gravity! Jupiter has you now!</h4>"
    document.getElementById("property-info").innerHTML = jupiterText;
}
function Interstellar_network(){
    var networkText = "<h4>Control all the communication..  So you got the power!</h4>"
    document.getElementById("property-info").innerHTML = networkText;
}
function Io(){
    var ioText = "<h4>To attack, you better control all the moons of Jupiter</h4>"
    document.getElementById("property-info").innerHTML = ioText;
}
function Europa(){
    var europaText = "<h4>This is a strategic position, never let it in the hands of Attackers!</h4>"
    document.getElementById("property-info").innerHTML = europaText;
}
function Jupiter_station(){
    var jupiterStText = "<h4>Stations are important keep controlling them all!<br><tr><td>Purchase Value: O2 200</td><br><td>Mortgage Value: O2 100</td><br>RENTS<br><td>1 Station: O2 25</td><br><td>2 Station: O2 50</td><br><td>3 Station: O2 100</td><br><td>4 Station: O2 200</td></tr></h4>"
    document.getElementById("property-info").innerHTML = jupiterStText;
}
function Callisto(){
    var callistoText = "<h4>Secures all the moons of Jupiter<br>The best defence is to Attack!</h4>"
    document.getElementById("property-info").innerHTML = callistoText;
}
function Inventory_station_1(){
    var inventoryText = "<h4>INVENTORY STATION<br>Choose your tools & your friends visely<br>before you hit the SPACE!</h4>"
    document.getElementById("property-info").innerHTML = inventoryText;
}
function Ganymede(){
    var ganymedeText = "<h4>Space is a dangerous place!<br>Have an eye on your back!</h4>"
    document.getElementById("property-info").innerHTML = ganymedeText;
}
function Enceladus(){
    var enceladusText = "<h4>Infinite possibilities as a result of infinite Attacks!<br>Survive to collect the bounty.</h4>"
    document.getElementById("property-info").innerHTML = enceladusText;
}
function FreeSpace(){
    var freeSpaceText = "<h2>Bonne Voyage Space Advanturer</h2>"
    document.getElementById("property-info").innerHTML = freeSpaceText;
}
function Titan(){
    var titanText = "<h4>It said once Gods had lived here.<br>They were legends and so you will!</h4>"
    document.getElementById("property-info").innerHTML = titanText;
}
function New_discovery_1(){
    var discoveryText = "<h4>New Discoveries changed the fate of the humankind.<br>What about for Martians!</h4>"
    document.getElementById("property-info").innerHTML = discoveryText;
}
function Dione(){
    var dioneText = "<h4>Gather all you have and gather more!! Just Attack</h4>"
    document.getElementById("property-info").innerHTML = dioneText;
}
function Saturn(){
    var saturnText = "<h4>This might be the best place to propose a marriage with a Martian<br>on a day when there is no Attack!</h4>"
    document.getElementById("property-info").innerHTML = saturnText;
}
function Saturn_station(){
    var saturnStText = "<h4>Build up your own Empire of Stations<br>Think the multiplying income you could get.</h4>"
    document.getElementById("property-info").innerHTML = saturnStText;
}
function Ariel(){
    var arielText = "<h4>War is a two sided knife!<br>Do not think you will get away withaout any damage!</h4>"
    document.getElementById("property-info").innerHTML = arielText;
}
function Oberon(){
    var oberonText = "<h4>If you konw where you are going,<br>Go as far as you can...</h4>"
    document.getElementById("property-info").innerHTML = oberonText;
}
function Interstellar_mining(){
    var miningText = "<h4>Mining might not kill but sure it will let you go on.</h4>"
    document.getElementById("property-info").innerHTML = miningText;
}
function Uranus(){
    var uranusText = "<h4>After a nice sunhine, It is like you have just reborn...<br> Almost got in the blackhole</h4>"
    document.getElementById("property-info").innerHTML = uranusText;
}
function Blackhole(){
    var blackholeText = "<h4>They say Blackholes are timewraps back in time!<br>It might take some time though!</h4>"
    document.getElementById("property-info").innerHTML = blackholeText;
}
function Triton(){
    var tritonText = "<h4>Life we know did probably come from Mars!<br>And it might end here..</h4>"
    document.getElementById("property-info").innerHTML = tritonText;
}
function Neptune(){
    var neptuneText = "<h4>Neptunians has never left their planets before<br>There must be a good reason for that!</h4>"
    document.getElementById("property-info").innerHTML = neptuneText;
}
function Inventory_station_2(){
    var stationText = "<h4>2 things, Make sure your Oxyjen is full<br>& take good care of your ship!</h4>"
    document.getElementById("property-info").innerHTML = stationText;
}
function Pluto(){
    var plutoText = "<h4>Have a sight back home from where you are now!<br>You may never have a second chance!</h4>"
    document.getElementById("property-info").innerHTML = plutoText;
}
function Pluto_station(){
    var stationText = "<h4>Stop and think again... Go deep in to your mind...<br>and find out where you have made the mistake?</h4>"
    document.getElementById("property-info").innerHTML = stationText;
}
function New_discovery_2(){
    var discoveryText = "<h4>We advance non-stop! Invent, and create<br>Just do not invent a weapon for a Martian.</h4>"
    document.getElementById("property-info").innerHTML = discoveryText;
}
function Alpha_centauri_a(){
    var aText = "<h4>You are so far from home.<br>It is expensive to live here, not?</h4>"
    document.getElementById("property-info").innerHTML = aText;
}
function Anomaly_damage(){
    var adamageText = "<h4>This space is strange<br>You are welcomed by Alien Pirates</h4>"
    document.getElementById("property-info").innerHTML = adamageText;
}
function Alpha_centauri_b(){
    var bText = "<h4>You are expanding the borders of Mars knowledge<br>Marsians... Once they know they will Attack</h4>"
    document.getElementById("property-info").innerHTML = bText;
}
// let turn = document.getElementById($id=function getid(start){

// })

