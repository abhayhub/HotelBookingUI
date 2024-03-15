import { AiFillStar } from 'react-icons/ai'
import { HotelType } from '../../../backend/src/shared/types'

type Props = {
    hotel: HotelType
}

export default function SearchResultsCard({hotel} : Props) {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8'>
        <div className='w-full h-[300px]'>
            <img src={hotel.imageUrls[0]} className='w-full h-full object-cover object-center'/>
        </div>
        <div className='grid grid-rows-[1fr_2fr_3fr]'>
            <div>
                <div className='flex items-center'>
                    <span className='flex'>
                        {Array.from({length: hotel.starRating}).map(() => (
                            <AiFillStar className="fill-yellow-400"/>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
