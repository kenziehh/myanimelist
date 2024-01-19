import axios from "axios";
import { BASE_URL } from ".";
import { MangaItem } from "@models/mangaItem";

export const fetchSearchManga = async (searchValue: string) => {
  const { data } = await axios.get(`${BASE_URL}/manga?q=${searchValue}`);
  return data.data as MangaItem[];
};
export const fetchSearch5Manga = async (searchValue: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/manga?q=${searchValue}&limit=5`
  );
  return data.data as MangaItem[];
};
