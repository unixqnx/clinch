(function() {
  'use strict';

  angular
    .module('clinch')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('clinch', {
        url: '/',
        templateUrl: 'app/clinch/clinch.html',//'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('clinch.settings', {
        url: 'settings',
        templateUrl: 'app/clinch/settings/settings.html',//'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('clinch.home', {
        url: 'home',
        templateUrl: 'app/clinch/home/home.html',//'app/main/main.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('home');
  }

})();
