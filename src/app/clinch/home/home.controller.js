(function(){
'use strict'

angular.module('clinch').controller('HomeController', function(stationery, request){

var vm = this;



vm.Stationeries = stationery.getStationeries();
vm.Request = request.getRequest();

vm.Add = function(stationeryVM){
	stationeryVM.selected = true;
};





})


})();