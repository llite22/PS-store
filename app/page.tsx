import { GameServices } from "@/api/Games";
import ProductsList from "@/components/pages/Products/ProductList";
import { FullGamesData, GetGamesResponse } from "@/interfaces/IGame";
import { SearchParamsProps } from "@/api/Games";

export default async function HomePage({ searchParams }: {searchParams: SearchParamsProps}) {
  const games: FullGamesData[] = await getGames({
    page: searchParams.page || "1",
    title: searchParams.title || ' ',
  });
  return (
    <main>
      <ProductsList games={games} />
    </main>
  );
}

async function getGames(filters: SearchParamsProps): Promise<FullGamesData[]> {
  const gamesResponse: GetGamesResponse = await GameServices.getAllGames(filters);
  const games = gamesResponse.items;
  return games;
}
