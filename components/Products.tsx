"use client"

import { Product } from "@/types"
import { use } from "react"
import ProductCard from "./ProductCard"

const ProductsList = ({ products }: { products: Promise<Product[]> }) => {
  const allProducts = use(products)
  return (
    <div className="flex flex-wrap gap-6 p-10">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsList
