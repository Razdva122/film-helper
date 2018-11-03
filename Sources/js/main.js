/**
 * To do list!
 * 1.Выдача фильма с 3 результатами: Подойдет, Не хочу смотреть, Не нравится совсем
 * 1а)Изменение коэфицентов фильма при ответе не нравится совсем
 *    жанр от 0 до 4 +0.5 от 6 до 10 - 0.5
 *    +++2.В каждый фильм внести 3 актера
 *    +++2а)Сделать вопрос на выбор актера(нравится,воздержусь,не нравится)
 *    +++2аа)Создать базу данных со всеми актерами
 *    +++2б)Создать базу юзера по актерам
 * 2в)Учитывать актеров при подборе фильмов
 * 3.Сделать разделение фильмов на мужской,женский,семейный
 * 3а)Сделать вопрос какие пункты подходят человеку
 * 3б)Учитывать эти пункты при подборе фильма
 * 4.Сделать вопрос на фильм каких годов хотел бы посмотреть человек
 */



//Минимальное значение входит, максимальное нет
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var favoriteActors=[];//Актеры которые нравятся пользователю
var dislikeActors=[];//Актеры которые не нравятся пользователю
var randomActors=[];//Актеры которых предложим оценить пользователю
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

function FilmResult(film,drama,comedy,action,fantasy,adventure,actorsRating){
	this.film=film;

	this.drama=Number(drama);
	this.comedy=Number(comedy);
	this.action=Number(action);
	this.fantasy=Number(fantasy);
	this.adventure=Number(adventure);

	this.actorsRating=actorsRating;

	this.total=(this.drama+this.comedy+this.action
		+this.fantasy+this.adventure)*actorsRating;
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

		var favoriteRank=0;
		var unfavoriteRank=0;

		for(var counter1=0;counter1<favoriteActors.length;counter1++){
			if(arrayFilms[i].actors.includes(favoriteActors[counter1])){
				favoriteRank++;
				console.log(favoriteRank);
			}
		}

		for(var counter2=0;counter2<dislikeActors.length;counter2++){
			if(arrayFilms[i].actors.includes(dislikeActors[counter2])){
				unfavoriteRank++;
			}
		}

		filmResult[6]=1+(favoriteRank*0.1)-(unfavoriteRank*0.1);
		console.log(filmResult[6]+" Result");

		var currentFilmResult=new FilmResult(filmResult[0],filmResult[1],
			filmResult[2],filmResult[3],filmResult[4],filmResult[5],filmResult[6])

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
	if(pick==1){
		userGenre.drama=userGenre.drama*0.9;
		userGenre.comedy=userGenre.comedy*1.1;
		userGenre.action=userGenre.action*1;
		userGenre.fantasy=userGenre.fantasy*1.1;
		userGenre.adventure=userGenre.adventure*1.2;
		favoriteActors.push("Джонни Депп");
	}else if(pick==2){
		userGenre.drama=userGenre.drama*1.1;
		userGenre.comedy=userGenre.comedy*0.9;
		userGenre.action=userGenre.action*1.2;
		userGenre.fantasy=userGenre.fantasy*0.9;
		userGenre.adventure=userGenre.adventure*1;
		favoriteActors.push("Киану Ривз");
	}else if(pick==3){
		userGenre.drama=userGenre.drama*1.2;
		userGenre.comedy=userGenre.comedy*0.8;
		userGenre.action=userGenre.action*0.9;
		userGenre.fantasy=userGenre.fantasy*1.1;
		userGenre.adventure=userGenre.adventure*1;
		favoriteActors.push("Мэттью МакКонахи");
	}else if(pick==4){
		userGenre.drama=userGenre.drama*0.8;
		userGenre.comedy=userGenre.comedy*1.2;
		userGenre.action=userGenre.action*0.9;
		userGenre.fantasy=userGenre.fantasy*1;
		userGenre.adventure=userGenre.adventure*1.1;
		favoriteActors.push("Джим Керри");
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
function showRandomActors() {
	randomActors=[];
	for(;;){
		var actor=arrayFilms[getRandomInt(0, arrayFilms.length)].actors[getRandomInt(0, 3)];
		if(!randomActors.includes(actor)){
			randomActors.push(actor);
		}
		if(randomActors.length===4){
			break;
		}
	}
}
function pickFavoriteActor(result) {
	for(var i=0;i<result.length;i++){
		if(result[i]=="like"){
			favoriteActors.push(randomActors[i]);
		}else if(result[i]=="dislike"){
			dislikeActors.push(randomActors[i]);
		}
	}
}

