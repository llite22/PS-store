import { GameServices } from "@/api/Games";
import Catalog from "@/components/pages/Catalog/Catalog";
import { Game, GameData } from "@/interfaces/IGame";

export default async function CatalogPage({ searchParams }) {
  const games: Game = await getGames({
    page: searchParams.page || "1",
    title: searchParams.title || ' ',
  });
  return (
    <main>
      <Catalog games={games} searchParams={searchParams} />
    </main>
  );
}

async function getGames(filters: { page: string, title: string }): Promise<Game> {
  const gamesResponse: Game = await GameServices.getAllGames(filters);
  const games = gamesResponse.items;
  return games;
}
