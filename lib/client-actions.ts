"use server"

import ProductModel from "@/models/Product";
import { UpdateProduct } from "@/types";
import { revalidatePath } from "next/cache";
import dbConnect from "./dbConnect";

// to be used on the client
export const updateClientProduct = async (product: UpdateProduct) => {
	// should be inside login action
	// const token = "mtoken";
	// const cookieStore = await cookies()
	// cookieStore.set("token", token);

	try {
		await dbConnect()
		await ProductModel.findByIdAndUpdate(product.id, {
			title: product.title,
			description: product.description,
			price: product.price,
		})

		revalidatePath("/my-products")
		revalidatePath(`/my-products/${product.id}`)
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

export const getProduct = async ({ id }: { id: string }) => {
	await dbConnect()
	// const product = await ProductModel.findById(id)
	const product = await ProductModel.findById(id).lean()

	return product;
	// return JSON.parse(JSON.stringify(product));
	// return {
	// 	price: product?.price,
	// 	description: product?.description,
	// 	title: product?.title,
	// }
}