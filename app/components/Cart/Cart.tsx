import Image from 'next/image'
import { FC } from 'react'

import styles from './Cart.module.scss'
import { GameData } from '@/app/interfaces/IGame'

const Cart: FC<GameData> = ({ games }) => {
	return (
		<section className={styles.cart}>
      <div className={styles.cart__title} >
			<h2>Корзина</h2>
      <span><Image width={20} height={20} src="/images/cart.svg" alt='cart'/></span>
      </div>
			<ul>
				{games.map((game) => (
					<li key={game.id}>
					<Image width={100} height={100} src={game.image} alt={game.title} />
					<span className={styles.op}>{game.title}</span>	
						{game.description}
						{game.newPrice ? game.newPrice : game.price}
						<span>
							{game.playstation}
							{game.imageDev && (
								<Image
									width={14}
									height={14}
									src={game.imageDev}
									alt={game.title}
								/>
							)}
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Cart
