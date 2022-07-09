import { BriefcaseMetal } from "phosphor-react"



const CardFlightSearch = () => {


    return (
        <>
            <div className="border rounded-lg flex flex-row w-[726px] h-[177px] bg-gray-100 text-blue-10">
                {/* div with flight information */}
                <div className=" w-[560px] h-[177px] pl-[15px] flex  flex-col  justify-evenly border-r-2">
                    {/* div departure */}
                    <div className="flex h-[52px] justify-center items-center">
                        {/* checkBox */}
                        <div className="mr-[15px]">
                            <input className="rounded-md border-2 w-[20px] h-[20px]" type="checkbox" />
                        </div>
                        {/* checkBox */}
                        {/* logo */}
                        <div className=" flex  w-[55px] h-[35px]">
                            <img src="src/assets/images/airlines/klm.png" alt="visa" />
                        </div>
                        {/* logo */}
                        {/* depart & return */}
                        <div className=" flex gap-x-5">
                            <div className=" flex flex-col">
                                <span className="font-bold">10:55pm</span>
                                <span className="font-light italic text-xs">YYZ Person Intl</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">09:45am</span>
                                <span className="font-light italic text-xs">GRU Guarulhos Intl</span>
                            </div>
                        </div>
                        {/* depart & return */}
                        {/* qtd stop */}
                        <div className="mx-[30px]">
                            <span className="font-bold">1 stop</span>
                            <span></span>
                        </div>
                        {/* qtd stop */}
                        {/* flight hours*/}
                        <div className="ml-[30px]">
                            <span className="font-bold pr-[20px]">
                                9h 50m
                            </span>
                        </div>
                        {/* flight hours*/}
                    </div>
                    {/* div departure */}

                    {/* div return */}
                    <div className="flex h-[52px] justify-center items-center">
                        {/* checkBox */}
                        <div className="mr-[15px]">
                            <input className=" rounded-md border-2 w-[20px] h-[20px]" type="checkbox" />
                        </div>
                        {/* checkBox */}
                        {/* logo */}
                        <div className=" flex  w-[55px] h-[35px]">
                            <img src="src/assets/images/airlines/emiratesAirline.png" alt="visa" />
                        </div>
                        {/* logo */}
                        {/* depart & return */}
                        <div className=" flex gap-x-5">
                            <div className=" flex flex-col">
                                <span className="font-bold">10:55pm</span>
                                <span className="font-light italic text-xs">YYZ Person Intl</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">09:45am</span>
                                <span className="font-light italic text-xs">GRU Guarulhos Intl</span>
                            </div>
                        </div>
                        {/* depart & return */}
                        {/* qtd stop */}
                        <div className="mx-[30px]">
                            <span className="font-bold">1 stop</span>
                            <span></span>
                        </div>
                        {/* qtd stop */}
                        {/* flight hours*/}
                        <div className="ml-[30px] pr-[20px]">
                            <span className="font-bold">
                                9h 50m
                            </span>
                        </div>
                        {/* flight hours*/}
                    </div>
                    {/* div return */}


                </div>
                {/* div with flight information */}

                <div className="w-[166px]">
                    <div className="border  border-blue-10 flex ml-[20px] mt-[10px] w-[50px] gap-x-2 ">
                        <BriefcaseMetal size={32} color="#070335" weight="bold" />
                        <label className="text-2xl font-bold ">2</label>
                    </div>
                    <div className="flex flex-col justify-center mt-[30px] pl-[20px]">
                        <label className="font-bold text-xl">
                            $ 2,200
                        </label >
                        <label className="text-xs italic">
                            Economy
                        </label>
                    </div>
                    {/* BT Reserve */}
                    <div className="flex justify-center">
                        <button className=" border-4 border-blue-10  bg-blue-10  
                        w-[130px] h-[40px] font-semibold uppercase rounded-md place-self-end  m-[5px]
                        active:border-blue-50 text-white hover:bg-blue-600 hover:border-blue-600
                        ">
                            Reserve
                        </button>
                    </div>
                    {/* BT Reserve */}
                </div>
            </div>


        </>
    )
}


export default CardFlightSearch