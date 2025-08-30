"use client";

import { useState } from "react";
import { signInAction } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signInAction(formData);

    if (res.success) {
      router.push("/dashboard");
    } else {
      setError(res.message);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl shadow-md w-80 bg-white space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Sign In</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign In
        </button>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/authenticate" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
