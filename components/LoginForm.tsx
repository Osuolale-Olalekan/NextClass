"use client"

import { loginAction } from "@/lib/user-action"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

const LoginForm = () => {
  const router = useRouter()
  const [userForm, setUserForm] = useState({
    password: "",
    email: "",
  })

  const registerUserHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const updateP = await loginAction(userForm)
    if (updateP.success) {
      router.push("/add-products")
    }
    // console.log(updateP);
    
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  return (
    <div className="flex items-center justify-between h-screen p-5 md:p-10">
      <form
        onSubmit={registerUserHandler}
        className="max-w-xl w-full m-auto shadow rounded p-4"
      >
        <h3 className="font-semibold">Sign in</h3>

        <div className="flex flex-col mt-6 gap-4">
          <div className="flex gap-4 items-center">
            <input
              value={userForm.email}
              onChange={handleInputChange}
              name="email"
              required
              placeholder="Email"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-1"
            />
          </div>
          <input
            value={userForm.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="User Password"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />

          <button className="h-12 rounded bg-blue-800 font-medium text-white">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
