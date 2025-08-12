import { Product } from "@/types"
import Image from "next/image"

const Page = async () => {
  const productsResponse = await fetch("https://fakestoreapi.com/products")
  const products: Product[] = await productsResponse.json()

  return (
    <div>
      <div className="flex flex-wrap gap-6 p-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow flex flex-col gap-2 rounded p-3 min-w-80 flex-1"
          >
            <Image
              height={400}
              width={400}
              className="h-40 object-contain"
              src={product.image}
              alt={product.title}
            />
            <h3 className="font-medium text-lg truncate">{product.title}</h3>
            <p className="font-semibold">${product.price}</p>
            <p className="line-clamp-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
