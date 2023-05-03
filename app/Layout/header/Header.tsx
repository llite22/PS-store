import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import styles from './Header.module.scss'
import Input from './Input'
import { RootState } from '@/app/redux/store'


const Header: FC = () => {
	const { items } = useSelector((state: RootState) => state.cart)

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
			<Link href='/'>
				<Image
					priority
					className={styles.header__PSlogo}
					src="/images/PSlogo.svg"
					alt="logo"
					width={200}
					height={43}
				/>
			</Link>
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
					<Link href="/cart">
						<div className={styles.header__cartContainer}>
							<Image
								className={styles.header__imageCart}
								src="/images/cart.svg"
								alt="cart"
								width={20}
								height={20}
							/>
							<div className={styles.header__cartCount}>{items.length}</div>
						</div>
					</Link>
					<Input />
				</div>
			</div>
		</header>
	)
}

export default Header
