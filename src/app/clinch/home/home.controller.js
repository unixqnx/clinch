(function(){
'use strict'

angular.module('clinch').controller('HomeController', function(VMFactory){

var vm = this;
vm.homeVM = VMFactory.getHomeVM();

})


})();