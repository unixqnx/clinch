(function()
{

'use strict'
angular.module('clinch').service('stationery', [function(VMFactory){


this.getStationeries = function(){

var json = 
'[{"stationeryId":1, "name":"Ручка шариковая син.", "price":50, "unit":"ш.т.", "description":"some text", "deleted":false, "deleted":true},'+
'{"stationeryId":2, "name":"Ручка шариковая чер.", "price":50, "unit":"ш.т.", "description":"some text", "deleted":null},'+
'{"stationeryId":3, "name":"Ручка гел. син.", "price":120, "unit":"ш.т.", "description":"some text", "deleted":true},'+
'{"stationeryId":4, "name":"Ручка гел. чер.", "price":120, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":5, "name":"Карандаш простой", "price":30, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":6, "name":"Маркер для доски", "price":90, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":7, "name":"Тетрадь общая А5", "price":60, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":8, "name":"Блокнот", "price":100, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":9, "name":"Папка регистратор шир.", "price":480, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":10, "name":"Папка регистартор узк.", "price":480, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":11, "name":"Папка с файлами", "price":240, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":12, "name":"Папка с зажимам ", "price":288, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":13, "name":"Папка с резинкой", "price":288, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":14, "name":"Скоросш. пластиковый ", "price":48, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":15, "name":"Уголок", "price":17, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":16, "name":"Файл", "price":8, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":17, "name":"Папка конверт", "price":48, "unit":"ш.т.", "description":"some text", "deleted":false},'+

'{"stationeryId":18, "name":"Конверт А4 ", "price":36, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":19, "name":"Конверт А5", "price":24, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":20, "name":"Скрепки", "price":26, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":21, "name":"Скобы маленькие", "price":26, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":22, "name":"Скобы большие", "price":27, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":23, "name":"Точилка", "price":48, "unit":"ш.т.", "description":"some text", "deleted":false},'+

'{"stationeryId":24, "name":"Штрих", "price":72, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":25, "name":"Клей карандаш", "price":72, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":26, "name":"Ластик", "price":24, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":27, "name":"Линейка", "price":24, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":28, "name":"Скотч узкий прозрачный", "price":60, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":29, "name":"Ножницы", "price":240, "unit":"ш.т.", "description":"some text", "deleted":false},'+

'{"stationeryId":30, "name":"Подставка для ручек", "price":204, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":31, "name":"Бумага для записи (клей)", "price":72, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":32, "name":"Бумага для записи (кубарик)", "price":240, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":33, "name":"Лоток вертикальный", "price":540, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":34, "name":"Лоток горизонтальный", "price":540, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":35, "name":"Урна", "price":480, "unit":"ш.т.", "description":"some text", "deleted":false},'+

'{"stationeryId":36, "name":"Степлер маленький", "price":168, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":37, "name":"Степлер большой", "price":420, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":38, "name":"Дырокол", "price":400, "unit":"ш.т.", "description":"some text", "deleted":false},'+
'{"stationeryId":39, "name":"Закладки (клей) stick", "price":144, "unit":"ш.т.", "description":"some text", "deleted":false}]';


var stationeries = angular.fromJson(json);
return stationeries;
}

}]);
})();



