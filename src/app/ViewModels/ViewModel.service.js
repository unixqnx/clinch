(function(){

'use strict'

angular.module('clinch').service('VMFactory', ['model', function(model){

	this.newStationeryVM = function(stationery){
		return new stationeryViewModel(stationery)
	};



	this.newHomeVM = function(stationeries, request){

		var result=[];
		var requestPositions = request.requestPositions;
		var DEFAULT_COUNT = 1;
		var DEFAULT_REQUEST_POSITION_ID = 0;


		stationeries.forEach(function(stat){

			var exist = false;			
			requestPositions.forEach(function(pos){

				if(stat.stationeryId === pos.stationeryId){
					result.push(new homeVM(true, stat, pos));
					exist = true;
					return;
				}

			});

			if(!exist){
				var requestPosition = new model.newRequestPosition(DEFAULT_REQUEST_POSITION_ID, request.id, stat.stationeryId, DEFAULT_COUNT)
				result.push(new homeVM(false, stat, requestPosition));
			}

		});

		return result;
	};


}]);

function stationeryViewModel(stationery){
	this.selected = false;
	
	this.stationeries = stationery;
}


function homeVM(selected, stationery, requestPosition){
	this.selected = selected;
	this.stationery = stationery;
	this.requestPosition = requestPosition;
}

})();








