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
function Inventory_station(){
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
function New_discovery(){
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
function FreeSpace(){
    var freeSpaceText = "<h2>Bonne Voyage Space Advanturer</h2>"
    document.getElementById("property-info").innerHTML = freeSpaceText;
}
// let turn = document.getElementById($id=function getid(start){

// })

