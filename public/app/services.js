angular.module('subjectivityRouter', ['ngRoute',
  'subjectivityRouter.subjectivityApp'
])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/test/sign/signin.html'
      // // controller: 'AuthController',
      // authenticate: false
    })
    .when('/signup', {
      templateUrl: 'app/test/signup/signup.html'
    })
    // Your code here
    .when('/analytics', {
      templateUrl: 'app/test/analytics/analytics.html'
      // controller: 'LinksController',
      // authenticate: true
    })
    .when('/home', {
      templateUrl: 'app/test/home/home.html',
      controller: 'userResponseCtrl'
    })
    .otherwise({
      templateUrl: 'app/test/home/home.html',
      controller: 'userResponseCtrl'
    });
  $locationProvider.hashPrefix('');
});