var subjectivityApp = angular.module('subjectivityApp', []).controller('userResponseCtrl', function userResponseCtrl($scope) {

  $scope.responses = [];
  // $scope.response.firstName = $scope.firstName;
  // $scope.response.lastName = $scope.lastName;
  // $scope.responses = [
  // ];

  // $scope.submitForm = function(firstName, lastName) {
  //   $scope.firstName = firstName;
  //   $scope.lastName = lastName;

  $scope.setSubjectValue = function($event) {
    $scope.subject = $event.target.getAttribute('value');
  };

  $scope.setFeelingValue = function($event) {
    $scope.feeling = $event.target.getAttribute('value');
  };

  $scope.addRow = function() {
    $scope.responses.push({ 'name': $scope.firstName + ' ' + $scope.lastName, 'subject': $scope.subject, 'feeling': $scope.feeling});

    console.log($scope.responses);

  };

});