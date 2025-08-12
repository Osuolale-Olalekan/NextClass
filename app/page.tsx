import Link from "next/link"

// // string, number, undefined, null, boolean

// const persons: {
//   name: string
//   age: number
//   school: string
//   isTall: boolean
//   department?: string
// }[] = [
//   {
//     name: "Felix",
//     age: 35,
//     school: "SQI College Of ICT",
//     isTall: false,
//     department: "Software Engineering",
//   },
//   {
//     name: "Felix",
//     age: 35,
//     school: "SQI College Of ICT",
//     isTall: false,
//   },
// ]

export default function Home() {
  return (
    <>
      <div className="bg-[#4322AA] px-6 text-white h-10 ">
        <div className="max-w-[80rem] px-2 overflow-hidden mx-auto h-full flex justify-between">
          <div className="flex items-center h-full">
            <button className="-skew-x-6 font-semibold bg-[#10103C] px-5 h-full ">
              For Business
            </button>
            <button className="px-5 h-full font-semibold">For Users</button>
          </div>

          <div className="flex relative group">
            <div className="bg-[#68D8FC] group-hover:translate-x-0 translate-x-[105%] transition duration-500 whitespace-nowrap inset-y-0 absolute z-10 right-0 -skew-x-6 flex items-center text-black text-sm px-2 divide-x">
              <span className="px-3">Listen on:</span>
              <a
                href="#"
                className="flex items-center gap-2 hover:underline px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="14" height="6" x="5" y="14" rx="2" />
                  <rect width="10" height="6" x="7" y="4" rx="2" />
                  <path d="M2 14h20" />
                  <path d="M2 4h20" />
                </svg>
                Spotify
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:underline px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                Apple Music
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:underline px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                Youtube
              </a>
            </div>
            <button className="-skew-x-6 cursor-pointer font-semibold bg-blue-700 px-5 h-full flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 10v3" />
                <path d="M6 6v11" />
                <path d="M10 3v18" />
                <path d="M14 8v7" />
                <path d="M18 5v13" />
                <path d="M22 10v3" />
              </svg>
              Soundtrack
            </button>
          </div>
        </div>
      </div>

      <button className="bg-slate-600 hover:bg-slate-700 m-5 cursor-pointer text-white py-1.5 px-3 rounded-full text-sm">
        Get the free course
      </button>

      <Link href={"bolt"}>Go to Bolt</Link>

      <div className="m-10 border-double outline outline-red-500 p-10 border-black border-x-[20px] text-white text-2xl shadow-2xl font-mono text-justify rounded-lg bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1754152728457-902f155ebcae?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis
        enim eum excepturi accusantium culpa odit ipsa natus accusamus sed?
        Perferendis ipsam tempore dolorum totam qui mollitia sunt distinctio
        natus ipsum eaque doloribus ea, quis fugiat aliquam omnis sequi modi!
        Corrupti provident donventore ad accusamus recusandae voluptate ducimus
        quibusdam facere atque eius, modi repellat, aspernatur, reprehenderit
        minima aliquid aperiam? Excepturi, tempore?
      </div>
    </>
  )
}
