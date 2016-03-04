(function(){

'use strict'

angular.module('clinch').controller('StationeryListController', function(VMFactory, model, $state)
{

var vmS = this;
vmS.deletingStationery = null;

vmS.stationeriesVM = VMFactory.getStationeriesVM();

(function(){
	var stationeryId = $state.params.stationeryId;
	if(stationeryId != null){
		vmS.origin = vmS.stationeriesVM.getStationeryById($state.params.stationeryId);
		vmS.stationery = model.newStationery(vmS.origin);
	}
})();


vmS.Navigate = function(nav, param)
{ 
	$state.go(nav, param); 
}


vmS.SetDeletingStationery = function(stationery){
	vmS.deletingStationery = stationery;
}


vmS.DeleteStationery = function(){
	vmS.stationeriesVM.deleteStationeryById(vmS.deletingStationery)
}


vmS.cancel = function(){
	vmS.Navigate('clinch.settings.stationery.list')
}
})
})();












