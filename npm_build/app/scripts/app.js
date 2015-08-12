'use strict';

/**
 * @ngdoc overview
 * @name yata
 * @description
 * # yata
 *
 * Main module of the application.
 */

 var angular = require('angular');

angular
  .module('yata', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])

  .config(function ($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/search.html',
        controller: 'TideSearchController',
        controllerAs: 'search'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

require('./main/apikey.value');
require('./main/city.service');
require('./main/tide.constants');
require('./main/tide.controller');
require('./main/tide.service');
require('./main/tides.directive');
