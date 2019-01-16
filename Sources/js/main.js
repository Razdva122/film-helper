

//Минимальное значение входит, максимальное нет
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getDataStorage(){
	if(getObject("favoriteActors")!=="InvalidKey"){
		favoriteActors=getObject("favoriteActors");
	}
	if(getObject("dislikeActors")!=="InvalidKey"){
		dislikeActors=getObject("dislikeActors");
	}
	if(getObject("randomActorss")!=="InvalidKey"){
		randomActors=getObject("randomActors");
	}
	if(getObject("filmsRanks")!=="InvalidKey"){
		filmsRanks=getObject("filmsRanks");
	}
	if(getObject("userGenre")!=="InvalidKey"){
		userGenre=getObject("userGenre");
	}
	if(getObject("filmForUser")!=="InvalidKey"){
		filmForUser=getObject("filmForUser");
	}
}

function saveDataStorage() {
	pushObject("favoriteActors",favoriteActors);
	pushObject("dislikeActors",dislikeActors);
	pushObject("randomActors",randomActors);
	pushObject("filmsRanks",filmsRanks);
	pushObject("userGenre",userGenre);
	pushObject("filmForUser",filmForUser);
}

var favoriteActors=[];//Актеры которые нравятся пользователю
var dislikeActors=[];//Актеры которые не нравятся пользователю
var randomActors=[];//Актеры которых предложим оценить пользователю
var filmsRanks=[];//Массив фильмов с рейтенгом для пользователя
var userGenre=new Object();//Параметры юзера по его запросам
var filmForUser=0;//Запоминаем сколько фильмов откинул юзер
//Адрес сайта
var address="file:///C:/Users/Dmitrii/Desktop/Film-helper/film-helper/";

$(document).ready(function(){
	getDataStorage();
});
angular.module("myApp",[])
.controller("firstCtrl",function ($scope) {
	$scope.startTest = function(){
		sessionStorage.clear();
		document.location.href = address+"sliders.html";
	}
	$scope.showFilm = function(){
		$scope.currentFilm=bestFilmForUser();
	}
	$scope.disFilm = function(){
		dontLikeFilm();
		$scope.currentFilm=bestFilmForUser();
	}
	$scope.showNext = function(){
		$scope.currentFilm=userPickNextFilm();
	}	
	$scope.pickGenresButton = function(){
			pickYourGenre($('#slider-vertical').slider("option", "value"),$('#slider-vertical2').slider("option", "value"),
				$('#slider-vertical3').slider("option", "value"),
				$('#slider-vertical4').slider("option", "value"),
				$('#slider-vertical5').slider("option", "value"));
			saveDataStorage();
			document.location.href = address + "pickFavoriteHero.html";
	}
	$scope.pickAgesButton = function(){
		pickYears([$("#slider-range").slider("values",0),$("#slider-range").slider("values",1)]);
		saveDataStorage();
		document.location.href = address + "pickFavoriteActors.html";
	}
	$scope.pickTypeButton = function(){
		if($("#mens").is(':checked')){
			pickType("Мужской");
		}else if($("#girls").is(':checked')){
			pickType("Женский");
		}else if($("#family").is(':checked')){
			pickType("Семейный");
		}else{
			pickType("null");
		}
		saveDataStorage();
		document.location.href = address + "Years.html";
	}
	$scope.generateRandomActors = function(){
		showRandomActors();
		let currentActors=getActorsFromBase();
		$scope.inBrowserActors=currentActors;
		let nameOfImage1="sources/img/actors/"+currentActors[0].photo+".jpg";
		$("#firstActor").attr("src",nameOfImage1);
		let nameOfImage2="sources/img/actors/"+currentActors[1].photo+".jpg";
		$("#secondActor").attr("src",nameOfImage2);
		let nameOfImage3="sources/img/actors/"+currentActors[2].photo+".jpg";
		$("#thirdActor").attr("src",nameOfImage3);
		let nameOfImage4="sources/img/actors/"+currentActors[3].photo+".jpg";
		$("#fourthActor").attr("src",nameOfImage4);
	}
	$scope.likeDislikeActors = function(){
		let resultLikes=[];
		if($("#likeOne").is(':checked')){
			resultLikes.push("like");
		}else if($("#dislikeOne").is(':checked')){
			resultLikes.push("dislike");
		}else{
			resultLikes.push("null");
		}
		if($("#likeTwo").is(':checked')){
			resultLikes.push("like");
		}else if($("#dislikeTwo").is(':checked')){
			resultLikes.push("dislike");
		}else{
			resultLikes.push("null");
		}
		if($("#likeThree").is(':checked')){
			resultLikes.push("like");
		}else if($("#dislikeThree").is(':checked')){
			resultLikes.push("dislike");
		}else{
			resultLikes.push("null");
		}if($("#likeFour").is(':checked')){
			resultLikes.push("like");
		}else if($("#dislikeFour").is(':checked')){
			resultLikes.push("dislike");
		}else{
			resultLikes.push("null");
		}
		pickFavoriteActor(resultLikes);
		saveDataStorage();
		document.location.href = address + "resultFilm.html";

	}
	$scope.pickHeroButton =function() {
		if($("#radiojack").is(':checked')){
			pickFavoriteHero(1);
		}else if($("#radiojohn").is(':checked')){
			pickFavoriteHero(2);
		}else if($("#radiocooper").is(':checked')){
			pickFavoriteHero(3);
		}else if($("#radioventura").is(':checked')){
			pickFavoriteHero(4);
		}
		saveDataStorage();
		document.location.href = address + "pickGenre.html";
	}
});

