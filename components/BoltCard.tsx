const BoltCard = ({
  title,
  desc,
  date,
}: {
  title: string
  desc: string
  date: string
}) => {
  return (
    <div className="flex-1 rounded bg-white shadow overflow-hidden group">
      <img
        className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
        src="https://res.cloudinary.com/dugcmkito/image/upload/v1751315857/Ryan_5_4_bca957ef3e.png"
        alt=""
      />

      <div className="p-4 flex flex-col gap-3 group/bottom">
        <span className="font-medium flex items-center gap-2">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-move-right-icon lucide-move-right group-hover/bottom:translate-x-4 transition"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </span>
        <h3 className="font-bold text-lg leading-5 tracking-tight">{desc}</h3>

        <span className="text-sm">{date}</span>
      </div>
    </div>
  )
}

export default BoltCard
