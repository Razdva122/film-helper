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
	actionRating,fantasyRating,adventureRating,actors,type){
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

	this.dislike=false;

	this.typeGirls=type[0];
	this.typeGuys=type[1];
	this.typeFamily=type[2];

}

function Actor(name,photo,genres,bestFilms){
	this.name = name;
	this.photo = photo;
	this.genres = genres;
	this.bestFilms = bestFilms;
}

var shawshank=new Film("Побег из Шоушенка",1994,9.112,shawshankInfo,7,
	4,2,0,4,["Тим Роббинс","Морган Фриман","Боб Гантон"],[0.8,0.9,0.3]);
var greenMile=new Film("Зеленая миля",1999,9.062,greenMileInfo,9,
	0,3,0,2,["Том Хэнкс","Дэвид Морс","Майкл Кларк Дункан"],[0.9,0.9,0.1]);
var forrestGump=new Film("Форрест Гамп",1994,8.917,forrestGumpInfo,8,
	2,2,0,6,["Том Хэнкс","Робин Райт","Салли Филд"],[0.9,0.9,0.1]);
var schindler=new Film("Список Шиндлера",1993,8.819,schindlerInfo,9,
	0,4,0,2,["Лиам Нисон","Бен Кингсли","Рэйф Файнс"],[0.9,0.9,0.1]);
var onePlus=new Film("1+1",2011,8.810,onePlusInfo,6,
	6,1,0,1,["Франсуа Клюзе","Омар Си","Анн Ле Ни"],[1,1,0.6]);
var leon=new Film("Леон",1994,8.682,leonInfo,6,
	1,7,1,2,["Жан Рено","Гари Олдман","Натали Портман"],[0.8,1,0.3]);
var inception=new Film("Начало",2010,8.665,inceptionInfo,2,
	1,8,6,4,["Леонардо ДиКаприо","Джозеф Гордон-Левитт","Эллен Пейдж"],[0.8,1,0.4]);
var lionKing=new Film("Король Лев",1994,8.774,lionKingInfo,5,
	4,1,9,7,["Мэттью Бродерик","Джереми Айронс","Нэйтан Лейн"],[0.9,0.5,1]);
var fightClub=new Film("Бойцовский клуб",1999,8.650,fightClubInfo,5,
	0,7,3,1,["Эдвард Нортон","Брэд Питт","Хелена Бонем Картер"],[0.6,1,0.1]);
var ivan=new Film("Иван Васильевич меняет профессию",1973,8.785,ivanInfo,2,
	8,3,7,7,["Александр Демьяненко","Юрий Яковлев","Леонид Куравлёв"],[0.8,0.8,0.8]);

var arrayFilms=[shawshank,greenMile,forrestGump,schindler,
	onePlus,leon,inception,lionKing,fightClub,ivan];

var timRobbins=new Actor("Тим Роббинс","timRobbins","Драма,Комедия,Мелодрама",
	"Побег из Шоушенка,Субботним вечером в прямом эфире,На грани");
var morganFreeman=new Actor("Морган Фриман","morganFreeman","Драма,Триллер,Боевик",
	"Побег из Шоушенка,Темный рыцарь,Семь");
var bobGunton=new Actor("Боб Гантон","bobGunton","Драма,Триллер,Комедия",
	"Побег из Шоушенка,Сорвиголова,Менталист");
var tomHanks=new Actor("Том Хэнкс","tomHanks","Комедия,Драма,Фэнтези",
	"Зеленая миля,Форрест Гамп,Поймай меня, если сможешь");
var davidMorse=new Actor("Дэвид Морс","davidMorse","Драма,Триллер,Криминал",
	"Зеленая миля,Доктор Хаус,Настоящий детектив");
var michaelClarkeDuncan=new Actor("Майкл Кларк Дункан","michaelClarkeDuncan",
	"Комедия,Боевик,Приключения","Зеленая миля,Кости,Чак");
var robinWright= new Actor("Робин Райт","robinWright","Драма,Триллер,Мелодрама",
	"Форрест Гамп,Карточный домик,Девушка с татуировкой дракона");
var sallyField= new Actor("Салли Филд","sallyField","Драма,Комедия,Мелодрама",
	"Форрест Гамп,Миссис Даутфай,Маньяк");
var liamNeeson= new Actor("Лиам Нисон","liamNeeson","Драма,Триллер,Боевик",
	"Список Шиндлера,Если наступит завтра,Темный рыцарь: Возрождение легенды");
var benKingsley= new Actor("Бен Кингсли","benKingsley","Драма,Триллер,Комедия",
	"Список Шиндлера,Остров проклятых,Счастливое число Слевина");
var ralphFiennes= new Actor("Рэйф Файнс","ralphFiennes","Драма,Триллер,Приключения",
	"Список Шиндлера,Гарри Поттер и Дары Смерти: Часть II,Чтец");
var francoisCluzet= new Actor("Франсуа Клюзе","francoisCluzet","Драма,Комедия,Триллер",
	"1+1,Французский поцелуй,Не говори никому");
var omarSy= new Actor("Омар Си","omarSy","Комедия,Драма,Приключения",
	"1+1,Люди Икс: Дни минувшего будущего,2+1");
var anneLeNy= new Actor("Анн Ле Ни","anneLeNy","Драма,Комедия,Криминал",
	"1+1,Мой лучший друг,Мой Аттила Марсель");
var jeanReno= new Actor("Жан Рено","jeanReno","Комедия,Драма,Криминал",
	"Леон,Голубая бездна,Невезучие");
var garyOldman= new Actor("Гари Олдман","garyOldman","Драма,Триллер,Боевик",
	"Леон,Темный рыцарь,Темный рыцарь: Возрождение легенды");
var nataliePortman=new Actor("Натали Портман","nataliePortman","Драма,Комедия,Мелодрама",
	"Леон,Правда,Звёздные войны: Эпизод 3");
var leonardoDiCaprio=new Actor("Леонардо ДиКаприо","leonardoDiCaprio",
	"Драма,Триллер,Криминал","Начало,'Поймай меня, если сможешь',Остров проклятых");
var josephGordonLevitt=new Actor("Джозеф Гордон-Левитт","josephGordonLevitt",
	"Драма,Комедия,Триллер","Начало,Темный рыцарь: Возрождение легенды,Квантовый скачок");
var ellenPage=new Actor("Эллен Пейдж","ellenPage","Драма,Комедия,Триллер",
	"Начало,Люди Икс: Дни минувшего будущего,Американское преступление");
var matthewBroderick=new Actor("Мэттью Бродерик","matthewBroderick",
	"Комедия,Драма,Мелодрама","Король Лев,Время приключений,Американская семейка");
var jeremyIrons=new Actor("Джереми Айронс","jeremyIrons","Драма,Мелодрама,Приключения",
	"Король Лев,Симпсоны,Пустая корона");
var nathanLane=new Actor("Нэйтан Лейн","nathanLane","Комедия,Драма,Семейный",
	"Король Лев,Американская семейка,Секс в большом городе");
var edwardNorton=new Actor("Эдвард Нортон","edwardNorton","Драма,Комедия,Криминал",
	"Бойцовский клуб,Американская история X,Американская семейка");
var bradPitt=new Actor("Брэд Питт","bradPitt","Драма,Комедия,Криминал",
	"Бойцовский клуб,Большой куш,Семь");
var helenaBonhamCarter=new Actor("Хелена Бонем Картер","helenaBonhamCarter",
	"Бойцовский клуб,Корона,Гарри Поттер и Дары Смерти: Часть II");
var alexanderDemyanenko=new Actor("Александр Демьяненко","alexanderDemyanenko",
	"Драма,Комедия,Мелодрама","Семнадцать мгновений весны,Михайло Ломоносов,Иван Васильевич меняет профессию");
var yriiYakovlev=new Actor("Юрий Яковлев","yriiYakovlev","Драма,Комедия,Мультфильм",
	"Иван Васильевич меняет профессию,Опасный поворот,'Ирония судьбы, или С легким паром!'");
var leonidKuravlev=new Actor("Леонид Куравлёв","leonidKuravlev","Комедия,Драма,Мелодрама",
	"Место встречи изменить нельзя,Семнадцать мгновений весны,Иван Васильевич меняет профессию");


var arrayActors=[timRobbins,morganFreeman,bobGunton,tomHanks,davidMorse,michaelClarkeDuncan,
	robinWright,sallyField,liamNeeson,benKingsley,ralphFiennes,francoisCluzet,
	omarSy,anneLeNy,jeanReno,garyOldman,nataliePortman,leonardoDiCaprio,josephGordonLevitt,
	ellenPage,matthewBroderick,jeremyIrons,nathanLane,edwardNorton,bradPitt,helenaBonhamCarter,
	alexanderDemyanenko,yriiYakovlev,leonidKuravlev];
