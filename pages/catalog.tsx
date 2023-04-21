import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { GameData } from '../app/interfaces/IGame'

import CatalogScreen from '@/app/components/screens/CatalogScreen/CatalogScreen'
import { getGames } from '@/app/services/CardGame.service'

const CatalogPage: NextPage<GameData> = ({ games }) => {
	return (
		<>
			<Head>
				<title>Catalog</title>
			</Head>

			<CatalogScreen games={games} />
		</>
	)
}
export const getServerSideProps: GetServerSideProps = async () => {
	const games = await getGames()

	return {
		props: { games },
	}
}
export default CatalogPage
