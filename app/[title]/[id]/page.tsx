import { GameServices } from "@/api/Games"
import { FullGamesData } from "@/interfaces/IGame"
import Image from "next/image"

export default async function page({ params }: { params: { id: number }}) {
    const games: FullGamesData = await getGames(params.id)
  return (
    <div>
        <Image  src={games.image} width={1200} height={480} alt='poster'/>
    </div>
  )
}
    
async function getGames(id: number): Promise<FullGamesData> {
    const gameData = GameServices.getGames(id)
    return gameData
}