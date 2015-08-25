var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider) {
  $stateProvider.state("index", {
    url: "",
    views: {
      "main": {
        templateUrl: "partials/main.html"
      },
      "gallery": {
        templateUrl: "partials/gallery.html"
      },
      "other": {
        templateUrl: "partials/other.html"
      }
    }
  });
});

app.directive("navbar", function() {
  return {
    restrict: "E",
    templateUrl: "partials/navigation.html",
    controller: "ViewCtrl"
  }
});
