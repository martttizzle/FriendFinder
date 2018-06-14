
const friendArray = require("../Data/friends.js");
// ROUTING
module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(friendArray);
    console.log(req.body, "<--req.body on apiRoutes");
  });

  app.post("/api/friends", function (req, res) {
    



    friendArray.push(req.body);
    console.log(friendArray[0].customerName);
    console.log(friendArray[0].photo);
    console.log(friendArray[1].customerName);
    console.log(friendArray[1].photo);
    
})};