app.controller("ViewCtrl", function ViewCtrl($scope) {

  $scope.main = true;

  $scope.showMain = function() {
    $scope.main = true;
    $scope.gallery = false;
    $scope.other = false;
  };

  $scope.showGallery = function() {
    $scope.main = false;
    $scope.gallery = true;
    $scope.other = false;
  };

  $scope.showOther = function() {
    $scope.main = false;
    $scope.gallery = false;
    $scope.other = true;
  };

});
