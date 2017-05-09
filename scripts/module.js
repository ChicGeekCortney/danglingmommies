var app = angular.module ('dmommies', ['ngRoute']);

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
});
