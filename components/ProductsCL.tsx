"use client"

import { Product } from "@/types"
import ProductCard from "./ProductCard"
import useSWR from "swr"
import ProductsSkeleton from "./ProductsSkeleton"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

// cl - community library
const ProductsListCL = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR<Product[]>("https://fakestoreapi.com/products", fetcher)

  if (isLoading) return <ProductsSkeleton />
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="flex flex-wrap gap-6 p-10">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsListCL
