import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from '../api-client';
import { BsBuilding, BsMap } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

export default function MyHotels() {

    const { data: hotelData } = useQuery("fecthMyHotels", apiClient.fecthMyHotels, {
        onError: () => {
    }
    })

    if(!hotelData){
        return <span>No Hotels found</span>;
    }

    let num = Math.floor((Math.random() * 10) + 1);
  
    return (
    <div className="space-y-5">
        <span className="flex justify-between">
            <h1 className="text-3xl font-bold">My Hotels</h1>
            <Link to="/add-hotel" className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500">Add Hotel</Link>   
        </span>
        <div className="grid grid-cols-1 gap-8">
            {hotelData.map((hotel,idx) => (
                <div key={idx} className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5 ring-2 ring-blue-300 ring-inset shadow-lg shadow-cyan-150/50">

                    {/* <h2 className="text-2xl">{hotel.name}</h2>
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
                            <span>&#8377;</span>{hotel.pricePerNight} per night
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
                    </span> */}
                    <div className="flex gap-10">
                        <img src={hotel.imageUrls[0]} alt="hotelimg" className="w-56 rounded-md object-cover"/>
                        <div>
                            <h1 className="text-blue-500 font-bold">{hotel.name} <span>{hotel.starRating}<AiFillStar className="inline text-orange-300 text-2xl mb-1"/></span></h1>
                            <span className="text-blue-500 text-sm font-medium">{hotel.city} , {hotel.country}</span>
                            <p className="text-sm mt-2 ">{hotel.description}</p>
                            <span><BiHotel className="inline text-2xl"/>
                            <p className="inline pl-2 pt-2">{hotel.adultCount} adults, {hotel.childCount} children </p></span>
                            <p><span>&#8377;</span><span className="font-bold">{hotel.pricePerNight}</span> per night. Includes taxes and fees</p>
                            <p className="text-sm text-rose-500">Only {idx + num} rooms left at this price on our site</p>
                            <span>
                            <Link to={`/edit-hotel/${hotel._id}`} className="flex bg-rose-400 text-white text-xl font-bold p-2 mt-1 hover:bg-rose-500 w-56 justify-center rounded-md">
                                View Detail
                            </Link>
                    </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
