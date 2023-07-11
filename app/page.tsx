import { GameServices } from "@/api/Games";
import ProductsList from "@/components/pages/Products/ProductList";
import { Game, GameData } from "@/interfaces/IGame";

export default async function HomePage({ searchParams }) {
  const games: GameData = await getGames();
  return (
    <main>
      <ProductsList games={games} searchParams={searchParams} />
    </main>
  );
}

async function getGames(): Promise<GameData> {
  const GamesResponse: Game = await GameServices.getAllGames();
  const games = GamesResponse;
  return games;
}
