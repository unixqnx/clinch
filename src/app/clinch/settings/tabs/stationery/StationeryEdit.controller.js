(function(){

'use strict'

angular.module('clinch').controller('StationeryEditController', function(VMFactory, model, $state){

var vmSE = this;
vmSE.title = 'Редактирование';
vmSE.stationeriesVM = VMFactory.getStationeriesVM();

(function(){
	var stationeryId = parseInt($state.params.stationeryId);
	if(stationeryId != null){
		vmSE.origin = vmSE.stationeriesVM.getStationeryById(stationeryId);
		vmSE.stationery = model.newStationery(vmSE.origin);
	}
})();


vmSE.Navigate = function(nav)
{ 
	$state.go(nav); 
};


vmSE.save = function(){
	vmSE.stationery.stationeryId = vmSE.origin.stationeryId;
	vmSE.stationeriesVM.updateStationery(vmSE.stationery);
	vmSE.Navigate('clinch.settings.stationery.list')	
}


vmSE.cancel = function(){
	vmSE.Navigate('clinch.settings.stationery.list')
}

});
})();





