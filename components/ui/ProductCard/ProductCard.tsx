'use client'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addItem } from '@/redux/slices/cartSlice'
import { updateTotalPrice } from '@/redux/slices/cartSlice'
import { Game } from '@/interfaces/IGame'
import styles from './ProductCard.module.scss'

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
	const router = useRouter()
	const dispatch = useDispatch()
	const [addedToCart, setAddedToCart] = useState<boolean>(false)

	const maxTitleLength: number = 22

	const onClickAdd = () => {
		dispatch(
			addItem({
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
			})
		)
		dispatch(updateTotalPrice())
		setAddedToCart(true)
		localStorage.setItem(`addedToCart-${id}`, 'true')
	}

	useEffect(() => {
		const added: string | null = localStorage.getItem(`addedToCart-${id}`)
		if (added === 'true') {
			setAddedToCart(true)
		}
	}, [])

	const onButtonClick = (): void => {
		if (addedToCart) {
			router.push('/cart')
		} else {
			onClickAdd()
		}
	}

	let newPriceYes: string = ''
	if (typeof newPrice === 'string' && /^[a-zA-Z]+$/.test(newPrice)) {
		newPriceYes = newPrice
	} else if (newPrice) {
		newPriceYes = `$${newPrice}`
	}

	const priceYes: string = /^[a-zA-Z]+$/.test(price) ? price : `$${price}`

	const bgColor: string | undefined = imageDevColor

	const truncatedTitle: string =
		title.length > maxTitleLength
			? `${title.slice(0, maxTitleLength)}...`
			: title

	return (
		<div className={styles.productCard}>
			<Image src={image} width={170} height={170} alt={title} />
			<h2>{truncatedTitle}</h2>
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
							onClick={addedToCart ? () => router.push('/cart') : onButtonClick}
						>
							{addedToCart ? (
								<span>Посмотреть в корзине</span>
							) : (
								<>
									<span>{priceYes}</span>
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
						onClick={addedToCart ? () => router.push('/cart') : onButtonClick}
					>
						{addedToCart ? (
							<span>Посмотреть в корзине</span>
						) : (
							<span>{priceYes}</span>
						)}
					</button>
				)}
			</div>
		</div>
	)
}

export default ProductCard
