const preFriends = require("../Data/friends.js");

module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(preFriends);
     
  });

  app.post("/api/friends", function (req, res) {
   
 userInput(req.body);
 
var userAns = [];
var difference = [];
var preFrdOne = [];
var preFrdTwo = [];
var preFrdThree = [];
var preFrdFour = [];
var results = [];
var a = preFriends;
var ordNum = 0

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
  frdChooser(ordNum);
}
//var q2 = "q2";//Works a[n][q2];
function frdChooser(n) {
  preFrdOne.push(a[n].q1);
  preFrdOne.push(a[n].q2);
  preFrdOne.push(a[n].q3);
  preFrdOne.push(a[n].q4);
  preFrdOne.push(a[n].q5);
  preFrdOne.push(a[n].q6);
  preFrdOne.push(a[n].q7);
  preFrdOne.push(a[n].q8);
  preFrdOne.push(a[n].q9);
  preFrdOne.push(a[n].q10);
  n++;

  preFrdTwo.push(a[1].q1);
  preFrdTwo.push(a[1].q2);
  preFrdTwo.push(a[1].q3);
  preFrdTwo.push(a[1].q4);
  preFrdTwo.push(a[1].q5);
  preFrdTwo.push(a[1].q6);
  preFrdTwo.push(a[1].q7);
  preFrdTwo.push(a[1].q8);
  preFrdTwo.push(a[1].q9);
  preFrdTwo.push(a[1].q10);
  n++;
 

  preFrdThree.push(a[2].q1);
  preFrdThree.push(a[2].q2);
  preFrdThree.push(a[2].q3);
  preFrdThree.push(a[2].q4);
  preFrdThree.push(a[2].q5);
  preFrdThree.push(a[2].q6);
  preFrdThree.push(a[2].q7);
  preFrdThree.push(a[2].q8);
  preFrdThree.push(a[2].q9);
  preFrdThree.push(a[2].q10);
  n++;
 

  preFrdFour.push(a[3].q1);
  preFrdFour.push(a[3].q2);
  preFrdFour.push(a[3].q3);
  preFrdFour.push(a[3].q4);
  preFrdFour.push(a[3].q5);
  preFrdFour.push(a[3].q6);
  preFrdFour.push(a[3].q7);
  preFrdFour.push(a[3].q8);
  preFrdFour.push(a[3].q9);
  preFrdFour.push(a[3].q10);

 

  let PRE_ONE = preFrdOne;
  let PRE_TWO = preFrdTwo;
  let PRE_THREE = preFrdThree;
  let PRE_FOUR = preFrdFour;

  totalDiff(PRE_ONE);
  totalDiff(PRE_TWO);
  totalDiff(PRE_THREE);
  totalDiff(PRE_FOUR);
  frdSelection(results);

}

function totalDiff(preFriendInput) {
  for (let x = 0; x < userAns.length; x++) {
    var num = userAns[x] - preFriendInput[x];
    difference.push(Math.abs(num));
  }
  adder(difference);
}

function adder(differences) {
  var num = 0;
  for (var t = 0; t < differences.length; t++) {
    num = num + differences[t];
  }
  results.push(num);
  difference = [];
  preFrdOne = [];
  preFrdTwo = [];
  preFrdThree = [];
  preFrdFour = [];

 console.log(results); 
}

function frdSelection(results) {
   var lowNum = Math.min.apply(null, results);
   var index = results.findIndex(results => results === lowNum);
   var person = a[index].customerName;  
  console.log(index, "lowest Number: " + lowNum);
}
})
};