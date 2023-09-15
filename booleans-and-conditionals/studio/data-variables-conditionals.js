// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

/*if (astronautCount <= 7) {
   console.log("Astronaut Count: Sucess");

} else if (astronautCount > 7) {
    console.log("Not Prepared To Launch.");
}
// add logic below to verify all astronauts are ready

if (astronautStatus === "ready") {
    console.log("Astronaut Status: Ready");

}else if(astronautStatus != "ready") {
    console.log("Not Prepared To Launch.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= 850000) {
    console.log("Total Mass: Cleared");

} else if (totalMassKg > 850000) {
    console.log("Not Prepared To Launch.")
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelcius > minimumFuelTemp && fuelTempCelcius < maximumFuelTemp) {
    console.log("Fuel Temperature: Check");

} else if (fuelTempCelcius < minimumFuelTemp || fuelTempCelcius > maximumFuelTemp) {
    console.log("Temperature unstable.");
}


// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel Level: Full");

} else if (fuelLevel != "100%") {
    console.log("Not enough fuel.");
}


// add logic below to verify the weather status is clear

if(weatherStatus === "clear") {
    console.log("Clear Skies");

} else if(weatherStatus != "clear") {
    console.log("Unknown Weather Events.");
}*/

// Verify shuttle launch can proceed based on above conditions

console.log("Date: " + date);
console.log("Time: " + time);
console.log("Astronaut Count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg);
console.log("Fuel Mass:" + fuelMassKg);
console.log("Shuttle Mass: " + shuttleMassKg);
console.log("Total Mass: " + totalMassKg);
console.log("Fuel Temperature: " + fuelTempCelcius);
console.log("Weather Status: " + weatherStatus);
console.log("Have a safe trip astronauts!");

