(function(){

'use strict'

angular.module('clinch').service('VMFactory', ['model', 'request', 'stationery', function(model, request, stationery){


	this.getHomeVM = function(){
		var req = request.getRequest();
		var stationeries = stationery.getStationeries();
		var stationeryPositionVM = newStationeryPositionVM(stationeries, req);
		var homeVM = gethomeVM(stationeryPositionVM, req);
		
		return homeVM;
	};


	this.getStationeriesVM = function(){
			var stationeries = stationery.getStationeries();
			return new stationeryVM(stationeries);
	};


//----------VIEW MODELS CREATING

	function newStationeryPositionVM(stationeries, request){

		var result=[];
		var requestPositions = request.requestPositions;
		var DEFAULT_COUNT = 1;
		var DEFAULT_REQUEST_POSITION_ID = 0;


		stationeries.forEach(function(stat){

			var exist = false;			
			requestPositions.forEach(function(pos){

				if(stat.stationeryId === pos.stationeryId){
					result.push(new stationeryPositionVM(true, stat, pos));
					exist = true;
					return;
				}

			});

			if(!exist){
				var requestPosition = new model.newRequestPosition(DEFAULT_REQUEST_POSITION_ID, request.id, stat.stationeryId, DEFAULT_COUNT)
				result.push(new stationeryPositionVM(false, stat, requestPosition));
			}

		});

		return result;
	};


	function gethomeVM(stationeryPositionVM, request){
		return new homeVM(stationeryPositionVM, request);
	}

//----------END VIEW MODELS CREATING



//----------VIEW MODELS

function stationeryPositionVM(selected, stationery, requestPosition){
	this.selected = selected;
	this.stationery = stationery;
	this.requestPosition = requestPosition;
}


function homeVM(stationeryPositionVM, request){
	this.stationeryPositionVM = stationeryPositionVM;
	this.requestDescription = request.description;
	this.purchase = request.purchase;
	this.staff = request.staff;
}


function stationeryVM(stationeries){
	this.stationeries = stationeries;

	this.getStationeryById = function(id){
		for(var i=0;i<this.stationeries.length;i++){
			if(this.stationeries[i].stationeryId === id){
				return this.stationeries[i];
			}
		}
	}

	this.indexOfId = function(stationery){
		var returnValue = -1;
		this.stationeries.forEach(function(currentValue, index){
			if(currentValue.stationeryId == stationery.stationeryId){
				returnValue = index;
			}
		});
		return returnValue;
	}


}


//----------END VIEW MODELS

}]);
})();








