console.log("linked");
var app = angular.module("personalWebsite", []);

app.controller('Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.random;
  $scope.img = 'https://40.media.tumblr.com/tumblr_lsb0tapL8L1qd61gho1_500.jpg';
  $scope.randomGiph = function() {
    $http
    .get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+$scope.random)
    .then(function(data) {
      console.log('data', data);
      $scope.img = data.data.data.image_url;
    })
  }
}])
