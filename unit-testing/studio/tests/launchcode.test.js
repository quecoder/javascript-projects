// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  
  it ("should have a property called organization", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  });
  it ("should have a propert called executiveDirector", function () {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });
  it ("should have  aproperty called percentageCoolEmployees", function (){
    expect(launchcode.percentageCoolEmployees).toEqual(100)
  });
  it ("should have property called programsOffered", function (){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  describe("should have a method, launchOutpu, which", function(){

    it ("should return 'Launch!' for numbers evenly divisible by 2", function (){
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });
    it ("should return 'Code!' for numbers evenly divisible by 3", function (){
      expect(launchcode.launchOutput(3)).toEqual("Code!");
    });
    it ("should return 'Rocks!' for numbers evenly divisible by 5", function (){
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });
    it ("should return 'LaunchCode!' for numbers evenly divisible by 2 and 3", function (){
      expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    });
    it ("should return 'Code Rocks!' for numbers evenly divisible by 3 and 5", function (){
      expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    });
    // change for new condition
    it ("should return 'Launch Rocks! (CRASH!!!!)' for numbers evenly divisable by 2 and 5", function (){
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
    });
    it ("should return 'LaunchCode Rocks! for numbers evenly divisible by 2, 3, and 5", function (){
      expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    });
    it ("numbers not evenly divisible by 2, 3, or 5", function (){
      expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
    });
  });

});