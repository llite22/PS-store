import { GameServices } from "@/api/Games";
import Catalog from "@/components/pages/Catalog/Catalog";
import { FullGamesData, GetGamesResponse } from "@/interfaces/IGame";
import { SearchParamsProps } from "@/api/Games";

export default async function CatalogPage({ searchParams }: {searchParams: SearchParamsProps}) {
  const games: FullGamesData[] = await getGames({
    page: searchParams.page || "1",
    title: searchParams.title || ' ',
  });
  return (
    <main>
      <Catalog games={games} searchParams={searchParams} />
    </main>
  );
}

async function getGames(filters: SearchParamsProps): Promise<FullGamesData[]> {
  const gamesResponse: GetGamesResponse = await GameServices.getAllGames(filters);
  const games = gamesResponse.items;
  return games;
}