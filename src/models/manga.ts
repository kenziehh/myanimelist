import { MangaItem } from "./mangaItem";

export interface Manga {
  data: MangaItem[];
  pagination: Pagination;
}
