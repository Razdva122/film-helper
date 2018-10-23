function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){
	$(".header").css("border","3px solid red");
});
angular.module("myApp",[])
.controller("firstCtrl",function ($scope) {
	$scope.randomFilm = function(){
		var randomNumber=getRandomInt(0,arrayFilms.length);
		$scope.currentFilm=arrayFilms[randomNumber];
	}
});