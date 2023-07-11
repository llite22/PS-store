import { GetGamesResponse } from "../interfaces/IGame";

export interface SearchParamsProps {
  page?: string;
  title?: string;
}

export const GameServices = {
  async getAllGames(filters: SearchParamsProps): Promise<GetGamesResponse> {
    const { page, title } = filters
    try {
      const request: Response = await fetch(`https://272d57829d9ed7cd.mokky.ru/items?title=*${title}*&page=${page}&limit=12`)
      return await request.json();
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
}