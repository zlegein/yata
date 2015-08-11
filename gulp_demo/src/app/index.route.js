(function() {
  'use strict';

  angular
    .module('yata')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/tide/search.html',
        controller: 'TideSearchController',
        controllerAs: 'search'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
