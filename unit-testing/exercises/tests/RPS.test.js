const findWinner = require('../RPS.js');

describe("Who Won Test", function(){

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = findWinner.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
    });
 
    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
     let output = findWinner.whoWon('paper','scissors');
     expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
     let output = findWinner.whoWon('scissors','rock');
     expect(output).toBe("Player 2 wins!");   
    });

});