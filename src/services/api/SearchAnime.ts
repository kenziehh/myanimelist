import axios from "axios";
import { BASE_URL } from ".";
import { AnimeItem } from "@models/animeItem";

export const fetchSearchAnime = async (searchValue: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/anime?q=${searchValue}`);
    return data.data as AnimeItem[];
  } catch (error) {
    console.error("Error fetching anime:", error);
    return [];
  }
};

export const fetchSearch5Anime = async (searchValue: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/anime?q=${searchValue}&limit=5`
    );
    return data.data as AnimeItem[];
  } catch (error) {
    console.error("Error fetching Anime:", error);
    return [];
  }
};
