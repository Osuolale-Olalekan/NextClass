import dbConnect from "@/lib/dbConnect"
import ProductModel from "@/models/Product"
import { redirect } from "next/navigation"

const Page = () => {
  const createProduct = async (formData: FormData) => {
    "use server"
    const title = formData.get("title")
    const description = formData.get("description")
    const price = formData.get("price")

    try {
      await dbConnect()
      const product = await ProductModel.create({
        title,
        description,
        price,
      })
      console.log(product)
    } catch (error) {
      console.log(error)
    }
    redirect("/products")
  }

  return (
    <div className="flex items-center justify-between h-screen p-5 md:p-10">
      <form
        action={createProduct}
        className="max-w-xl w-full m-auto shadow rounded p-4"
      >
        <h3 className="font-semibold">Add New Product</h3>
        <p className="text-sm">Enter new product details</p>

        <div className="flex flex-col mt-6 gap-4">
          <div className="flex gap-4 items-center">
            <input
              name="title"
              required
              type="text"
              placeholder="Product Title"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-2"
            />
            <input
              name="price"
              type="number"
              required
              placeholder="Product Price"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-1"
            />
          </div>
          <input
            type="text"
            name="description"
            placeholder="Product Description"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />

          <button className="h-12 rounded bg-blue-800 font-medium text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
