import { Game } from "../interfaces/IGame";

export const GameServices = {
  async getAllGames(): Promise<Game> {
    try {
      const request: Response = await fetch('https://6436dbe23e4d2b4a12dd9520.mockapi.io/items')

      return await request.json();
    } catch (error) {
      console.log((error as Error).message);
      throw error;
    }
  },
}