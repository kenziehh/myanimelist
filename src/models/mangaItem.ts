export interface MangaItem {
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
    chapters: number;
    volumes: number;
    status: string;
    publishing: boolean;
    published: publishedDate;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    authors: Author;
    serializations: Serialization;
    genres: Genre;
    explicit_genres: Genre;
    themes: Theme;
    demographics: Genre;
  }
  