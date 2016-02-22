(function()
{

'use strict'
angular.module('clinch').service('stationery', function(){


this.getStationeries = function(){

var json = 
'[{"stationery_id":1, "name":"Ручка шариковая син.", "price":50, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":2, "name":"Ручка шариковая чер.", "price":50, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":3, "name":"Ручка гел. син.", "price":120, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":4, "name":"Ручка гел. чер.", "price":120, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":5, "name":"Карандаш простой", "price":30, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":6, "name":"Маркер для доски", "price":90, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":7, "name":"Тетрадь общая А5", "price":60, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":8, "name":"Блокнот", "price":100, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":9, "name":"Папка регистратор шир.", "price":480, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":10, "name":"Папка регистартор узк.", "price":480, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":11, "name":"Папка с файлами", "price":240, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":12, "name":"Папка с зажимам ", "price":288, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":13, "name":"Папка с резинкой", "price":288, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":14, "name":"Скоросш. пластиковый ", "price":48, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":15, "name":"Уголок", "price":17, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":16, "name":"Файл", "price":8, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":17, "name":"Папка конверт", "price":48, "unit":"ш.т.", "description":"some text"},'+

'{"stationery_id":18, "name":"Конверт А4 ", "price":36, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":19, "name":"Конверт А5", "price":24, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":20, "name":"Скрепки", "price":26, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":21, "name":"Скобы маленькие", "price":26, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":22, "name":"Скобы большие", "price":27, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":23, "name":"Точилка", "price":48, "unit":"ш.т.", "description":"some text"},'+

'{"stationery_id":24, "name":"Штрих", "price":72, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":25, "name":"Клей карандаш", "price":72, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":26, "name":"Ластик", "price":24, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":27, "name":"Линейка", "price":24, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":28, "name":"Скотч узкий прозрачный", "price":60, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":29, "name":"Ножницы", "price":240, "unit":"ш.т.", "description":"some text"},'+

'{"stationery_id":30, "name":"Подставка для ручек", "price":204, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":31, "name":"Бумага для записи (клей)", "price":72, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":32, "name":"Бумага для записи (кубарик)", "price":240, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":33, "name":"Лоток вертикальный", "price":540, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":34, "name":"Лоток горизонтальный", "price":540, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":35, "name":"Урна", "price":480, "unit":"ш.т.", "description":"some text"},'+

'{"stationery_id":36, "name":"Степлер маленький", "price":168, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":37, "name":"Степлер большой", "price":420, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":38, "name":"Дырокол", "price":400, "unit":"ш.т.", "description":"some text"},'+
'{"stationery_id":39, "name":"Закладки (клей) stick", "price":144, "unit":"ш.т.", "description":"some text"}]';




return angular.fromJson(json);
}

});
})();