/**
 * Функции для работы с локальным хранилищем
 */


function pushObject(key,data) {
	sessionStorage.setItem(key,JSON.stringify(data));
}
function getObject(key) {
	if (sessionStorage.getItem(key) !== null) {
		return JSON.parse(sessionStorage.getItem(key));	
	}else{
		return "InvalidKey";
	}		
}

/**
 * Конструктор обьектов результат фильма.
 * Подразумевает собой фильм + на сколько фильм подходит юзеру.
 * 0 - идеально подходит в данном жанре 10 - совсем не подходит.
 * 
 * @param {film} [film] обьект фильма 
 * @param {number} [жанры] число от 0 до 10 на сколько 
 *                         желание юзера сходится с жанром фильма
 */

function FilmResult(film,drama,comedy,action,fantasy,adventure,
	actorsRating,typeRating,yearsRating){
	this.film=film;

	this.drama=Number(drama);
	this.comedy=Number(comedy);
	this.action=Number(action);
	this.fantasy=Number(fantasy);
	this.adventure=Number(adventure);

	this.actorsRating=actorsRating;

	this.typeRating=typeRating;

	this.yearsRating=yearsRating;

	this.total=(this.drama+this.comedy+this.action
		+this.fantasy+this.adventure)*actorsRating
		*typeRating*yearsRating+(20*this.film.dislike);
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

		for(var x=0;x<favoriteActors.length;x++){
			if(arrayFilms[i].actors.includes(favoriteActors[x])){
				favoriteRank++;
			}
		}

		for(var y=0;y<dislikeActors.length;y++){
			if(arrayFilms[i].actors.includes(dislikeActors[y])){
				unfavoriteRank++;
			}
		}

		filmResult[6]=1-(favoriteRank*0.1)+(unfavoriteRank*0.1);

		if (userGenre.type=="Женский") {
			filmResult[7]=1-(arrayFilms[i].typeGirls*0.25);
		}else if(userGenre.type=="Мужской"){
			filmResult[7]=1-(arrayFilms[i].typeGuys*0.25);
		}else if(userGenre.type=="Семейный"){
			filmResult[7]=1-(arrayFilms[i].typeFamily*0.25);
		}else{
			filmResult[7]=1;
		}

		if(arrayFilms[i].year>userGenre.startYear && arrayFilms[i].year<userGenre.endYear){
			filmResult[8]=0.8;
		}else{
			filmResult[8]=1;
		}

		var currentFilmResult=new FilmResult(filmResult[0],filmResult[1],
			filmResult[2],filmResult[3],filmResult[4],filmResult[5],
			filmResult[6],filmResult[7],filmResult[8])

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
	return filmsRanks[filmForUser].film;
}
/*Пропускает фильм
 *Показывает следующий в рейтинге для человека
 */
