import { Movie } from '../interfaces/movie';

export interface AddMovies {
  movies: Array<Movie>;
  nbHits: number;
  page: number;
  hitsPerPage: number;
  query: string;
}
