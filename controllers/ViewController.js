app.controller("ViewCtrl", function ViewCtrl($scope) {

  $scope.main = true;

  $scope.showMain = function() {
    $scope.main = true;
    $scope.other = false;
  };

  $scope.showOther = function() {
    $scope.main = false;
    $scope.other = true;
  };

});
