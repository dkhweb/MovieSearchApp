export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  imdbRating: string;
}

export interface Response{
  Response: string;
  totalResults: number;
  Search: Movie[];
}

export interface State {
  searchQuery: string;
  movies: Movie[];
}
