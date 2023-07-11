import { Game } from "../interfaces/IGame";

export const GameServices = {
  async getAllGames(filters: { page: string, title: string }): Promise<Game> {
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