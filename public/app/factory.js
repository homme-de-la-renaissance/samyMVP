angular.module('subjectivityRouter.factories', [])

.factory('Saved', function() {
  var savedGrades = {
    'grades':[]
  };

  var addGrade = function(_id, data) {
    console.log("test");
    if (savedGrades[data].indexOf(_id) === -1) {
      savedGrades[data].push(_id);
      return true;
    } else {
      return false;
    }
  };

  return {
    savedGrades: savedGrades,
    addGrade: addGrade
  };
})

.factory('Grades', function($http) {
  var savedGrades = {
    'grades':[]
  };

  var getGrades = function() {
    return $http({
      method: 'GET',
      url: '/api/grades'
    })
    .then(function(result) {
      return new Promise(function(next) {
        var resultGrades = result.data;
        resultGrades.forEach(function(grades) {
       // refactor
        next();
      });
    });
  };
