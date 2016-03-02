(function(){

'use strict'

angular.module('clinch').controller('StationeryController', function(VMFactory, model, $state){

var vmS = this;
vmS.stationeriesVM = VMFactory.getStationeriesVM();

(function(){
	vmS.origin = vmS.stationeriesVM.getStationeryById($state.params.stationeryId);
	vmS.stationery = model.newStationery(vmS.origin);
})();


vmS.Navigate = function(nav, param)
{ 
	$state.go(nav, param); 
};




vmS.save = function(){


	var index = vmS.stationeriesVM.indexOfId(vmS.origin )


var d = vmS.stationeriesVM.stationeries[index];
vmS.stationeriesVM.stationeries[index] = vmS.stationery;

}

vmS.cancel = function(){
	vmS.Navigate('^')
}





});
})();









