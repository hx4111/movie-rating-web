import { faker } from "@faker-js/faker";
import { Movie, MovieComment } from "@/interface/movie";

function generateStars(n: number): string[] {
  let names: string[] = []
  for (let i=0; i<n; i++) {
    names.push(faker.person.fullName())
  }
  return names
}

function generateMovieComments(n: number): MovieComment[] {
  let comments: MovieComment[] = []
  for (let i=0; i<n; i++) {
    comments.push({
      dateTime: faker.date.past({years: 1}).toISOString().slice(0, 16).replace('T', ' '),
      content: "new movie comment " + i
    })
  }
  return comments
}

export function generateMovieList(numberOfMovies: number): Movie[] {
  const movies: Movie[] = [];

  for (let i = 0; i < numberOfMovies; i++) {
    const movie: Movie = {
      id: faker.string.uuid(),
      title: faker.lorem.words(4),
      date: faker.date.past({ years: 30 }).toISOString().slice(0, 16).replace('T', ' '),
      coverImage: faker.image.url({ width: 300, height: 500 }),
      posterImage: faker.image.url({ width: 1000, height: 500 }),
      director: faker.person.fullName(),
      rate: faker.number.float({ multipleOf: 0.1, min: 0.5, max: 10 }),
      ratingCount: faker.number.int({ min: 500, max: 1000000 }),
      description: "(random words)"+faker.word.words({ count: { min: 100, max: 200 } }),
      stars: generateStars(faker.number.int({ min: 3, max:10 })),
      comments: generateMovieComments(10),
    };
    movies.push(movie);
  }

  return movies;
}

const movieList = generateMovieList(15)

export default movieList
