"use client"

import { updateClientProduct } from "@/lib/client-actions"
import { useRouter } from "next/navigation"

const ProductForm = () => {
  const router = useRouter()

  const handleProductUpdate = async () => {
    const updateData = {
      title: "Hello",
      description: "Desc",
      id: "d",
      price: 200,
    }

    const updateP = await updateClientProduct(updateData)

    if (updateP.success) {
      // show a success response
      router.push("/")
    }
  }

  return <div>Product form here</div>
}

export default ProductForm
