import { getUserWithId, logout, verifyUser } from "@/lib/user-action"
import { redirect } from "next/navigation"

const Page = async () => {
  const auth = await verifyUser()
  if (!auth.success) {
    redirect("/login")
  }

  const user = await getUserWithId(auth.id)
  if (!user) redirect("/login")

  return (
    <div>
      User profile
      <div>User Email: {user.email}</div>
      <form action={logout}>
        <button className="brand-button">Logout</button>
      </form>
    </div>
  )
}

export default Page
