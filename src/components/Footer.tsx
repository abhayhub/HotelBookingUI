import book from "../assets/booking.png"
import table from "../assets/opentable.png"
import img3 from "../assets/agoda.png"
import img4 from "../assets/priceline.png"

export default function Footer() {
  return (
    <div className="bg-blue-800 py-16">
        <div className="container  flex justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                Stepin.com
            </span>
            {/* <span className="text-white font-bold tracking-tight flex gap-4">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms of Service</p>
            </span> */}
            <ul className="text-white cursor-pointer">
                    <li>Homes</li>
                    <li>Hostels</li>
                    <li>Villas</li>
                    <li>Resorts</li>
                    <li>Apartments</li>
                    <li>Guest houses</li>
                </ul>
                <ul className="text-white cursor-pointer">
                    <li>Car rental</li>
                    <li>Flight finder</li>
                    <li>Restaurant reservations</li>
                    <li>Stepin.com for Travel Agents</li>
                </ul>
        </div>
        <p className="text-white mx-36 mt-10">Copyright 2024-2080 Stepin.com.All right reserved</p>
        <div className="flex justify-around gap-5 mx-56 mt-14 py-4 bg-white rounded-md">
        <img src={book} alt="book"/>
        <img src={img3} alt="agoda"/>
        <img src={table} alt="table"/>
        <img src={img4} alt="priceline"/>
        </div>
    </div>
  )
}
