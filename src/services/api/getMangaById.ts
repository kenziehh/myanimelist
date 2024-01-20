import { MangaItem } from "@models/mangaItem";
import axios from "axios";
import { BASE_URL } from ".";

export const fetchMangaById = async (id: number) => {
  const { data } = await axios.get(`${BASE_URL}/manga/${id}`);
  return data.data as MangaItem;
};
