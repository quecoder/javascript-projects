//TODO: Add Your Code Below
window.addEventListener("load", function(){

    // TODO create object for container
    const container = document.getElementById('container');

    // Fetch using tradiontal syntax
//     fetch('<https://handlers.education.launchcode.org/static/astronauts.json>').then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);

//             for (let i = 0; i < data.length; i++) {
//                 let astronaut = data[i];
//                 container.innerHTML += `
//                 <div class="astronaut">
//                     <div class="bio">
//                         <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
//                         <ul>
//                             <li>Hours in space: ${astronaut.hoursInSpace}</li>
//                             <li>Active: ${astronaut.active}</li>
//                             <li>Skills: ${astronaut.skills.join(", ")}</li>
//                         </ul>
//                     </div>
//                     <img class="avatar" src="${astronaut.picture}">
//                 </div>
//                 `;
//             }
//         });
//     })


// ;})

async function fetchAndDisplayAstronauts () {
    let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    let data = await response.json();

    data.sort(function(a,b) {
        return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
    });

    for (let i = 0; i < data.length; i++) {
        let astronaut = data[i];
        container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
        </div>
        `;
    };
}
fetchAndDisplayAstronauts();
});