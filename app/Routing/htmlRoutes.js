// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "./../Public/survey.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname + "/../Public/home.html"));
  });

  // app.get("/intro",function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../Public/intropage.html"));
  // });
 
// If no matching route is found default to home
  app.use( function(req, res) {
    res.sendFile(path.join(__dirname + "/../Public/intropage.html"));
  });
  
};
