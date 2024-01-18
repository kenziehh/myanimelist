import axios from "axios";
import { BASE_URL } from ".";
import { Anime } from "@models/anime";

export const fetchTop10Animes = async () => {
  const { data } = await axios.get(`${BASE_URL}/top/anime?limit=10`);
  return data.data as Anime[];
};

export const fetchTopAnimes = async () => {
  const { data } = await axios.get(`${BASE_URL}/top/anime`);
  return data.data as Anime[];
};

export const fetchSearchAnime = async (searchValue: string) => {
  try {
    console.log(`kepassing${searchValue}`)
    const { data } = await axios.get(`${BASE_URL}/anime?q=${searchValue}`);
    return data.data as Anime[];
  } catch (error) {
    console.error("Error fetching anime:", error);
    return [];
  }
};
