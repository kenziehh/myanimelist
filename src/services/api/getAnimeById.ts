import axios from "axios";
import { BASE_URL } from ".";
import { AnimeItem } from "@models/animeItem";

export const fetchAnimeById = async (id:number) => {
  const { data } = await axios.get(`${BASE_URL}/anime/${id}`);
  return data.data as AnimeItem;
};
