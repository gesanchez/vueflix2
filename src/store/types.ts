import { Movie } from '../interfaces/movie';

export interface StateType {
  movies: Array<Movie>;
  page: number;
  itemPerPage: number;
  totalItems: number;
  query?: string;
  movie?: Movie;
}
