// import React from 'react'
import ProductSave from "@/components/ProductSave"
import { getUserWithId, verifyUser } from "@/lib/user-action"
import { redirect } from "next/navigation"


const page = async () => {
    const auth = await verifyUser()
    if(!auth.success)redirect("/login")

        const user = await getUserWithId(auth.id)
        if(!user) redirect("/login")

  return (
    <div>
        <ProductSave userId={user._id.toString()}/>
    </div>
  )
}

export default page