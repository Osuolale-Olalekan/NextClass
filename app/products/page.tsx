import ProductCard from "@/components/ProductCard"
import ProductsList from "@/components/Products"
import ProductsSkeleton from "@/components/ProductsSkeleton"
import { Product } from "@/types"
import { getProducts } from "@/utils"
import { Suspense } from "react"

export const generateStaticParams = async () => {
  const productsResponse = await fetch("https://fakestoreapi.com/products")
  const products: Product[] = await productsResponse.json()

  return products.map((product) => ({ id: product.id }))
  // return [{id:1}, {id:2}, {id:22}]
}

const Page = async () => {
  // const productsResponse = await fetch("https://fakestoreapi.com/products")
  // const products: Product[] = await productsResponse.json()

  const products = getProducts()

  return (
    <div>
      <div className="flex flex-wrap gap-6 p-10">
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsList products={products} />
        </Suspense>
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </div>
  )
}

export default Page
