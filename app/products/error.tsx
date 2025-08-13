"use client"

import { useEffect } from "react"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen">
      <p>An error occured</p>
      <button onClick={reset} className="brand-button">
        Retry
      </button>
    </div>
  )
}

export default Error
