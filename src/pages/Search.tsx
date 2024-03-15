import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/SearchContext"
import * as apiClient from "../api-client";
import { useState } from "react";
import SearchResultsCard from "../components/SearchResultCard";

export default function Search() {

  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);

  const searchParams = {
    destination: search.destination,
    checkIn: search.checkIn.toISOString(),
    checkOut: search.checkOut.toISOString(),
    adultCount: search.adultCount.toString(),
    childCount: search.childCount.toString(),
    page: page.toString(),
  };

  // const { data : hotelData } = useQuery(["searchHotels", searchParams], () => 
  //   apiClient.searchHotels(searchParams)
  // );

  const { data: hotelData } = useQuery("fecthMyHotels", apiClient.fecthMyHotels, {
    onError: () => {
}
})

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
      <div className="rounded-lg border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5 ">Filter by:</h3>
        </div>
      </div>
      <div className="flex flex-col  gap-5">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">
              {hotelData?.length} Hotels found
              {search.destination ? `in  ${search.destination}` : ""}
            </span>
          </div>
          {hotelData?.map(( hotel) => (
            <SearchResultsCard hotel={hotel}/>
          ))}
        </div>
    </div>
  )
}
