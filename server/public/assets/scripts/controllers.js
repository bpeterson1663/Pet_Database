

myApp.controller("AddController", ['$scope', 'Veterinarian', function($scope, Veterinarian){

      var petObject = {};
      var veterinarian = Veterinarian;
      //POST HERE
      $scope.submit = function(data){
        veterinarian.postAnimals(data);
      };
  }]);


  myApp.controller("ShowController", ['$scope', 'Veterinarian', function($scope, Veterinarian){
      var veterinarian = Veterinarian;

      veterinarian.getAnimals();
      //GET HERE
      $scope.petArray = veterinarian.info.data;
      console.log("Veterinarian info: ", veterinarian.info);
      console.log("Pet Array: ", $scope.petArray);
}]);
