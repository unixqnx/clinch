(function(){

'use strict'

angular.module('clinch').service('VMFactory', ['model', 'request', 'stationery', function(model, request, stationery){


	this.getHomeVM = function(){
		var req = request.getRequest();
		var stationeries = stationery.getStationeries();
		var stationeryVM = newStationeryVM(stationeries, req);
		var homeVM = gethomeVM(stationeryVM, req);
		
		return homeVM;
	};




//----------VIEW MODELS CREATING

	function newStationeryVM(stationeries, request){

		var result=[];
		var requestPositions = request.requestPositions;
		var DEFAULT_COUNT = 1;
		var DEFAULT_REQUEST_POSITION_ID = 0;


		stationeries.forEach(function(stat){

			var exist = false;			
			requestPositions.forEach(function(pos){

				if(stat.stationeryId === pos.stationeryId){
					result.push(new stationeryVM(true, stat, pos));
					exist = true;
					return;
				}

			});

			if(!exist){
				var requestPosition = new model.newRequestPosition(DEFAULT_REQUEST_POSITION_ID, request.id, stat.stationeryId, DEFAULT_COUNT)
				result.push(new stationeryVM(false, stat, requestPosition));
			}

		});

		return result;
	};


	function gethomeVM(stationeryVM, request){
		return new homeVM(stationeryVM, request);
	}

//----------END VIEW MODELS CREATING



//----------VIEW MODELS

function stationeryVM(selected, stationery, requestPosition){
	this.selected = selected;
	this.stationery = stationery;
	this.requestPosition = requestPosition;
}


function homeVM(stationeryVM, request){
	this.stationeryVM = stationeryVM;
	this.requestDescription = request.description;
	this.purchase = request.purchase;
	this.staff = request.staff;
}

//----------END VIEW MODELS

}]);
})();








