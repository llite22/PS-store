import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Header.module.scss'
import { setSearchTerm } from '@/app/redux/slices/filterSlice'

const Input: FC = () => {
	const [searchText, setSearchText] = useState('')
	const router = useRouter()
	const dispatch = useDispatch()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (searchText) {
			dispatch(setSearchTerm(searchText))
			router.push('/catalog?search=' + encodeURIComponent(searchText))
		}
	}

	useEffect(() => {
		const { search } = router.query
		if (search) {
			setSearchText(decodeURIComponent(search as string))
		}
	}, [router.query])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setSearchText(value)
	}
	const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const value = (event.target as HTMLInputElement).value
		setSearchText(value)
		dispatch(setSearchTerm(value))
		router.push('/catalog?search=' + encodeURIComponent(value))
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
					onKeyUp={handleKeyUp}
				/>
			</div>
		</form>
	)
}
export default Input
