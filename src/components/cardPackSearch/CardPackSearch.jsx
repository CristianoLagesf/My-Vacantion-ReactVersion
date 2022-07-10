import { Barbell, Coffee, Dog } from "phosphor-react"
import { Link, Navigate } from "react-router-dom"


const CardPackSearch = ({ hoteis }) => {
    if (hoteis) {
        const { HotelName, Photo, city, price, reviewsScore, reviewsQTD } = hoteis

        return (
            <>
                <div className="border rounded-lg flex flex-col  w-[756px] h-[286px] bg-gray-100">
                    <div className="flex ">
                        {/* div image */}
                        <div className="w-[300px] h-[236px]">
                            <img className="w-[300px] h-[236px]"
                                src={Photo} />
                        </div>
                        {/* div image */}
                        {/* div hotel info */}
                        <div className=" w-full pl-[15px] flex  justify-between h-[236px] border-b-2">
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-semibold font-PT text-blue-10 tracking-wider">
                                    {HotelName}
                                </h1>
                                <h4 className="text-blue-10 italic text-lg font-medium mb-[20px]">
                                    {city}
                                </h4>
                                <ul className=" text-blue-10 italic text-base font-light">
                                    <li className="mr-[20px] flex gap-x-2 ">
                                        <Barbell size={20} color="#070335" weight="bold" />
                                        Gym
                                    </li>
                                    <li className="mr-[20px] flex gap-x-2">
                                        <Dog size={20} color="#070335" weight="bold" />
                                        Pet Freindly
                                    </li>
                                    <li className="mr-[20px] flex gap-x-2">
                                        <Coffee size={20} color="#070335" weight="bold" />
                                        Breakfast Included
                                    </li>
                                </ul>
                                {/* Review */}
                                <p className=" font-light mt-[50px]">
                                    <span className="border bg-blue-10 text-white
                                        rounded-md p-2 font-bold ">
                                        {reviewsScore}
                                    </span>
                                    ({reviewsQTD} Reviews)
                                </p>
                                {/* Review */}
                            </div>
                            {/* Div amount */}
                            <div className="mr-[15px] flex flex-col justify-end ">
                                <div className="flex flex-col text-green-700 font-PT text-base font-bold mb-[30px]">
                                    <span>Fully Refundable</span>
                                    <span>Reserve now, pay later</span>
                                </div>
                                <p className="text-2xl font-bold  text-blue-10 mb-[10px]  pl-[5px]">
                                    <span className="italic text-xs font-light">Per Day </span>
                                    US ${price}
                                </p>
                                <p className="text-sm font-normal  text-blue-10 
                                    mb-[30px]  pl-[60px]">
                                    US ${price} total
                                </p>
                            </div>
                            {/* Div amount */}
                        </div>
                        {/* div hotel info */}
                    </div>
                    {/* BT Reserve */}

                    <Link to='/fsearch' className=" border-4 border-blue-10  bg-blue-10  
                        w-[110px] h-[60px] font-semibold uppercase rounded-md place-self-end  m-[5px]
                        active:border-blue-50 text-white hover:bg-blue-600 hover:border-blue-600 text-center
                        ">
                        Reserve

                    </Link>
                    {/* BT Reserve */}
                </div>
            </>
        )
    }
}

export default CardPackSearch