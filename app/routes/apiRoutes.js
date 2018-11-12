// ===============================================================================
// LOAD DATA
// ===============================================================================

const types = require('../data/types');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
  app.get("/api/types", (req, res) => {
    res.json(types);
  });

  app.post("/api/types", (req, res) => {
    const newEntry = req.body;
    const newScores = newEntry.scores;
    
    let matchingType;
    let matchingImage;
    let diffArray = [];

    types.forEach((e) => {
      let diff = 0;

      for (let i = 0; i < newScores.length; i++) {
        
        diff += Math.abs(e.scores[i]  - newScores[i]);
      }
      console.log(`diff = ${diff}`);
      console.log(typeof(diff));
      diffArray.push(diff);
    });
    console.log(Math.min(...diffArray));
    const match = diffArray.indexOf(Math.min(...diffArray));
    console.log(diffArray.indexOf(Math.min(...diffArray)));
    matchingType = types[match].name;
    matchingImage = types[match].photo;
    res.json({status: 'OK', matchingType: matchingType, matchingImage:matchingImage});
  });
};
// "name": "Tammy",
// "photo": "",
// "scores": [
// "1",
// "3",
// "3",
// "2",
// "2",
// "4",
// "5",
// "1",
// "3",
// "4"
// ]