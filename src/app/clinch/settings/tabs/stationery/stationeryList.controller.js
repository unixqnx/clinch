(function(){

'use strict'

angular.module('clinch').controller('StationeryListController', function(VMFactory, model, $state)
{

var vm = this;
vm.deletingStationery = null;

vm.stationeriesVM = VMFactory.getStationeriesVM();

(function(){
	var stationeryId = $state.params.stationeryId;
	if(stationeryId != null){
		vm.origin = vm.stationeriesVM.getStationeryById($state.params.stationeryId);
		vm.stationery = model.newStationery(vm.origin);
	}
})();


vm.Navigate = function(nav, param)
{ 
	$state.go(nav, param); 
}


vm.SetDeletingStationery = function(stationery){
	vm.deletingStationery = stationery;
}


vm.DeleteStationery = function(){
	vm.stationeriesVM.deleteStationeryById(vm.deletingStationery)
}


vm.cancel = function(){
	vm.Navigate('clinch.settings.stationery.list')
}
})
})();












