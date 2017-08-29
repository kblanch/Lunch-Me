var path = require("path");

module.exports = function(app) {

  app.get("/adding", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addOrderLine.html"));
  });

  app.get("/confirming", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/confirmation.html"));
  });
  app.get("/creating", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/creators_page.html"));
  });

    app.get("/", function(req, res){
        // var message = "Login Page"
        // res.send(message);

        res.sendFile(path.join(__dirname, "../public/login.html"))
      });

  
};
