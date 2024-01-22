import axios from "axios";
import { BASE_URL } from ".";
import { Anime } from "@models/anime";

export const fetchAnimeThisSeason = async () => {
  const { data } = await axios.get(`${BASE_URL}/seasons/now`);
  return data as Anime;
};
