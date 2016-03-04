(function(){

'use strict'

angular.module('clinch').service('request',function(){


this.getRequest = function(){
	var json =
	'{"id":1001,'+
	'"description":"some words",'+
	'"purchase":{"id":99,"purchaseName":"Ежигодная закупка для сотрудников","startDate":"01.02.2016","endDate":"01.03.2016"},'+
	'"staff":{"id":2001,'+
	'"surName":"Санкевич",'+
	'"name":"Дмитрий",'+
	'"patronymic":"Адамович"},'+
	'"requestPositions":[{"id":100500,'+
	'"requestId":1001,'+
	'"stationeryId":1,'+
	'"count":5'+
	'}]'+
	'}';
	var object = angular.fromJson(json);
	return object;
};


});


})();




// (function(){

// 'use strict'

// angular.module('clinch').service('request',function(){


// this.getRequest = function(){
// 	var json =
// 	'{"id":1001,'+
// 	'"description":"some words",'+
// 	'"purchase":{"id":99,'+
//  			'"purchaseName":"Ежигодная закупка для сотрудников",'+
//  			'"startDate":"01.02.2016",'+
// 			'"endDate":"01.03.2016"'+
//  			'},'+
// 	'"staff":{"id":2001,'+
// 			'"surName":"Санкевич",'+
// 			'"name":"Дмитрий",'+
// 			'"patronymic":"Адамович"'+
// 	 		'},'+
// 	'"requestPositions":[{"id":100500,'+
// 						'"requestId":1001,'+
// 						'"stationeryId":1,'+
// 						'"count":5'+
// 						'}]'+
// 	'}';
// 	var object = angular.fromJson(json);
// 	return object;
// };


// });


// })();