import { FC } from 'react'
import Link from 'next/link'
import { FullGamesData } from '@/interfaces/IGame'
import ProductCard from '../../ui/ProductCard/ProductCard'
import SliderGame from '../../SliderGame/SliderGame'
import styles from './ProductList.module.scss'

interface ProductListProps {
	games: FullGamesData[]
}

const ProductsList: FC<ProductListProps> = ({ games }) => {
	return (
		<section className={styles.product}>
			<SliderGame />
			<div className="container">
				<div className={styles.product__title}>
					<h1>New Releases</h1>
					<Link className={styles.product__A} href="/catalog">VIEW ALL +</Link>
				</div>
				<div className={styles.product__item}>
					{games &&
						games.filter((_, index: number) => index < 12).map((game) => (
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

export default ProductsList
