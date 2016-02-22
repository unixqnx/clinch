(function(){
'use strict'

angular.module('clinch').controller('HomeController', function(stationery){

var vm = this;


vm.getStationeries = function(){

	return stationery.getStationeries();
}

vm.Stationeries = vm.getStationeries();








})


})();