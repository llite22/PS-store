import { FC } from 'react'
import { GameData } from '@/interfaces/IGame'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import styles from './Catalog.module.scss'

const Catalog: FC<GameData> = ({ games }) => {
	return (
		<section className={styles.catalog}>
			<div className={styles.catalog__container}>
				<div className={styles.catalog__title}>
					<h1>New Releases</h1>
				</div>
				{games.length === 0 && (
					<div className={styles.catalog__item}>
						<p className={styles.catalog__no}>No games found</p>
					</div>
				)}
				{games.length > 0 && (
					<div className={styles.catalog__item}>
						{games.map((game) => (
							<ProductCard
								key={game.id}
								id={game.id}
								title={game.title}
								description={game.description}
								playstation={game.playstation}
								imageDev={game.imageDev}
								image={game.image}
								price={game.price}
								newPrice={game.newPrice}
								imageDevColor={game.imageDevColor}
								addOn={game.addOn}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default Catalog
