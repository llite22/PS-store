'use client'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { slides } from '@/utils/Slides'
import styles from './SliderGame.module.scss'

const SliderGame: FC = () => {
	const [slideIndex, setSlideIndex] = useState<number>(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSlideIndex((slideIndex: number) =>
				slideIndex === slides.length - 1 ? 0 : slideIndex + 1
			)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className={styles.slider}>
			{slides.map((slide, index: number) => (
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
