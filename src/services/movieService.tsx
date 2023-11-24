import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

type IGenre = {
    id: number;
    name: String;

}
type IMovie = {
    id: number;
    name: String;
    desc: String;
    genre_ids: Array<number>;
}

const genres: IGenre[] = require('../assets/data/genres.json');
const movies: IMovie[] = require('../assets/data/movies.json');
const getGenres = (): Array<IGenre> => {
 return genres;
};
const getMovies = (): Array<IMovie> => {
 return movies;
};
const getMovieByGenreId = (genreId: number):
 Array<IMovie> => {
 return movies.filter(movie =>
 movie.genre_ids.indexOf(genreId) > -1);
};
export {getGenres, getMovies, getMovieByGenreId };
export type {IGenre, IMovie};