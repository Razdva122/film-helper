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
	actionRating,fantasyRating,adventureRating,actors){
	this.title=title;
	this.year=year;
	this.rating=rating;
	this.info=info;


	this.dramaRating=dramaRating;
	this.comedyRating=comedyRating;
	this.actionRating=actionRating;
	this.fantasyRating=fantasyRating;
	this.adventureRating=adventureRating;

	this.actors=actors;
}

var shawshank=new Film("Побег из Шоушенка",1994,9.112,shawshankInfo,7,
	4,2,0,4,["Тим Роббинс","Морган Фриман","Боб Гантон"]);
var greenMile=new Film("Зеленая миля",1999,9.062,greenMileInfo,9,
	0,3,0,2,["Том Хэнкс","Дэвид Морс","Майкл Кларк Дункан"]);
var forrestGump=new Film("Форрест Гамп",1994,8.917,forrestGumpInfo,8,
	2,2,0,6,["Том Хэнкс","Робин Райт","Салли Филд"]);
var schindler=new Film("Список Шиндлера",1993,8.819,schindlerInfo,9,
	0,4,0,2,["Лиам Нисон","Бен Кингсли","Рэйф Файнс"]);
var onePlus=new Film("1+1",2011,8.810,onePlusInfo,6,
	6,1,0,1,["Франсуа Клюзе","Омар Си","Анн Ле Ни"]);
var leon=new Film("Леон",1994,8.682,leonInfo,6,
	1,7,1,2,["Жан Рено","Гари Олдман","Натали Портман"]);
var inception=new Film("Начало",2010,8.665,inceptionInfo,2,
	1,8,6,4,["Леонардо ДиКаприо","Джозеф Гордон-Левитт","Эллен Пейдж"]);
var lionKing=new Film("Король Лев",1994,8.774,lionKingInfo,5,
	4,1,9,7,["Мэттью Бродерик","Джереми Айронс","Нэйтан Лейн"]);
var fightClub=new Film("Бойцовский клуб",1999,8.650,fightClubInfo,5,
	0,7,3,1,["Эдвард Нортон","Брэд Питт","Хелена Бонем Картер"]);
var ivan=new Film("Иван Васильевич меняет профессию",1973,8.785,ivanInfo,2,
	8,3,7,7,["Александр Демьяненко","Юрий Яковлев","Леонид Куравлёв"]);

var arrayFilms=[shawshank,greenMile,forrestGump,schindler,
	onePlus,leon,inception,lionKing,fightClub,ivan];

