import CardFlightSearch from "../components/cardFlightSearch/CardFlightSearch"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SimpleMap from "../components/UI/GPSMAP"
import LabeledTwoThumbs from "../components/UI/RangeBar"
import SearchBarL from "../components/UI/SearchBarL"

const FlightSearch = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <SearchBarL />
            </div>
            <div className="flex flex-row min-w-max[1200px] justify-center bg-white">
                {/* siderBar filter */}
                <div className="w-[236px] mx-7">
                    <div className="bg-slate-500 rounded-md w-[236px] h-[150px]">

                    </div>
                    {/* filter by */}
                    <div className="border-t-2 mt-[20px] border-b-2 pb-[20px] 
                        flex flex-col ">
                        <h1 className="mt-5 mb-3 font-semibold font-PT tracking-wider text-base">
                            Search by Company Name
                        </h1>
                        <input type="search"
                            className=" placeholder border-b-2 bg-transparent  rounded-md"
                            placeholder="e.g. Air Canada" />
                    </div>
                    <div className="  border-b-2 pb-[20px] 
                        flex flex-col ">
                        <h1 className="mt-5 mb-3 font-semibold font-PT tracking-wider text-base">
                            Stops
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3 rounded-md border-2"
                                    id="" name="" value="" />
                                Direct
                            </label>
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3 rounded-md border-2"
                                    id="" name="" value="" />
                                1 Stop
                            </label>
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3 rounded-md border-2"
                                    id="" name="" value="" />
                                2+ Stops
                            </label>
                        </div>
                        {/* filter by */}
                    </div>
                    {/* Range Price */}
                    <div className="  border-b-2 pb-[20px] 
                        flex flex-col ">
                        <h1 className="mt-5 mb-[60px] font-semibold font-PT tracking-wider text-base">
                            Price
                        </h1>
                        <LabeledTwoThumbs />
                    </div>
                    {/* Range Price */}
                    <div className="  border-b-2 pb-[20px] 
                        flex flex-col ">
                        <h1 className="mt-5 mb-3 font-semibold font-PT 
                                        tracking-wider text-base">
                            Airlines
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3  border-2"
                                    id="" name="" value="" />
                                American Airlines
                            </label>
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3  border-2"
                                    id="" name="" value="" />
                                Air Canada
                            </label>
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3  border-2"
                                    id="" name="" value="" />
                                Delta
                            </label>
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3  border-2"
                                    id="" name="" value="" />
                                United
                            </label>
                        </div>
                    </div>
                </div>
                {/* siderBar filter */}
                <div className="mr-8">
                    <div className="mb-[8px] flex justify-between items-center">
                        <div className="text-lg font-PT font-semibold tracking-wider">
                            <span>20 Flights</span>
                        </div>
                        <select id="Sort-By"
                            className=" placeholder border-b-2 bg-transparent  rounded-md w-[180px]">
                            <option>Sort By</option>
                            <option value='Recommended'>Recommended</option>
                            <option value='High Price'>High Price</option>
                            <option value='Low Price'>Low Price</option>
                        </select>
                    </div>
                    <CardFlightSearch />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FlightSearch