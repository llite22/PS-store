export interface GetGamesResponse {
	items: Array<FullGamesData>;
	page: number;
	limit: number;

}
export interface FullGamesData {
	id: number
	title: string
	description: string
	playstation: string
	addOn?: string
	imageDev?: string
	imageDevColor?: string
	image: string
	price: string
	newPrice?: string
};