(function(){
'use strict'

angular.module('clinch').controller('HomeController', function(VMFactory, stationery, request){

var vm = this;



vm.homeVM = VMFactory.getHomeVM();


vm.Add = function(stationeryVM){
	stationeryPositionVM.selected = true;
};





})


})();