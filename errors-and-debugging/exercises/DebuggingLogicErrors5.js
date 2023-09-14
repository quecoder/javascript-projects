// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = true;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   
} else if (fuelLevel <20000) {
   console.log('WARNING: Insufficient fuel!');
   
}


if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   
} else {
   console.log('WARNING: Crew or computer not ready!');
   
}

// My own calculations
if (fuelLevel >= 20000 && crewStatus === true && computerStatus === "green") {
   console.log("Prepared to launch.");
} else {
   console.log("Not prepapred to laucnh.");
}