(function(){

'use strict'

angular.module('clinch').controller('StationeryController', function(VMFactory, $state){

var vmS = this;
vmS.stationeriesVM = VMFactory.getStationeriesVM();

vmS.Navigate = function(nav)
{ 
	$state.go(nav); 
};




});
})();









