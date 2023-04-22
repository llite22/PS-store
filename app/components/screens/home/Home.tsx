import { FC } from 'react'

import ProductsList from '../../Products/ProductList'
import SliderGame from '../../SliderGame/SliderGame'

import { GameData } from '@/app/interfaces/IGame'

const Home: FC<GameData> = ({ games }) => {
	return (
		<>
			<SliderGame />
			<ProductsList games={games} />
		</>
	)
}

export default Home
