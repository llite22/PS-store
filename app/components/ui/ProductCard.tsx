import Image from 'next/image'
import { FC } from 'react'
import { useState } from 'react'

import styles from './ProductCard.module.scss'
import { Game } from '@/app/interfaces/IGame'

const ProductCard: FC<Game> = ({
	id,
	addOn,
	playstation,
	title,
	image,
	description,
	imageDev,
	price,
	newPrice,
	imageDevColor,
}) => {
	const [addedToCart, setAddedToCart] = useState(false)
	const handleAddToCart = () => {
		setAddedToCart((prev) => !prev)
	}
	const newPriceYes =
		typeof newPrice === 'string' && /^[a-zA-Z]+$/.test(newPrice)
			? newPrice
			: newPrice
			? `$${newPrice}`
			: ''
	const priceOld = /^[a-zA-Z]+$/.test(price) ? price : `$${price}`

	const bgColor = imageDevColor
	return (
		<div className={styles.productCard}>
			<Image src={image} width={170} height={170} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
			<div className={styles.productCard__ps}>
				<h3>{playstation}</h3>
				{addOn && <span className={styles.productCard__dev}>{addOn}</span>}
				{imageDev && (
					<Image
						src={imageDev}
						className={styles.productCard__psplus}
						width={14}
						height={14}
						alt="up"
					/>
				)}
			</div>
			<div className={styles.ProductCard__btn}>
				{newPriceYes ? (
					<>
						<button
							className={`${styles.productCard__price} ${
								addedToCart ? styles.productCard__added : ''
							}`}
							onClick={handleAddToCart}
						>
							{addedToCart ? (
								<span>Добавлено в корзину</span>
							) : (
								<>
									<span>{priceOld}</span>
									<span className={styles.productCard__priceSeparator}></span>
									<span
										className={`${styles.productCard__newPrice} ${
											addedToCart ? styles.productCard__addedPrice : ''
										}`}
										style={{ color: bgColor }}
									>
										{newPriceYes}
									</span>
								</>
							)}
						</button>
					</>
				) : (
					<button
						className={`${styles.productCard__price} ${
							addedToCart ? styles.productCard__added : ''
						}`}
						onClick={handleAddToCart}
					>
						{addedToCart ? (
							<span>Добавлено в корзину</span>
						) : (
							<span>{priceOld}</span>
						)}
					</button>
				)}
			</div>
		</div>
	)
}

export default ProductCard
