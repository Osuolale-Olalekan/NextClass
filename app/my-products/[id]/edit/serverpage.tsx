import { updateProduct } from "@/lib/actions"
import dbConnect from "@/lib/dbConnect"
import ProductModel from "@/models/Product"

// redirect - server components, server actions
// useRouter (instead of useNavigate) - clients component

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  await dbConnect()
  const product = await ProductModel.findById(id)

  return (
    <div className="flex items-center justify-between h-screen p-5 md:p-10">
      <form
        action={updateProduct}
        className="max-w-xl w-full m-auto shadow rounded p-4"
      >
        <h3 className="font-semibold">Update Product</h3>
        <p className="text-sm">Enter new product details</p>

        <div className="flex flex-col mt-6 gap-4">
          <div className="flex gap-4 items-center">
            <input type="hidden" name="id" value={String(product?._id)} />
            <input
              defaultValue={product?.title}
              name="title"
              required
              type="text"
              placeholder="Product Title"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-2"
            />
            <input
              defaultValue={product?.price}
              name="price"
              type="number"
              required
              placeholder="Product Price"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-1"
            />
          </div>
          <input
            defaultValue={product?.description}
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
