var subjectivityApp = angular.module('subjectivityApp', []);

subjectivityApp.controller('userResponseController', function userResponseController($scope) {
  $scope.responses = [
    {
      name: 'Samy Kebaish',
      subject: 'Biology',
      grade: 99
    },
    {
      name: 'Samy Kebaish',
      subject: 'Chemistry',
      grade: 98
    }

  ];
});