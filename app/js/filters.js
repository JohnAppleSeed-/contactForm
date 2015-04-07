(function() {
  'use strict';

  angular.module('myApp.filters', [])
    .filter('test', function() {
      return function(input, start) {
        start = +start;
        return input.splice(start);
      };
    });

})();
