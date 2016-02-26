(function(){
'use strict'

angular.module('clinch').service('model',[function(){

this.newRequest = function(id, purchase, staff, description, requestPosition){
	return new Request(id, purchase, staff, description, requestPosition);
};


this.newRequestPosition = function(id, requestId, stationeryId, count){
	return new RequestPosition(id, requestId, stationeryId, count);
};


this.newPurchase = function(id, purchaseName, startDate, endDate){
	return new Purchase(id, purchaseName, startDate, endDate);
};


this.newStaff = function(id, surName, name, patronymic){
	return new Staff(id, surName, name, patronymic);
};


function RequestPosition(id, requestId, stationeryId, count){
	if(arguments.length==0){
		this.id = null;
		this.requestId = null;
		this.stationeryId = null;
		this.count = null;
	}
	else{
		this.id = id;
		this.requestId = requestId;
		this.stationeryId = stationeryId;
		this.count = count;
	}
}


function Request(id, purchase, staff, description, requestPosition){
	if(arguments.length==0){
		this.id = null; 
		this.purchase = null; 
		this.staff = null; 
		this.description = null; 
		this.requestPosition = null;
	}
	else{
		this.id = id; 
		this.purchase = purchase; 
		this.staff = staff; 
		this.description =description; 
		this.requestPosition =requestPosition; 
	}
}


function Purchase(id, purchaseName, startDate, endDate){
	if(arguments.length==0){
		this.id = null; 
		this.purchaseName = null; 
		this.startDate = null; 
		this.endDate = null; 
	}
	else{
		this.id = id; 
		this.purchaseName = purchaseName; 
		this.startDate = startDate; 
		this.endDate = endDate; 
	}
}


function Staff(id, surName, name, patronymic){
	if(arguments.length==0){
		this.id = null; 
		this.surName = null; 
		this.name = null; 
		this.patronymic = null; 
	}
	else{
		this.id = id; 
		this.surName = surName; 
		this.name = name; 
		this.patronymic = patronymic; 
	}
}


}]);
})(); 