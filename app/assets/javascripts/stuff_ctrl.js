
(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
      $scope.message = "Let's find a job!";
      $scope.tasks = ["Find interested jobs", "Submit resumes", "Take a nap"];

      $scope.addTask = function(newTask){
        if (newTask) {
          $scope.tasks.push(newTask);
          $scope.newTask = null;
          $scope.errorMessage = null;
        } else {
          $scope.errorMessage = "Can't be blank";
        }
      };

      $scope.completeTask = function(index) {
        $scope.tasks.splice(index, 1);
      };
      window.$scope = $scope;
  });


}());