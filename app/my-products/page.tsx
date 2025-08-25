import dbConnect from "@/lib/dbConnect"
import ProductModel from "@/models/Product"
import Link from "next/link"

const Page = async () => {
  await dbConnect()
  const products = await ProductModel.find()

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div className="shadow p-3 rounded" key={product._id as string}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <Link
            href={`/my-products/${product._id}/edit`}
            className="brand-button"
          >
            Edit
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Page
