import dbConnect from "@/lib/dbConnect"
import { verifyUser } from "@/lib/user-action"
import ProductModel from "@/models/Product"
// import { NextResponse } from "next/server"

export const dynamic = "force-static"

export const GET = async () => {
  await dbConnect()

  const products = await ProductModel.find().lean()

  return Response.json({ products })
  //we can use Response.json or NextResponse.json({message:""})
}

export const POST = async (request: Request) => {
  try {
    await dbConnect()

    const { title, description, price } = await request.json()

  
    const auth = await verifyUser()
    if (!auth.success) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    
    const product = await ProductModel.create({
      title,
      description,
      price,
      user: auth.id, 
    })

    return Response.json({ success: true, product }, { status: 201 })
  } catch (error: any) {
    console.error(error)
    return Response.json({ success: false, message: error.message }, { status: 500 })
  }
}

export const DELETE = () => {}
