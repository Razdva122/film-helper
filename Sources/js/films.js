/**
 * Конструктор обьектов фильм
 * @param {[string]} title           Название фильма
 * @param {[number]} year            Год выпуска фильма
 * @param {[number]} rating          Рейтинг фильма по кинопоиску
 * @param {[string]} info            Описание фильма
 * Рейтинг от 0 до 10 на сколько фильм подходит под конкретный жанр
 * @param {[number]} dramaRating     Драма
 * @param {[number]} comedyRating    Комедия
 * @param {[number]} actionRating    Экшн(Боевик)
 * @param {[number]} fantasyRating   Фантастика
 * @param {[number]} adventureRating Приключение
 */
function Film(title,year,rating,info,dramaRating,comedyRating,
	actionRating,fantasyRating,adventureRating){
	this.title=title;
	this.year=year;
	this.rating=rating;
	this.info=info;
	this.dramaRating=dramaRating;
	this.comedyRating=comedyRating;
	this.actionRating=actionRating;
	this.fantasyRating=fantasyRating;
	this.adventureRating=adventureRating;
}

var shawshank=new Film("Побег из Шоушенка",1994,9.112,shawshankInfo,7,
	4,2,0,4);
var greenMile=new Film("Зеленая миля",1999,9.062,greenMileInfo,9,
	0,3,0,2);
var forrestGump=new Film("Форрест Гамп",1994,8.917,forrestGumpInfo,8,
	2,2,0,6);

var arrayFilms=[shawshank,greenMile,forrestGump];

