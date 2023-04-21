import { FC } from 'react'

import ProductCard from '../ui/ProductCard'

import styles from './Catalog.module.scss'
import { GameData } from '../../interfaces/IGame';



const Catalog: FC<GameData> = ({ games }) => {
	return (
		<section className={styles.catalog}>
			<div className={styles.catalog__container}>
				<div></div>
				<div className={styles.catalog__title}>
					<h1>New Releases</h1>
				</div>
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
			</div>
		</section>
	)
}

export default Catalog
