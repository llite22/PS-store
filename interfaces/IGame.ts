export interface Game {
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
}

export interface GameData {
  games: Game[]
}
