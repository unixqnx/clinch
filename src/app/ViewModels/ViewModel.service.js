(function(){

'use strict'

angular.module('clinch').service('VMFactory', ['model', 'request', 'stationery', function(model, request, stationery){


	this.getHomeVM = function(){
		var req = request.getRequest();
		var stationeries = stationery.getStationeries();

		var requestVM = newHomeVM(stationeries, req);
		return requestVM;
	};


	function newHomeVM(stationeries, request){

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



function homeVM(selected, stationery, requestPosition){
	this.selected = selected;
	this.stationeries = stationery;
	this.requestPosition = requestPosition;
}

})();








