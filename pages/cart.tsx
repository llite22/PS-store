import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import CartScreen from '@/app/components/screens/CartScreen/CartScreen'
import { GameData } from '@/app/interfaces/IGame'
import { getGames } from '@/app/services/CardGame.service'

const CartPage: NextPage<GameData> = ({ games }) => {
	return (
		<>
			<Head>
				<title>Cart</title>
			</Head>
			<CartScreen games={games} />
		</>
	)
}

export const getServerSideProps: GetServerSideProps<GameData> = async () => {
	const games = await getGames()

	return {
		props: { games },
	}
}

export default CartPage
