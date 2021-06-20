export interface Movie {
  id: string;
  title: string;
  poster: string;
  overview?: string;
  // eslint-disable-next-line camelcase
  release_date?: number;
}
