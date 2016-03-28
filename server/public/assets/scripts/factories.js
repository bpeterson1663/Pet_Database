
myApp.factory("Veterinarian", ["$http", function($http){
  var info = {};

  var gretting = function(){
      console.log("I'm working cause I'm smart and figured this out!");
  };

  var getAnimals = function(){
    $http.get("/getPets").then(function(response){
      console.log(response.data);
      info.data = response.data;
      console.log("info : ", info.data);
      return info.stuff;
    });
  };

  var postAnimals = function(data){
    $http.post("/postPets", data).then(function(response){
      console.log(response.data);
    });
  };

  return {
    postAnimals : postAnimals,
    getAnimals : getAnimals,
    info : info
  };

}]);
