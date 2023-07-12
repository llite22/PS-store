import styles from "./TitleId.module.scss";
import { GameServices } from "@/api/Games";
import { FullGamesData } from "@/interfaces/IGame";
import Image from "next/image";

export default async function page({ params }: { params: { id: number } }) {
  const games: FullGamesData = await getGames(params.id);
  return (
    <section className={styles.titleId}>
      <div className={styles.image}>
        <div className={styles.price}>
          {games.newPrice ? (
            games.newPrice !== "FREE" ? (
              <div>${games.newPrice}</div>
            ) : (
              <div>{games.newPrice}</div>
            )
          ) : (
            <div>${games.price}</div>
          )}
        </div>
        <div>
          <Image
            src={games.image}
            width={300}
            height={300}
            alt="poster"
            priority
          />
        </div>
      </div>
      <div className={styles.description}>
        <div>
          <h1>{games.title}</h1>
        </div>
        <div>
          <p>{games.description}</p>
        </div>
        <div>
          <h3>{games.playstation}</h3>
        </div>
        <div>
          {games.addOn && <span className={styles.dev}>{games.addOn}</span>}
        </div>
      </div>
    </section>
  );
}

async function getGames(id: number): Promise<FullGamesData> {
  const gameData = GameServices.getGames(id);
  return gameData;
}
