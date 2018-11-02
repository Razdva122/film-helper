/**
 * To do list!
 * 1.Выдача фильма с 3 результатами: Подойдет, Не хочу смотреть, Не нравится совсем
 * 1а)Изменение коэфицентов фильма при ответе не нравится совсем
 *    жанр от 0 до 4 +0.5 от 6 до 10 - 0.5
 *    +++2.В каждый фильм внести 3 актера
 * 2а)Сделать вопрос на выбор актера(нравится,воздержусь,не нравится)
 * 2аа)Создать базу данных со всеми актерами
 * 2б)Создать базу юзера по актерам
 * 2в)Учитывать актеров при подборе фильмов
 * 3.Сделать разделение фильмов на мужской,женский,семейный
 * 3а)Сделать вопрос какие пункты подходят человеку
 * 3б)Учитывать эти пункты при подборе фильма
 * 4.Сделать вопрос на фильм каких годов хотел бы посмотреть человек
 */




function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var favoriteActors=[];//Актеры которые нравятся пользователю
var dislikeActors=[];//Актеры которые не нравятся пользователю
var filmsRanks=[];//Массив фильмов с рейтенгом для пользователя
var userGenre=new Object();//Параметры юзера по его запросам

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
 * Сравнивает результаты пользователя с базой данных по фильмам.
 * Создает обьект FilmResult и добавляет его в массив filmsRanks.
 * 
 * @param {Object} [жанры] обьект содержаший число от 0 до 10
 *						   на сколько юзеру интересен жанр
 *                         0 - очень интересен, 10-совсем не интересен
 */

function userСhoices () {
	filmsRanks=[];
	for(var i=0;i<arrayFilms.length;i++){
		var filmResult=[];
		filmResult[0]=arrayFilms[i];
		filmResult[1]=Math.abs(arrayFilms[i].dramaRating-userGenre.drama).toFixed(2);
		filmResult[2]=Math.abs(arrayFilms[i].comedyRating-userGenre.comedy).toFixed(2);
		filmResult[3]=Math.abs(arrayFilms[i].actionRating-userGenre.action).toFixed(2);
		filmResult[4]=Math.abs(arrayFilms[i].fantasyRating-userGenre.fantasy).toFixed(2);
		filmResult[5]=Math.abs(arrayFilms[i].adventureRating-userGenre.adventure).toFixed(2);

		var currentFilmResult=new FilmResult(filmResult[0],filmResult[1],
			filmResult[2],filmResult[3],filmResult[4],filmResult[5])

		filmsRanks.push(currentFilmResult);
	}
}

/**
 * После первого вопрос формируем изначальную структуру
 * В последующих вопросах уточним жанры
 * 
 * @param {number} [жанры] обьект содержаший число от 0 до 10
 *						   на сколько юзеру интересен жанр
 *                         10 - очень интересен, 0-совсем не интересен
 */
function pickYourGenre(drama,comedy,action,fantasy,adventure){
	userGenre.drama=drama;
	userGenre.comedy=comedy;
	userGenre.action=action;
	userGenre.fantasy=fantasy;
	userGenre.adventure=adventure;
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
 * Создает массив с результатми всех фильмов.
 * Сортирует массив и возвращает наиболее подходяший фильм.
 * @return {[film]} возвращает обьект фильм.
 */
function bestFilmForUser() {
	userСhoices ();
	sortFilms();
	return filmsRanks[0].film;
}
/**
 * Уточняет коэфиценты жанров предлагая человеку выбрать главного героя.
 * @param {number} [pick]выбор гг, который подходит по духу человеку
 * 1-Капитан джек воробей
 * 2-Джон Уик
 * 3-Купер(интерстеллар)
 * 4-Эйс Вентура
 */
function pickFavoriteHero(pick){	
	if(pick===1){
		userGenre.drama=userGenre.drama*1.1;
		userGenre.comedy=userGenre.comedy*0.9;
		userGenre.action=userGenre.action*1;
		userGenre.fantasy=userGenre.fantasy*0.9;
		userGenre.adventure=userGenre.adventure*0.8;
	}else if(pick===2){
		userGenre.drama=userGenre.drama*0.9;
		userGenre.comedy=userGenre.comedy*1.1;
		userGenre.action=userGenre.action*0.8;
		userGenre.fantasy=userGenre.fantasy*1.1;
		userGenre.adventure=userGenre.adventure*1;
	}else if(pick===3){
		userGenre.drama=userGenre.drama*0.8;
		userGenre.comedy=userGenre.comedy*1.2;
		userGenre.action=userGenre.action*1.1;
		userGenre.fantasy=userGenre.fantasy*0.9;
		userGenre.adventure=userGenre.adventure*1;
	}else if(pick===4){
		userGenre.drama=userGenre.drama*1.2;
		userGenre.comedy=userGenre.comedy*0.8;
		userGenre.action=userGenre.action*1.1;
		userGenre.fantasy=userGenre.fantasy*1;
		userGenre.adventure=userGenre.adventure*0.9;
	}
}
/*
 *Чинит значения жанров которые нравятся человеку
 *Округляя значение до двух чисел после запятой
 *Возвращает значения в границы от 0 до 10
 */
function fixGenreStats(){
	for(var key in userGenre){
		if(userGenre[key]>10){
			userGenre[key]=10;
		}else if(userGenre[key]<0){
			userGenre[key]=0;
		}else{
			userGenre[key]=Number((userGenre[key]).toFixed(2));
		}
	}
}


