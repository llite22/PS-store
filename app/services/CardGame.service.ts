import axios, { AxiosResponse } from "axios";
import { Game } from "../interfaces/IGame";

export const getGames = async (): Promise<Game[]> => {
  try {
    const { data }: AxiosResponse<Game[]> = await axios.get('https://6436dbe23e4d2b4a12dd9520.mockapi.io/items');
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

