import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import CartScreen from '@/app/components/screens/CartScreen/CartScreen'



const CartPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Cart</title>
			</Head>
			<CartScreen  />
		</>
	)
}

export default CartPage
