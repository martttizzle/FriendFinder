
const friendArray = require("../Data/friends.js");
// ROUTING
module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(friendArray);

  });

  app.post("/api/friends", function (req, res) {
    friendArray.push(req.body);
    userInput(req.body);

  })
};
function userInput(userIpt) {
  console.log(userIpt, "fullresults");
var userAns = [];
  // console.log( parseInt(userIpt.q1));

for(let i =0 ; i < 1; i++) {
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
}


var aa = friendArray
// friendArray[i].q2;
// friendArray[i].q3;
// friendArray[i].q4;
// friendArray[i].q5;
// friendArray[i].q6;
// friendArray[i].q7;
// friendArray[i].q8;
// friendArray[i].q9;
// friendArray[i].q10;


 
 console.log(aa);
