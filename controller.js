angular.module('userProfiles').controller('MainController', function($scope, mainService) {


  $scope.currentPage = 1;

  $scope.previousPage = function() {
    if ($scope.currentPage > 1) {
      $scope.currentPage --;
    }
    $scope.getUsers();
  };

  $scope.advancePage = function() {
    if ($scope.currentPage < $scope.totalPages) {
      $scope.currentPage ++;
      $scope.getUsers();
    }
  }

  $scope.getUsers = function() {
  	mainService.getUsers($scope.currentPage).then(function(response) {
      $scope.users = response.data.data;
      $scope.totalPages = response.data.total_pages;
    });
  }


  $scope.getUsers();

});