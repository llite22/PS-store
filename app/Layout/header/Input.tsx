import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './Header.module.scss'
import { setSearchTerm } from '@/app/redux/slices/filterSlice'

const Input: FC = () => {
	const [searchText, setSearchText] = useState('')
	const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
	const router = useRouter()
	const dispatch = useDispatch()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (searchText) {
			dispatch(setSearchTerm(searchText))
			router.push('/catalog?search=' + encodeURIComponent(searchText))
		}
	}
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setSearchText(value)
		if (timerId) clearTimeout(timerId)
		const newTimerId = setTimeout(() => {
			dispatch(setSearchTerm(value))
			router.push('/catalog?search=' + encodeURIComponent(value))
		}, 1000)
		setTimerId(newTimerId)
	}

	return (
		<form onSubmit={handleSubmit}>
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
					value={searchText}
					onChange={handleChange}
				/>
			</div>
		</form>
	)
}
export default Input
