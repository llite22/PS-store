import { GameServices } from "@/api/Games";
import ProductsList from "@/components/pages/Products/ProductList";
import { Game } from "@/interfaces/IGame";

export default async function HomePage({ searchParams }) {
  const games: Game = await getGames({
    page: searchParams.page || "1",
  });
  return (
    <main>
      <ProductsList games={games} />
    </main>
  );
}

async function getGames(filters: { page: string }): Promise<Game> {
  const gamesResponse: Game = await GameServices.getAllGames(filters);
  const games = gamesResponse.items;
  return games;
}
