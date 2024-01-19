export interface AnimeItem {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageUrls;
    webp: ImageUrls;
  };
  trailer: Trailer;
  approved: boolean;
  titles: Title;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AiredDates;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Producer;
  licensors: any;
  studios: Studio;
  genres: Genre;
  explicit_genres: Genre;
  themes: Theme;
  demographics: Genre;
}
