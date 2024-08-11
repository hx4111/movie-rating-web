import { Movie } from "@/interface/movie";
import mockdata from "@/mocks/data";

const movieList = mockdata

export function getMovieList(): Movie[] {
  return movieList
}

export function getMovieDetail(id:string): Movie {
  let movie = movieList.find(movie => movie.id == id)
  if (!movie) {
    movie = movieList[0]
  }
  return movie
}

export function searchMovie(name:string): Movie[] {
  const movies = movieList.filter(movie => movie.title.toLowerCase().includes(name.toLowerCase()))
  return movies
}