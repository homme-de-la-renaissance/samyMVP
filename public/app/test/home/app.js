 angular.module('subjectivityRouter.subjectivityApp', []).controller('userResponseCtrl', function userResponseCtrl($scope) {

  $scope.responses = [];

  $scope.sortType = 'Name'; // set the default sort type
  $scope.sortReverse = false;
  $scope.searchName = '';  // set the default sort order

  $scope.setSubjectValue = function($event) {
    $scope.subject = $event.target.getAttribute('value');
  };

  $scope.setFeelingValue = function($event) {
    $scope.feeling = $event.target.getAttribute('value');
  };

  $scope.addRow = function() {
    if (!$scope.firstName || !$scope.lastName || !$scope.feeling || !$scope.examScore) {
      alert("Please fix your values!");
    } else {
        $scope.responses.push({ 'name': $scope.firstName + ' ' + $scope.lastName, 'subject': $scope.subject, 'feeling': $scope.feeling, 'examScore': $scope.examScore});

        $scope.firstName, $scope.lastName, $scope.subject, $scope.feeling, $scope.examScore = '';

    console.log($scope.responses);
    }

  };

});