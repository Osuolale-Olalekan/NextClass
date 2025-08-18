import { Product } from "@/types"
import Image from "next/image"

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const productResponse = await fetch(`https://fakestoreapi.com/products/${id}`)
  const product: Product = await productResponse.json()

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-20 max-w-[70rem] mx-auto py-20 px-5 md:px-10">
      <Image
        className="object-contain"
        alt={product.title}
        src={product.image}
        height={400}
        width={400}
      />
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">{product.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center px-3 py-1 rounded-lg bg-blue-50 text-blue-900 w-fit">
            {product.category}
          </div>

          <div className="flex gap-2">
            Rating:
            <span className="size-6 flex items-center justify-center text-xs bg-amber-100 text-amber-700 rounded-full">
              {product.rating.rate}
            </span>
          </div>
        </div>
        <h3 className="font-semibold text-lg">${product.price}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default Page
