var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 5000));

mongoose.connect('mongodb://localhost/pet_database');
mongoose.model("Pet", new Schema({"name" : String, "animal" : String, "age" : Number, "image" : String}));
var Pet = mongoose.model("Pet");

app.get('/getPets', function(req, res) {
  Pet.find({}, function(err, data){
    if(err){
      console.log(err);
    }

    res.send(data);
  });
});


//Make Post to Monogo Database
app.post("/postPets", function(req,res){
    var name = req.body.name;
    var species = req.body.species;
    var age = req.body.age;
    var image = req.body.image;

    var newPet = new Pet({'name': name, 'species': species, 'age' : age, 'image': image});
    newPet.save(function(err, data){
        if(err){
          console.log(err);
        }

        res.send(data);
    });


});//end of post route

app.get('/*', function(req, res){
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get('port'), function(){
  console.log("Up and listening on port :", app.get('port'));
});

module.exports = app;
