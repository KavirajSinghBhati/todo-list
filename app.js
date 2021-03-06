const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
var items = ["Buy food", "Cook food", "Eat food"];
app.get("/", function(req, res) {

    var today = new Date();
  
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-us", options);
  
    res.render("list", {kindOfDay: day, newListItems: items});
  
  });
  app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  });
app.listen(3000, function() {
    console.log("App running on port 3000");
});