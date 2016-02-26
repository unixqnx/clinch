(function(){

'use strict'

angular.module('clinch').controller('StationeryController', function(VMFactory, stationery, request){

var vmS = this;
vmS.homeVM = VMFactory.getHomeVM();

});
})();









