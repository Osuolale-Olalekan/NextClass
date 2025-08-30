"use client"

import { useState } from "react"
import { createProduct } from "@/lib/actions" 
import { useRouter } from "next/navigation"


export default function NewProductPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      await createProduct(formData) 
      router.push('/my-products') 
       
    } catch (err) {
      console.error("Failed to create product", err)
      
    } 

    
   
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create a New Product
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill in the product details below
        </p>

        <div className="space-y-5">
         
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Title
            </label>
            <input
            //   id="title"
              name="title"
              required
              type="text"
              placeholder="Enter product title"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Price
            </label>
            <input
            //   id="price"
              name="price"
              required
              type="number"
              placeholder="Enter product price"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Description
            </label>
            <textarea
            //   id="description"
              name="description"
              rows={3}
              placeholder="Write a short description..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 mt-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium text-white shadow-md disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  )
}














// import { createProduct } from "@/lib/actions"

// const Page = () => {
//   return (
//     <div className="flex items-center justify-between h-screen p-5 md:p-10">
//       <form
//         action={createProduct}
//         className="max-w-xl w-full m-auto shadow rounded p-4"
//       >
//         <h3 className="font-semibold">Create Product</h3>
//         <p className="text-sm">Enter product details</p>

//         <div className="flex flex-col mt-6 gap-4">
//           <div className="flex gap-4 items-center">
//             <input
//               name="title"
//               required
//               type="text"
//               placeholder="Product Title"
//               className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-2"
//             />
//             <input
//               name="price"
//               type="number"
//               required
//               placeholder="Product Price"
//               className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-1"
//             />
//           </div>
//           <input
//             type="text"
//             name="description"
//             placeholder="Product Description"
//             className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
//           />

//           <button className="h-12 rounded bg-blue-800 font-medium text-white">
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Page

