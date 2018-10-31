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
var schindler=new Film("Список Шиндлера",1993,8.819,schindlerInfo,9,
	0,4,0,2);
var onePlus=new Film("1+1",2011,8.810,onePlusInfo,6,
	6,1,0,1);
var leon=new Film("Леон",1994,8.682,leonInfo,6,
	1,7,1,2);
var inception=new Film("Начало",2010,8.665,inceptionInfo,2,
	1,8,6,4);
var lionKing=new Film("Король Лев",1994,8.774,lionKingInfo,5,
	4,1,9,7);
var fightClub=new Film("Бойцовский клуб",1999,8.650,fightClubInfo,5,
	0,7,3,1);
var ivan=new Film("Иван Васильевич меняет профессию",1973,8.785,ivanInfo,2,
	8,3,7,7);

var arrayFilms=[shawshank,greenMile,forrestGump,schindler,
	onePlus,leon,inception,lionKing,fightClub,ivan];

