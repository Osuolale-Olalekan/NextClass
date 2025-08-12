export interface Product {
	category: string
	price: number
	description: string
	image: string
	id: number
	title: string
	rating: {
		count: number
		rate: number
	}
}