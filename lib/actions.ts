"use server"

import ProductModel from "@/models/Product";
import dbConnect from "./dbConnect";
import { redirect } from "next/navigation";



// to be used on the server
export const updateProduct = async (formData: FormData) => {
	const title = formData.get("title")
	const description = formData.get("description")
	const id = formData.get("id");
	const price = formData.get("price")

	try {
		await dbConnect()
		await ProductModel.findByIdAndUpdate(id, {
			title,
			description,
			price,
		})
	} catch (error) {
		console.log(error)
	}
	redirect("/my-products")
}