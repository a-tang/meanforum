var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 15},
    {title: 'post 3', upvotes: 25},
    {title: 'post 5', upvotes: 1},
    {title: 'post 4', upvotes: 5},
  ];

  $scope.addPost = function(){
    $scope.posts.push({title: 'A New Post!', upvotes: 0});
  };

}]);
