(function(){

'use strict'

angular.module('clinch').controller('StationeryEditController', function(VMFactory, model, $state){

var vm = this;
vm.title = 'Редактирование';
vm.stationeriesVM = VMFactory.getStationeriesVM();

(function(){
	var stationeryId = parseInt($state.params.stationeryId);
	if(stationeryId != null){
		vm.origin = vm.stationeriesVM.getStationeryById(stationeryId);
		vm.stationery = model.newStationery(vm.origin);
	}
})();


vm.Navigate = function(nav)
{ 
	$state.go(nav); 
};


vm.save = function(){
	vm.stationery.stationeryId = vm.origin.stationeryId;
	vm.stationeriesVM.updateStationery(vm.stationery);
	vm.Navigate('clinch.settings.stationery.list')	
}


vm.cancel = function(){
	vm.Navigate('clinch.settings.stationery.list')
}

});
})();





