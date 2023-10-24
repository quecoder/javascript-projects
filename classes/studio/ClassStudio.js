//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
    }
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(10 * sum / this.scores.length) / 10;
    }
    status() {
        let avg = this.average()
        if (avg >= 90) {
            return 'Accepted';
        } else if (avg >= 80) {
            return 'Reserve';
        } else if (avg >= 70) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }
}

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
let bubba = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let glad = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

let candidates = [bubba, merry, glad];
for (let j = 0; j < candidates.length; j++) {
    console.log(`\n${candidates[j].name} earned an avergae test score of ${candidates[j].average()}% and has an average of ${candidates[j].average()}% and a status of ${candidates[j].status()}.`);
}
    

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let reserveCount = 0;
while (glad.status() !== 'Reserve') {
    glad.addScore(100);
    reserveCount ++;
}
console.log(glad.scores);
console.log(`\nIt took ${reserveCount} perfect scores to get Glad Gator up to Reserve Status!`)