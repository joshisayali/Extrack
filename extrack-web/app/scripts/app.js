'use strict';

/**
 * @ngdoc overview
 * @name extrackWebApp
 * @description
 * # extrackWebApp
 *
 * Main module of the application.
 */
angular
  .module('extrackWebApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
