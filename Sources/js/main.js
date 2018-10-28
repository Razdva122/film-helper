function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var filmsRanks=[];

$(document).ready(function(){
	//$(".header").css("border","3px solid red");
});
angular.module("myApp",[])
.controller("firstCtrl",function ($scope) {
	$scope.randomFilm = function(){
		//var randomNumber=getRandomInt(0,arrayFilms.length);
		//$scope.currentFilm=arrayFilms[randomNumber];
		$scope.currentFilm=bestFilmForUser()[0];
	}
});

function pickYourGenre(drama,comedy,action,fantasy,adventure){
	for(var i=0;i<arrayFilms.length;i++){
		var filmResult=[];
		filmResult[0]=arrayFilms[i];
		filmResult[1]=Math.abs(arrayFilms[i].dramaRating-drama);
		filmResult[2]=Math.abs(arrayFilms[i].comedyRating-comedy);
		filmResult[3]=Math.abs(arrayFilms[i].actionRating-action);
		filmResult[4]=Math.abs(arrayFilms[i].fantasyRating-fantasy);
		filmResult[5]=Math.abs(arrayFilms[i].adventureRating-adventure);
		filmsRanks.push(filmResult);
	}

}

function bestFilmForUser(){
	var bestFilmPick=filmsRanks[0];
	for(var i=1;i<arrayFilms.length;i++){
		var resultOfCurrentBestFilm=bestFilmPick[1]+bestFilmPick[2]+
			bestFilmPick[3]+bestFilmPick[4]+bestFilmPick[5];
		var resultCurrentFilm=filmsRanks[i][1]+filmsRanks[i][2]+
			filmsRanks[i][3]+filmsRanks[i][4]+filmsRanks[i][5];
		if(resultCurrentFilm<resultOfCurrentBestFilm){
			bestFilmPick=filmsRanks[i];
		}		
	}
	return bestFilmPick;
}