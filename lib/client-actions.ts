"use server"

import ProductModel from "@/models/Product";
import dbConnect from "./dbConnect";

interface UpdateProduct {
	title: string,
	description: string,
	price: number,
	id: string
}

// to be used on the client
export const updateClientProduct = async (product: UpdateProduct) => {

	try {
		await dbConnect()
		await ProductModel.findByIdAndUpdate(product.id, {
			title: product.title,
			description: product.description,
			price: product.price,
		})

		return {
			success: true
		};
	} catch (error) {
		console.log(error)
		return {
			success: false
		};
	}
}
