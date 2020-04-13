console.log("JS Aydin");

// For Players List in Admin's Account by using API of Database
function aydnAllPlayersList() {
    //Debug
    // console.log("For Liste OK");
    let playersList = document.querySelector(".aydnAllPlayersList");
    let listAllPlayers="";
    fetch("php/controller/apiFullInfoPlayers.php").then(function(response){
        // Debug
        // console.log(response.json());
        return response.json();
    }).then(function(list){
        // Debug
        // console.log(list);
        let counter = 1;
        let tabForList = `
            <tr class="aydnTitleColones">
                <th class="aydnColoneId">Id</th>
                <th class="aydnColoneNo">No</th>
                <th class="aydnColoneName">Name</th>
                <th class="aydnColoneSurname">Surname</th>
                <th class="aydnColoneEmail">Email</th>
                <th class="aydnColonePassword">Password</th>
            </tr>`;
        list.forEach(items => {
            listAllPlayers += `
            <tr class="aydnOnePlayerInfos">
                <td class="aydnPlayerId">${items.id}</td>
                <td class="aydnPlayerNo">${counter}</td>
                <td class="aydnPlayerName">${items.name}</td>
                <td class="aydnPlayerSurname">${items.surname}</td>
                <td class="aydnPlayerEmail">${items.email}</td>
                <td class="aydnPlayerPassword">${items.password}</td>
            </tr>
            `  
            counter++;
            let liste = playersList.innerHTML = tabForList + listAllPlayers;
            return liste;
        });
    });
}
