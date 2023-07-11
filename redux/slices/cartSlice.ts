import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Game } from '@/interfaces/IGame'

export interface cartState {
	items: Game[]
	totalPrice: number
}

const initialState: cartState = {
	items: [],
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Game>) => {
			state.items.push(action.payload)
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((obj) => obj.id !== action.payload)
		},

		updateTotalPrice: (state) => {
			state.totalPrice = parseFloat(
				state.items
					.reduce((sum: number, obj: Game) => {
						let price = parseFloat(obj.price)
						if (obj.newPrice && obj.newPrice === 'FREE') {
							price = 0
						}
						return sum + price
					}, 0)
					.toFixed(2)
			)
		},
	},
})

export const { addItem, removeItem, updateTotalPrice } = cartSlice.actions

export default cartSlice.reducer
