import { GameServices } from "@/api/Games";
import ProductsList from "@/components/pages/Products/ProductList";
import { Game } from "@/interfaces/IGame";
import { SearchParamsProps } from "@/api/Games";

export default async function HomePage({ searchParams }: {searchParams: SearchParamsProps}) {
  const games: Game[] = await getGames({
    page: searchParams.page || "1",
    title: searchParams.title || ' ',
  });
  return (
    <main>
      <ProductsList games={games} />
    </main>
  );
}

async function getGames(filters: SearchParamsProps): Promise<Game[]> {
  const gamesResponse: Game = await GameServices.getAllGames(filters);
  const games = gamesResponse.items;
  return games;
}
