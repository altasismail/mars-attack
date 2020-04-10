console.log("JS Aydin");


// var butonLogin = document.querySelector(".active");

// // Debug
// console.log(butonLogin);



// butonLogin.addEventListener("click",function(event){
//     butonLogin.preventDefault();
//     var email = document.getElementsByClassName("aydnLoginEmail").value;
//     var pass = document.getElementsByClassName("aydnLoginPwd").value;
//     const buton = document.getElementById("aydnLoginButton");

//     buton.addEventListener("click", function(btn) {
//             buton.preventDefault();
        
        
//         fetch("php/controller/apiFullInfor.php").then(function(response){
//             return response.json();
//         }).then(function(getEmail){
//             for(var i=0; i<getEmail.length; i++){
//                 if(getEmail[i].email === email) {
//                     if(getEmail[i].password === pass) {
//                         window.location="index.php";
//                     } else {
//                         document.write("Your password is wrong try again !!!");
//                     }
//                 } else {
//                     document.write("Your email is not matched !!!");
//                 }
//             }
//         });
//     });
// });

