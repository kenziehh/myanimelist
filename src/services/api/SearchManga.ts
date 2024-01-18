import { Manga } from "@models/manga";
import axios from "axios";
import { BASE_URL } from ".";

export const fetchSearchManga = async (searchValue: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/manga?q=${searchValue}`);
    return data.data as Manga[];
  } catch (error) {
    console.error("Error fetching Manga:", error);
    return [];
  }
};
export const fetchSearch5Manga = async (searchValue: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/manga?q=${searchValue}&limit=5`
    );
    return data.data as Manga[];
  } catch (error) {
    console.error("Error fetching Manga:", error);
    return [];
  }
};
