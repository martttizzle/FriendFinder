
const preFriends = require("../Data/friends.js");

module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(preFriends);

  });

  app.post("/api/friends", function (req, res) {
    preFriends.push(req.body);
    userInput(req.body);

  })
};


  function userInput(userIpt) {
    var userAns = [];
    for (let i = 0; i < 1; i++) {
      var userAns = [];
      userAns.push(userIpt.q1);
      userAns.push(userIpt.q2);
      userAns.push(userIpt.q3);
      userAns.push(userIpt.q4);
      userAns.push(userIpt.q5);
      userAns.push(userIpt.q6);
      userAns.push(userIpt.q7);
      userAns.push(userIpt.q8);
      userAns.push(userIpt.q9);
      userAns.push(userIpt.q10);
      frdChooser(userAns);
    }
  }
var a = preFriends;
function frdChooser(userOneTen) {
 

 console.log(a[0].q1);
userOneTen.forEach(function(results){
  console.log(results);
   
}

);

  
}

   


