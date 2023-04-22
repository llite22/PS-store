import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './SliderGame.module.scss'

const slides = [
	{ id: 0, src: '/images/SpiderHero.jpg', alt: 'Spider Man' },
	{ id: 1, src: '/images/cyberpunk2077.jpg', alt: 'Cyberpunk 2077' },
	{ id: 2, src: '/images/crysis.jpg', alt: 'Crysis' },
	{ id: 3, src: '/images/scala.jpg', alt: 'scala' },
]

const SliderGame = () => {
	const [slideIndex, setSlideIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSlideIndex((slideIndex) =>
				slideIndex === slides.length - 1 ? 0 : slideIndex + 1
			)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className={styles.slider}>
			{slides.map((slide, index) => (
				<Image
					key={slide.id}
					className={`${styles.slide} ${
						index === slideIndex ? styles.active : ''
					}`}
					priority
					src={slide.src}
					width={1440}
					height={810}
					alt={slide.alt}
				/>
			))}
			<div className={styles.dots}>
				{slides.map((slide, index) => (
					<span
						key={slide.id}
						className={`${styles.dot} ${
							index === slideIndex ? styles.active : ''
						}`}
						onClick={() => setSlideIndex(index)}
					/>
				))}
			</div>
		</section>
	)
}

export default SliderGame
