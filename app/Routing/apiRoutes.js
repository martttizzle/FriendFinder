
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

var userAns = [];
var preFrdOne = [];
var difference = [];
var results = []; 

function userInput(userIpt) {
  for (let i = 0; i < 1; i++) {
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
  }
  frdChooser();
}
var a = preFriends;
function frdChooser() {
  for (let i = 0; i < 1; i++) {
    preFrdOne.push(a[i].q1);
    preFrdOne.push(a[i].q2);
    preFrdOne.push(a[i].q3);
    preFrdOne.push(a[i].q4);
    preFrdOne.push(a[i].q5);
    preFrdOne.push(a[i].q6);
    preFrdOne.push(a[i].q7);
    preFrdOne.push(a[i].q8);
    preFrdOne.push(a[i].q9);
    preFrdOne.push(a[i].q10); 
  }
  totalDiff();
}

function totalDiff() {
for (let x = 0; x < userAns.length; x++) {
var num = userAns[x] - preFrdOne[x]
  difference.push(Math.abs(num));
}
adder(difference);
}

function adder(difference) {
var num = 0;

for(var t = 0; t < difference.length; t++) {
    num = num + difference[t];
}
  results.push(num) ;
  console.log(results);
}














