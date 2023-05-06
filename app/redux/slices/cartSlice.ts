import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Game } from '@/app/interfaces/IGame'

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
					.reduce((sum: number, obj) => {
						let price = parseFloat(obj.price)
						if (obj.newPrice && obj.newPrice === 'FREE') {
							price = 0
						} else if (obj.newPrice && obj.newPrice < obj.price) {
							sum += parseFloat(obj.newPrice)
						} else {
							sum += price
						}
						return sum
					}, 0)
					.toFixed(2)
			)
		},
	},
})
// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateTotalPrice } = cartSlice.actions

export default cartSlice.reducer
