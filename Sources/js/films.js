function Film(title,year,rating,info){
	this.title=title;
	this.year=year;
	this.rating=rating;
	this.info=info;
}

var shawshank=new Film("Побег из Шоушенка",1994,9.112,shawshankInfo);
var greenMile=new Film("Зеленая миля",1999,9.062,greenMileInfo);
var forrestGump=new Film("Форрест Гамп",1994,8.917,forrestGumpInfo);

var arrayFilms=[shawshank,greenMile,forrestGump];