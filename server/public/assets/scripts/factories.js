
myApp.factory("Veterinarian", ["$http", function($http){
  var info = {};

  var greeting = function(){
      console.log("I'm working cause I'm smart and figured this out!");
  };

  var getAnimals = function(){
    $http.get("/getPets").then(function(response){
      console.log("Response Data", response.data);
      info.data = response.data;
      console.log("info : ", info.data);
      return info.data;
    });
  };

  var initPets = function(){
    if(info.data === undefined){
      $http.get('/getPets').then(function(res){
        info.data = res.data;
      });
    }
  };

  var postAnimals = function(data){
    $http.post("/postPets", data).then(function(response){
      console.log(response.data);
    });
  };

  return {
    postAnimals : postAnimals,
    getAnimals : getAnimals,
    info : info,
    greeting : greeting,
    initPets : initPets
  };

}]);
