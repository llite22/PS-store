import { FC } from 'react'
import Catalog from '../../Catalog/Catalog'
import { GameData } from '@/app/interfaces/IGame'


const CatalogScreen: FC<GameData> = ({games}) => {
	return (
			<Catalog games={games} />
	)
}
export default CatalogScreen
