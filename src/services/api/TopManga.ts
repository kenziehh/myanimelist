import axios from "axios";
import { BASE_URL } from ".";
import { Manga } from "@models/manga";

export const fetchTop10Mangas = async () => {
  const { data } = await axios.get(`${BASE_URL}/top/manga?limit=10`);
  return data as Manga;
};

export const fetchTopMangas = async (page: number) => {
  const { data } = await axios.get(`${BASE_URL}/top/manga?page=${page}`);
  return data as Manga;
};
