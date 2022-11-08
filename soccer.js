(function(){

const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 *  @param {string} result 
 * @returns {number} point value
 */


 const orderResults = (teamName,results) => {
    //console.log(team);
    let resultsArray = results.split(""); //removed window. before resultsArray
    //console.log(teamName, resultsArray)
    var scoreRunningTotal = 0
    const getPointsFromResult = (arrayInput) => {
      arrayInput.forEach((input)=>{
        var score = RESULT_VALUES[input];
        scoreRunningTotal += RESULT_VALUES[input];
        console.log("Team:", teamName, "| Result:", input, " Score: ", score, " Running total",scoreRunningTotal);
      }); 
    };
    getPointsFromResult(resultsArray);
    var teamResults = {
        team : teamName ,
        score : scoreRunningTotal
      };
    console.log(teamResults)
}
orderResults("Sounders","wwdlw")




// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

const getTotalPoints = (results) => {
  resultsArrayTwo = results.split("");
  let scoreRunningTotal = 0
  const getPointsFromResultTwo = (arrayInputTwo) => {
 
    arrayInputTwo.forEach((input)=>{
      var score = RESULT_VALUES[input];
      scoreRunningTotal += RESULT_VALUES[input];
      //console.log("Result:", input, " Score: ", score, " Running total",scoreRunningTotalTwo);
    })
    }
  getPointsFromResultTwo(resultsArrayTwo)
  return(scoreRunningTotal)
};

// Check getTotalPoints

console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"


const orderTeams = (...teamResults)=>{
  teamResults.forEach(teamResult=>{
    var eachTeam = {
      name : teamResult.name,
      results : teamResult.results,
    }
    var teamPoints = getTotalPoints(eachTeam.results)
    console.log(eachTeam.name, teamPoints)
  })
};

// Check orderTeams
orderTeams({name: 'Sounders', results: 'wwdl'},
            {name: 'Galaxy', results: 'wlld' })
//);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4


})();