import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import Home from '@/app/components/screens/home/Home'
import { GameData } from '@/app/interfaces/IGame'
import { getGames } from '@/app/services/CardGame.service'

const HomePage: NextPage<GameData> = ({ games }) => {
	return (
		<>
			<Head>
				<title>PS-store</title>
			</Head>
			<Home games={games} />
		</>
	)
}

export const getServerSideProps: GetServerSideProps<GameData> = async () => {
	const games = await getGames()

	return {
		props: { games },
	}
}
export default HomePage
