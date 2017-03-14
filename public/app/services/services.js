angular.module('subjectivity.services', [])
.factory('userData', function ($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/links'
    }).then(function(response) {
      return response.data;
    });
  };

  var addOne = function(datum) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: JSON.stringify(datum)
    }).then(function(resp) {
      console.log(resp.data);
      console.log(resp.status);
      console.log(resp.data.title);
      return resp;
    });
  };
  return {
    getAll: getAll,
    addOne: addOne
  };

});