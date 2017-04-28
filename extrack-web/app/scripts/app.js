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
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app',{
        url:'/',
        views:{
            'header': {
                template : '<h1>To be completed</h1>'
            },
            'content': {
                template : '<h1>To be Completed</h1>'               
            },
            'footer': {
                template : '<h1>To be Completed</h1>'
            }
        }
    })
    .state('app.expense',{
        url:'expense',
        views:{
            'content@':{
                templateUrl:'views/expense.html',
                controller: 'ExpenseController'
            }
        }
    });
    $urlRouterProvider.otherwise('/');
  });
