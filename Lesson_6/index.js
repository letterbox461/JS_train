const myFavoriteFilm = {
  name: "Full Metal Jacket",
  year: "1979",
  countryOfOrigin: "USA",
  director: "Stanley Kubrick",
};
myFavoriteFilm.cash = "$overflow";
(myFavoriteFilm.clName = function () {
  console.log("Full Metal Jacket");
}),
  myFavoriteFilm.clName();

delete myFavoriteFilm.year;

console.log(myFavoriteFilm);
