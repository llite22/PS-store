import { FC } from 'react'
import { useSelector } from 'react-redux'

import { GameData } from '../../interfaces/IGame'
import ProductCard from '../ui/ProductCard'

import styles from './Catalog.module.scss'
import { RootState } from '@/app/redux/store'

const Catalog: FC<GameData> = ({ games }) => {
	const { searchTerm } = useSelector((state: RootState) => state.search)

	const filteredGames = games.filter((game) => {
		return game.title.toLowerCase().includes(searchTerm.toLowerCase())
	})

	return (
		<section className={styles.catalog}>
			<div className={styles.catalog__container}>
				<div className={styles.catalog__title}>
					<h1>New Releases</h1>
				</div>
				{filteredGames.length === 0 && (
					<div className={styles.catalog__item}>
						<p className={styles.catalog__no}>No games found</p>
					</div>
				)}
				{filteredGames.length > 0 && (
					<div className={styles.catalog__item}>
						{filteredGames.map((game) => (
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