function userPickNextFilm(){
	if(filmForUser==(arrayFilms.length-1)){
		console.log("Фильмы закончились");
	}else{
		filmForUser++;
	}
	return bestFilmForUser();
}
/*Ставит дизлайк на фильм(сильно понижает его в рейтинге)
 *Изменяет коэфиценты жанров
 */
function dontLikeFilm(){
	var currentFilm=filmsRanks[filmForUser].film;
	for(var i=0;i<arrayFilms.length;i++){
		if(filmsRanks[filmForUser].film.title===arrayFilms[i].title){
			arrayFilms[i].dislike=true;
		}
	}
	filmForUser=0;
	console.log(currentFilm);
	userGenre.drama=userGenre.drama+reworkRating(currentFilm.dramaRating);
	userGenre.comedy=userGenre.comedy+reworkRating(currentFilm.comedyRating);
	userGenre.action=userGenre.action+reworkRating(currentFilm.actionRating);
	userGenre.fantasy=userGenre.fantasy+reworkRating(currentFilm.fantasyRating);
	userGenre.adventure=userGenre.adventure+reworkRating(currentFilm.adventureRating);
	fixGenreStats();
}
/**
 * Изменяем все рейтинги если человеку не понравился фильм
 * @param  {[Number]} rating получаем рейтинг жанра
 * @return {[Number]}        возвращаем изменение для этого ранга
 */
function reworkRating(rating){
	if(rating>6){
		return -0.5;
	}else if(rating>4){
		return 0;
	}else{
		return 0.5;
	}

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
	}else{
		return;
	}
	fixGenreStats();
}
/*
 *Чинит значения жанров которые нравятся человеку
 *Округляя значение до двух чисел после запятой
 *Возвращает значения в границы от 0 до 10
 */
function fixGenreStats(){
	for(var key in userGenre){
		if(!isNaN(userGenre[key])){
			if(userGenre[key]>10){
				userGenre[key]=10;
			}else if(userGenre[key]<0){
				userGenre[key]=0;
			}else{
				userGenre[key]=Number((userGenre[key]).toFixed(2));
			}
		}
	}
}
/*
 *Рандомит 4х случайных главных героев
 *которых мы предложим юзеру
 *проверяет что бы актер не повторялся в списке
 */
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
/**
 * Используем список имен, случайных актеров
 * Находим 
 * @return {[array]} возвращает массив обьектов типа Актер
 */
function getActorsFromBase(){
	var actorBase=[];
	for (var y=0;y<randomActors.length;y++){
		for (var i=0;i<arrayActors.length;i++){
			if(arrayActors[i].name===randomActors[y]){
				actorBase.push(arrayActors[i]);
			}
		}
	}
	return actorBase;
}
/*
 * Функция выбора любимых/нелюбимых актеров
 * на вход принимает массив содержаший "like","dislike" или "null"
 * по отношению к каждому актеру
 */

function pickFavoriteActor(result) {
	for(var i=0;i<result.length;i++){
		if(result[i]=="like"){
			favoriteActors.push(randomActors[i]);
		}else if(result[i]=="dislike"){
			dislikeActors.push(randomActors[i]);
		}
	}
}
/**
 * Узнаем какой тип фильмов интересен человеку
 * @param  {[string]} type Строка содержащая "Женский","Мужской","Семейный";
 * Сохраняем в информацию по юзеру;
 */
function pickType(type){
	userGenre.type=type;
}
/**
 * Получаем данные от пользователя каких годов ему интересны фильмы
 * @param  {[array]} years Массив на 0 позиции от какого года и на 1 до какого
 */
function pickYears(years) {
	userGenre.startYear=years[0];
	userGenre.endYear=years[1];
}