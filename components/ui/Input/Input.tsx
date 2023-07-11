import { FC } from 'react'
import Image from 'next/image'
import styles from '../Header/Header.module.scss'

const Input: FC = () => {
	return (
		<form>
			<div className={styles.header__search}>
				<Image
					className={styles.header__searchIcon}
					src="/images/search.svg"
					width={12}
					height={12}
					alt="Search Icon"
					loading="lazy"
				/>
				<input
					className={styles.header__input}
					type="text"
					placeholder="Search"
					name="search"
				/>
			</div>
		</form>
	)
}
export default Input
