console.log("JS Aydin");


// var buttonSignin = document.getElementById('buttonSignin');
var buttonSignin = document.querySelector("#aydnLoginButton");

buttonSignin.addEventListener("click",function getApiInfos(){
    // Debug
    // console.log("Click OK");
    fetch("../../php/controller/apiFullInfo.php").then(function(response){
        console.log(response.json());
    });
});


