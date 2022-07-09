import { useSelector } from 'react-redux'

import CardHoteis from './CardHoteis'
import { selectAllHoteis } from './CardHoteisSlice'
import "../../styles/global.css";

import { useState } from 'react';

const imagePerRow = 2;
const CardHoteisList = () => {
    const [next, setNext] = useState(imagePerRow);
    const hoteis = useSelector(selectAllHoteis)

    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };

    return (
        <div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-7 ">
                {hoteis?.slice(0, next)?.map((hoteis, index) => {
                    return (
                        <div key={index} className="px-2.5 md:px-0">
                            <CardHoteis hoteis={hoteis} />
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center">
                {next < hoteis?.length && (
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

export default CardHoteisList







