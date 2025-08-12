import BoltCard from "@/components/BoltCard"

const Page = () => {
  return (
    <div>
      <div className="flex bg-gray-100 min-h-screen items-center flex-col justify-center gap-8 p-10">
        <button className="brand-button" disabled>
          Hello there!
        </button>
        <button className="brand-button">Hello there!</button>
        <button className="flex items-center gap-3 border rounded-lg p-[40px] border-gray-300 hover:skew-12 transition duration-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="size-6"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="size-6"
          >
            <path d="M96 144C87.2 144 80 151.2 80 160L80 448C80 456.8 87.2 464 96 464L99.3 464C109.7 427.1 143.7 400 184 400C224.3 400 258.2 427.1 268.7 464L371.3 464C376.2 446.6 386.4 431.3 400 420.1L400 160C400 151.2 392.8 144 384 144L96 144zM99.3 512L96 512C60.7 512 32 483.3 32 448L32 160C32 124.7 60.7 96 96 96L384 96C419.3 96 448 124.7 448 160L448 192L503.4 192C520.4 192 536.7 198.7 548.7 210.7L589.3 251.3C601.3 263.3 608 279.6 608 296.6L608 448C608 483.3 579.3 512 544 512L540.7 512C530.3 548.9 496.3 576 456 576C415.7 576 381.8 548.9 371.3 512L268.7 512C258.3 548.9 224.3 576 184 576C143.7 576 109.8 548.9 99.3 512zM448 320L560 320L560 296.6C560 292.4 558.3 288.3 555.3 285.3L514.7 244.7C511.7 241.7 507.6 240 503.4 240L448 240L448 320zM448 368L448 400.4C450.6 400.2 453.3 400 456 400C496.3 400 530.2 427.1 540.7 464L544 464C552.8 464 560 456.8 560 448L560 368L448 368zM184 528C206.1 528 224 510.1 224 488C224 465.9 206.1 448 184 448C161.9 448 144 465.9 144 488C144 510.1 161.9 528 184 528zM456 528C478.1 528 496 510.1 496 488C496 465.9 478.1 448 456 448C433.9 448 416 465.9 416 488C416 510.1 433.9 528 456 528z" />
          </svg>
          Continue with Google
        </button>

        <h3 className="text-2xl md:text-5xl text-center font-semibold">
          Bolt in the News
        </h3>
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl lg:max-w-5xl">
          <BoltCard
            title="Bloomberg"
            desc="Palantir Partners With Former Fintech Darling Bolt for AI Checkout"
            date="Jun 5, 2025"
          />

          <BoltCard
            title="TechCrunch"
            desc="Fintech Bolt progresses its turnaround by landing Klarna as a partner"
            date="Jun 30, 2025"
          />
          <BoltCard
            title="Traders"
            desc="Union Jeremy Allaire supports Bolt move to integrate USDC payments"
            date="Jun 28, 2025"
          />
        </div>
        <div>
          <button className="rounded-full px-5 py-3 bg-blue-600 hover:bg-[#68D8FC] hover:text-black hover:scale-105 transition duration-500 text-white font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
