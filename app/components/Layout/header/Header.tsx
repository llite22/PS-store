import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './Header.module.scss'
import SearchForm from './SearchForm'
const Header: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
  
	// Функция для обновления поискового запроса
	const handleSearch = (search: string) => {
	  setSearchTerm(search);
	};
  
	return (
	  <header className={styles.header}>
		<Link href="/">
		  <div className={styles.header__top}>
			<Image
			  className={styles.header__logo}
			  src="/images/logo.svg"
			  alt="logo"
			  width={75}
			  height={15}
			/>
		  </div>
		</Link>
		<div className={styles.header__bottomLeft}>
		  <Image
			priority
			className={styles.header__PSlogo}
			src="/images/PSlogo.svg"
			alt="logo"
			width={200}
			height={43}
		  />
  
		  <div className={styles.header__bottomRight}>
			<span className={styles.header__text}>My PlayStation</span>
			<Image
			  className={styles.header__imageDown}
			  src="/images/down.svg"
			  alt="down"
			  width={8}
			  height={5}
			/>
			<Image
			  className={styles.header__imageAvatar}
			  src="/images/avatar.svg"
			  alt="avatar"
			  width={40}
			  height={40}
			/>
			<Image
			  className={styles.header__imageFav}
			  src="/images/fav.svg"
			  alt="favorite"
			  width={22}
			  height={20}
			/>
			<Link href='/cart'>
			<div className={styles.header__cartContainer}>
			<Image
			  className={styles.header__imageCart}
			  src="/images/cart.svg"
			  alt="cart"
			  width={20}
			  height={20}
			/>
			<div className={styles.header__cartCount}>0</div>
			</div>
			</Link>
			{/* Передаем функцию handleSearch компоненту SearchForm */}
			<SearchForm onSearch={handleSearch}/>
		  </div>
		</div>
	  </header>
	)
  }


export default Header
