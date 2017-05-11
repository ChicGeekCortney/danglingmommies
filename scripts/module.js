var app = angular.module ('dMommies', ['ngRoute']);

app.config (function($routeProvider,$locationProvider){

  $routeProvider
  .when('/about', {
    // controller: 'mommyControl',
    templateUrl: 'about.html'
  })
  .when('/events', {
    // controller: 'mommyControl',
    templateUrl: 'events.html'
  })
  .when('/gallery', {
    // controller: 'mommyControl',
    templateUrl: 'gallery.html'
  })
  .when('/home', {
    // controller: 'mommyControl',
    templateUrl: 'welcome.html'
  })
  .when('/team', {
    // controller: 'mommyControl',
    templateUrl: 'team.html'
  });

  $locationProvider.hashPrefix('');
});


app.directive('welcomeText', function(){

return {
  restrict: 'AE',
  templateUrl: 'welcome.html',
  replace: false

};

});
