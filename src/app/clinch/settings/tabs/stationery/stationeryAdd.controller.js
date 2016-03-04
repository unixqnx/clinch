(function(){

'use strict'

angular.module('clinch').controller('stationeryAddController', function(VMFactory, model, $state){

var vm = this;
vm.title = 'Создать';

vm.stationeriesVM = VMFactory.getStationeriesVM();

(function(){
	vm.stationery = model.newStationery(vm.origin);
})();


vm.Navigate = function(nav)
{ 
	$state.go(nav); 
};


vm.save = function(){
	vm.stationeriesVM.addStationery(vm.stationery);
	vm.Navigate('clinch.settings.stationery.list')	
}


vm.cancel = function(){
	vm.Navigate('clinch.settings.stationery.list')
}
});



})();