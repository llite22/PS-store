import { GameData } from '@/app/interfaces/IGame';
import { FC } from 'react'
import Cart from '../../Cart/Cart';


const CartScreen: FC<GameData> = ({games}) => {
	return (
			<Cart games={games}/>
	)
}
export default CartScreen
