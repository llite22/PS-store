import { GameServices } from "@/api/Games";
import Catalog from "@/components/pages/Catalog/Catalog";
import { Game, GameData } from "@/interfaces/IGame";

export default async function CatalogPage({ searchParams }) {
  const games: GameData = await getGames();
  return (
    <main>
      <Catalog games={games} searchParams={searchParams} />
    </main>
  );
}

async function getGames(): Promise<GameData> {
  const GamesResponse: Game = await GameServices.getAllGames();
  const games = GamesResponse;
  return games;
}
