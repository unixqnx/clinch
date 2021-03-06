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
            abstract:true,
            templateUrl: 'app/clinch/settings/settings.html',
            controller: 'MainController',
            controllerAs: 'main'
          })
              .state('clinch.settings.stationery', {
                url: '/stationery',
                abstract:true,                
                templateUrl: 'app/clinch/settings/tabs/stationery/stationery.html'
              })
                  .state('clinch.settings.stationery.list', {
                    url:'/list',
                    templateUrl: 'app/clinch/settings/tabs/stationery/list.html',
                    controller:'StationeryListController',
                    controllerAs:'vmS'
                  })
                  .state('clinch.settings.stationery.edit', {
                    url: '/edit/:stationeryId',//it is better than using params because lets to use backward and forward buttons of browser
                    //params:{stationeryId:null},
                    // onEnter:function($stateParams)
                    // {
                    //   alert($stateParams.stationeryId);
                    // },
                    templateUrl: 'app/clinch/settings/tabs/stationery/edit.html',
                    controller:'StationeryEditController',
                    controllerAs:'vmSE'
                  })
                  .state('clinch.settings.stationery.add', {
                    url: '/add/',
                    templateUrl: 'app/clinch/settings/tabs/stationery/edit.html',
                    controller:'stationeryAddController',
                    controllerAs:'vmSE'
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
              });


    $urlRouterProvider.otherwise('home');
  }

})();
