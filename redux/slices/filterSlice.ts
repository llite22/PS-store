import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ISearchState {
	searchTerm: string
}

const initialState: ISearchState = {
	searchTerm: '',
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchTerm(state, action: PayloadAction<string>) {
			state.searchTerm = action.payload
		},
	},
})
export const { setSearchTerm } = searchSlice.actions
export default searchSlice.reducer
