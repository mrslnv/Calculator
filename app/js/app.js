'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      when('/calculator', {templateUrl: 'partials/calculator.html', controller: CalculatorCtrl}).
      when('/ex1', {templateUrl: 'partials/ex1.html', controller: CalculatorCtrl}).
      otherwise({redirectTo: '/phones'});
}]);
