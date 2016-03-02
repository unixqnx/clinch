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
        templateUrl: 'app/clinch/clinch.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
          .state('clinch.home', {
            url: 'home',
            templateUrl: 'app/clinch/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
          })
          .state('clinch.settings', {
            url: 'settings',
            // abstract:true,
            // defaultChild: 'clinch.settings.stationery',
            templateUrl: 'app/clinch/settings/settings.html',
            controller: 'MainController',
            controllerAs: 'main'
          })
              .state('clinch.settings.stationery', {
                url: '/stationery',
                templateUrl: 'app/clinch/settings/tabs/stationery/stationery.html',
                controller:'StationeryController',
                controllerAs:'vmS'
              })
                  .state('clinch.settings.stationery.list', {
                    url: '/list',
                    templateUrl: 'app/clinch/settings/tabs/stationery/list.html',
                    controller:'StationeryController',
                    controllerAs:'vmS'
                  })
                  .state('clinch.settings.stationery.edit', {
                    url: '/edit/',
                    // url: '/edit/:stationeryId',
                    params:{stationeryId:null},
                    // onEnter:function($stateParams)
                    // {
                    //   alert($stateParams.stationeryId);
                    // },
                    templateUrl: 'app/clinch/settings/tabs/stationery/edit.html',
                    controller:'StationeryController',
                    controllerAs:'vmS'
                  })


              .state('clinch.settings.purchase', {
                url: '/purchase',
                templateUrl: 'app/clinch/settings/tabs/purchase/purchase.html',
                controller:'PurchaseController',
                controllerAs:'vmP'
              })
              .state('clinch.settings.role', {
                url: '/role',
                templateUrl: 'app/clinch/settings/tabs/role/role.html',
                controller:'RoleController',
                controllerAs:'vmR'
              })
              .state('clinch.settings.staff', {
                url: '/staff',
                templateUrl: 'app/clinch/settings/tabs/staff/staff.html',
                controller:'StaffController',
                controllerAs:'vmSt'
              })
      ;


    $urlRouterProvider.otherwise('home');
  }

})();
