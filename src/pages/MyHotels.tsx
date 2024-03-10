import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from '../api-client';
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

export default function MyHotels() {

    const { data: hotelData } = useQuery("fecthMyHotels", apiClient.fecthMyHotels, {
        onError: () => {
    }
    })

    if(!hotelData){
        return <span>No Hotels found</span>;
    }
  
    return (
    <div className="space-y-5">
        <span className="flex justify-between">
            <h1 className="text-3xl font-bold">My Hotels</h1>
            <Link to="/add-hotel" className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500">Add Hotel</Link>   
        </span>
        <div className="grid grid-cols-1 gap-8">
            {hotelData.map((hotel,idx) => (
                <div key={idx} className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5">
                    <h2 className="text-2xl">{hotel.name}</h2>
                    <div className="whitespace-pre-line">{hotel.description}</div>
                    <div className="grid grid-col-5 gap-2">
                        <div className="border border-slate-300 rounded-sm p-3 flex item-center">
                            <BsMap className="mr-2 mt-1"/>
                            {hotel.city}, {hotel.country}
                        </div>
                        <div className="border border-slate-300 rounded-sm p-3 flex item-center">
                            <BsBuilding className="mr-2 mt-1"/>
                            {hotel.type}
                        </div>
                        <div className="border border-slate-300 rounded-sm p-3 flex item-center">
                            <BiMoney className="mr-2 mt-1"/>
                            ${hotel.pricePerNight} per night
                        </div>
                        <div className="border border-slate-300 rounded-sm p-3 flex item-center">
                            <BiHotel className="mr-2 mt-1"/>
                            {hotel.adultCount} adults, {hotel.childCount} children
                        </div>
                        <div className="border border-slate-300 rounded-sm p-3 flex item-center">
                            <BiStar className="mr-2 mt-1"/>
                            {hotel.starRating} Star Rating
                        </div>
                    </div>
                    <span>
                        <Link to={`/edit-hotel/${hotel._id}`} className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500">
                            View Detail
                        </Link>
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}
