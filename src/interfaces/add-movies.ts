export interface AddMovies {
  hits: Array<Movie>;
  nbHits: number;
  page: number;
  hitsPerPage: number;
  query: string;
}
