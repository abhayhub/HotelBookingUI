import bgimg from "../assets/hotel.jpeg"

export default function Hero() {
  return (
    <div className="bg-rose-800 py-auto relative">
        <img src={bgimg} alt="hotel" className="w-auto h-100 z-20 bg-cover"/>
        <div className="container mx-auto flex flex-col gap-2 absolute top-32 bottom-5">
            <h1 className="text-4xl mt-2 text-white font-bold">
                A dream stay<br/>
                for your bucket list trip
            </h1>
            <p className="text-2xl mt-4 text-white">
                Make it a trip to remember in a vacation home.. 
            </p>
        </div>
    </div>
  )
}
