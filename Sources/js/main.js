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
		$scope.currentFilm=bestFilmForUser();
	}
});

/**
 * Конструктор обьектов результат фильма.
 * Подразумевает собой фильм + на сколько фильм подходит юзеру.
 * 0 - идеально подходит в данном жанре 10 - совсем не подходит.
 * 
 * @param {film} [film] обьект фильма 
 * @param {number} [жанры] число от 0 до 10 на сколько 
 *                         желание юзера сходится с жанром фильма
 */

function FilmResult(film,drama,comedy,action,fantasy,adventure){
	this.film=film;

	this.drama=drama;
	this.comedy=comedy;
	this.action=action;
	this.fantasy=fantasy;
	this.adventure=adventure;

	this.total=this.drama+this.comedy+this.action+this.fantasy+this.adventure;
}

/**
 * Сравнивает ответы пользователя с базой данных по фильмам.
 * Создает обьект FilmResult и добавляет его в массив filmsRanks.
 * 
 * @param {number} [жанры] число от 0 до 10 на сколько юзеру интересен жанр
 */

function pickYourGenre(drama,comedy,action,fantasy,adventure){
	filmsRanks=[];
	for(var i=0;i<arrayFilms.length;i++){
		var filmResult=[];
		filmResult[0]=arrayFilms[i];
		filmResult[1]=Math.abs(arrayFilms[i].dramaRating-drama);
		filmResult[2]=Math.abs(arrayFilms[i].comedyRating-comedy);
		filmResult[3]=Math.abs(arrayFilms[i].actionRating-action);
		filmResult[4]=Math.abs(arrayFilms[i].fantasyRating-fantasy);
		filmResult[5]=Math.abs(arrayFilms[i].adventureRating-adventure);

		var currentFilmResult=new FilmResult(filmResult[0],filmResult[1],
			filmResult[2],filmResult[3],filmResult[4],filmResult[5])

		filmsRanks.push(currentFilmResult);
	}

}

/**
 * Сортирует фильмы в массиве filmsRanks
 * По значению total(Сумма значений совместимости всех жанров).
 * Чем total меньше(ближе к 0) тем лучше фильм подходит юзеру
 */

function sortFilms(){
	filmsRanks.sort(function(a, b){
		var totalA=a.total, totalB=b.total;
	 	if (totalA < totalB){ //sort string ascending
	  		return -1;
	  	}
	 	if (totalA > totalB){
	  		return 1;
	  	}
		return 0; //default return value (no sorting)
	});
}
/**
 * Сортирует массив и возвращает наиболее подходяший фильм.
 * @return {[film]} возвращает обьект фильм.
 */
function bestFilmForUser() {
	sortFilms();
	return filmsRanks[0].film;
}