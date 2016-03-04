(function(){

'use strict'

angular.module('clinch').controller('stationeryAddController', function(VMFactory, model, $state){

var vmSE = this;
vmSE.title = 'Создать';

vmSE.stationeriesVM = VMFactory.getStationeriesVM();

(function(){
	vmSE.stationery = model.newStationery(vmSE.origin);
})();


vmSE.Navigate = function(nav)
{ 
	$state.go(nav); 
};

vmSE.save = function(){
	vmSE.stationeriesVM.addStationery(vmSE.stationery);
	//vmSE.stationeriesVM.stationeries.push(vmSE.stationery);
	vmSE.Navigate('clinch.settings.stationery.list')	
}

vmSE.cancel = function(){
	vmSE.Navigate('clinch.settings.stationery.list')
}


});



})();