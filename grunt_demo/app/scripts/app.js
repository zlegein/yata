'use strict';

/**
 * @ngdoc overview
 * @name yataApp
 * @description
 * # yataApp
 *
 * Main module of the application.
 */
angular
  .module('yataApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'tideLookup',
    'cityFinder',
    'search.controller',
    'tideResults',
    'constants'
  ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
    return $locationProvider.hashPrefix('!');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'TideSearchController',
        controllerAs: 'search'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

