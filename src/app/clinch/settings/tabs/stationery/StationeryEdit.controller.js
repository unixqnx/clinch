(function(){

'use strict'

angular.module('clinch').controller('StationeryEditController', function(VMFactory, model, $state){

var vmSE = this;
vmSE.title = 'Редактирование';
vmSE.stationeriesVM = VMFactory.getStationeriesVM();

(function(){
	var stationeryId = $state.params.stationeryId;
	if(stationeryId != null){
		vmSE.origin = vmSE.stationeriesVM.getStationeryById($state.params.stationeryId);
		vmSE.stationery = model.newStationery(vmSE.origin);
	}
})();


vmSE.Navigate = function(nav)
{ 
	$state.go(nav); 
};

vmSE.save = function(){
	var index = vmSE.stationeriesVM.indexOfId(vmSE.origin )
	vmSE.stationeriesVM.stationeries[index] = vmSE.stationery;
	vmSE.Navigate('clinch.settings.stationery.list')	
}

vmSE.cancel = function(){
	vmSE.Navigate('clinch.settings.stationery.list')
}

});
})();





