var movies = [
  {
    title: "Inception",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "Endgame",
    rating: 4.8,
    hasWatched: true,
  },
  {
    title: "Perks of Being a Wallflower",
    rating: 4,
    hasWatched: false,
  },
  {
    title: "ZNMD",
    rating: 4.5,
    hasWatched: true,
  },
];

// solution using forEach

function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched === true) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += '"' + movie.title + '"' + " - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function (movie) {
  console.log(buildString(movie));
});

//solution using for loop

// for (var i = 0; i < movies.length; i++) {
//   if (movies[i].hasWatched === true) {
//     console.log(
//       "You have watched " +
//         movies[i].title +
//         " - " +
//         movies[i].rating +
//         " stars"
//     );
//   } else {
//     console.log(
//       "You have not seen " +
//         movies[i].title +
//         " - " +
//         movies[i].rating +
//         " stars"
//     );
//   }
// }
