"use client"

import { registerUser } from "@/lib/user-action"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

const RegisterForm = () => {
  const router = useRouter()
  const [userForm, setUserForm] = useState({
    name: "",
    password: "",
    email: "",
  })

  const registerUserHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const updateP = await registerUser(userForm)
    if (updateP.success) {
      router.push("/my-users")
    }
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
        <h3 className="font-semibold">Register</h3>

        <div className="flex flex-col mt-6 gap-4">
          <input
            value={userForm.name}
            onChange={handleInputChange}
            name="name"
            required
            type="text"
            placeholder="User Name"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />
          <input
            value={userForm.email}
            onChange={handleInputChange}
            name="email"
            required
            placeholder="Email"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />
          <input
            value={userForm.password}
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="User Password"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />

          <button className="h-12 rounded bg-blue-800 font-medium text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
