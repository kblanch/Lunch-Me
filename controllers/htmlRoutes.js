var path = require("path");

module.exports = function(app) {

  app.get("/adding", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/views/addOrderLine.html"));
  });

  app.get("/confirming", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/views/confirmation.html"));
  });
  app.get("/creating", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/views/creators_page.html"));
  });


  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/views/index.html"));
  });
};
