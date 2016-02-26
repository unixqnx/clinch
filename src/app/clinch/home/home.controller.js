(function(){
'use strict'

angular.module('clinch').controller('HomeController', function(VMFactory, stationery, request){

var vm = this;



vm.Stationeries = VMFactory.getHomeVM();


vm.Add = function(stationeryVM){
	stationeryVM.selected = true;
};





})


})();