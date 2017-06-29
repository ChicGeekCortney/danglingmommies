var app = angular.module ('dMommies', ['ngRoute']);

app.config (function($routeProvider,$locationProvider){

  $routeProvider
  .when('/about', {
     controller: 'mommyControl',
    templateUrl: 'about.html'
  })
  .when('/events', {
     controller: 'mommyControl',
    templateUrl: 'events.html'
  })
  .when('/gallery', {
     controller: 'mommyControl',
    templateUrl: 'gallery.html'
  })
  .when('/home', {
     controller: 'mommyControl',
    templateUrl: 'welcome.html'
  })
  .when('/team', {
     controller: 'mommyControl',
    templateUrl: 'team.html'
  })
  .when('/contact', {
     controller: 'mommyControl',
    templateUrl: 'contact.html'
  })
  .otherwise({
       redirectTo: '/home'
     });

  $locationProvider.hashPrefix('');
});


app.controller('mommyControl', ['$scope', '$location', function($scope, $location) {
   $scope.showPage = $location.path() === '/home';
 }]);
