import { useSelector } from 'react-redux'
import CardCities from './CardCities'
import { selectAllCities } from './CardCitiesSlice'
import { useState } from 'react';

const imagePerRow = 2;
const CardCitiesList = () => {
    const [next, setNext] = useState(imagePerRow);
    const cities = useSelector(selectAllCities)

    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };

    return (
        <div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-7 ">
                {cities?.slice(0, next)?.map((cities, index) => {
                    return (
                        <div key={index} className="px-2.5 md:px-0">
                            <CardCities cities={cities} />
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center">
                {next < cities?.length && (
                    <button
                        className=" border-4 border-blue-10 bg-blue-10
                        w-[110px] h-[40px] font-semibold uppercase rounded-md place-self-end  m-[20px]
                active:border-blue-50 text-white
                "
                        onClick={handleMoreImage}
                    >
                        Load more
                    </button>
                )}
            </div>
        </div >
    )
}

export default CardCitiesList