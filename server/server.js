const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movieList = [
      { "Title":"The Hobbit: An Unexpected Journey",
        "Released":"2012-12-14",
        "Runtime":169,
        "Genres":["Adventure","Fantasy"],
        "Directors":["Peter Jackson", "hallo bla"],
        "Writers":["Fran Walsh", "Philippa Boyens", "Peter Jackson"],
        "Actors":["Martin Freeman", "Ian McKellen", "Richard Armitage"],
        "Plot":"A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it from the dragon Smaug.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
        "Metascore":58,
        "imdbRating":7.8
      },
      { "Title":"The Lord of the Rings: The Fellowship of the Ring",
        "Released":"2001-12-19",
        "Runtime":178,
        "Genres":["Adventure", "Drama", "Fantasy"],
        "Directors":["Peter Jackson"],
        "Writers":["J.R.R. Tolkien", "Fran Walsh", "Philippa Boyens"],
        "Actors":["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        "Plot":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore":92,
        "imdbRating":8.9
      },
      { "Title":"The Lord of the Rings: The Two Towers",
        "Released":"2002-12-18",
        "Runtime":179,
        "Genres":["Adventure", "Drama", "Fantasy"],
        "Directors":["Peter Jackson"],
        "Writers":["J.R.R. Tolkien", "Fran Walsh", "Philippa Boyens"],
        "Actors":["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        "Plot":"While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore":87,
        "imdbRating":8.8
      }
  ];

  res.send(movieList)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

