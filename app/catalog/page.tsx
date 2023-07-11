import { GameServices } from "@/api/Games";
import Catalog from "@/components/pages/Catalog/Catalog";
import { Game } from "@/interfaces/IGame";
import { SearchParamsProps } from "@/api/Games";

export default async function CatalogPage({ searchParams }: {searchParams: SearchParamsProps}) {
  const games: Game[] = await getGames({
    page: searchParams.page || "1",
    title: searchParams.title || ' ',
  });
  return (
    <main>
      <Catalog games={games} searchParams={searchParams} />
    </main>
  );
}

async function getGames(filters: SearchParamsProps): Promise<Game[]> {
  const gamesResponse: Game = await GameServices.getAllGames(filters);
  const games = gamesResponse.items;
  return games;
}
