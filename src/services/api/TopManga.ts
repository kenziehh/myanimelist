import axios from "axios";
import { BASE_URL } from ".";
import { Manga } from "@models/manga";

export const fetchTop10Mangas = async () => {
  const { data } = await axios.get(`${BASE_URL}/top/manga?limit=10`);
  return data.data as Manga[];
};

export const fetchTopMangas = async () => {
  const { data } = await axios.get(`${BASE_URL}/top/manga`);
  return data.data as Manga[];
};
