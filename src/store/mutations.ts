import { StateType } from './types';
import { AddMovies } from '../interfaces/add-movies';
import { Movie } from '../interfaces/movie';

export default {
  SET_MOVIES(state: StateType, payload: AddMovies): void {
    state.movies = payload.movies;
    state.itemPerPage = payload.hitsPerPage;
    state.page = payload.page;
    state.totalItems = payload.nbHits;
    state.query = payload.query;
  },
  ADD_MOVIES(state: StateType, payload: AddMovies): void {
    state.movies = [...state.movies, ...payload.movies];
    state.itemPerPage = payload.hitsPerPage;
    state.page = payload.page;
    state.totalItems = payload.nbHits;
    state.query = payload.query;
  },
  SET_MOVIE(state: StateType, object: Movie): void {
    state.movie = object;
  },
};
