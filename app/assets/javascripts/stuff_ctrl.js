
(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
      $scope.message = "Let's find a job!";
      $scope.tasks = ["Find interested jobs", "Submit resumes", "Take a nap"];
      window.$scope = $scope;
  });
}());