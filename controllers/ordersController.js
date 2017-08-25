module.exports = function(app){

    app.get("/", function(req, res){
        var message = "Login Page"
        res.send(message);
    });
}