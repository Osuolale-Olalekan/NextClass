import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-screen">
      <h2 className="text-7xl font-bold">404</h2>
      <p>Page Not Found</p>
      <Link href={"/"} className="brand-button">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
