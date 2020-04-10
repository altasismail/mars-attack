fetch("http://localhost/planetx/mars-attack/assets/data/ismailBoard.json")
    .then(function(response){
    return response.json();
}).then(function(obj){
    console.log(obj);

}).catch(function (error){
    console.error('Something went wrong with retrieving the armies!');
    console.error(error);

});

function Start(){
    
}
function FreeSpace(){
    alert("Bonne Voyage Space Traveler!")
}
// let turn = document.getElementById($id=function getid(start){

// })

