import CardPackSearchList from "../components/cardPackSearch/CardPackSearchList"

import SimpleMap from "../components/UI/GPSMAP"
import LabeledTwoThumbs from "../components/UI/RangeBar"
import SearchBarL from "../components/UI/SearchBarL"

const PackageSearch = () => {
    return (
        <>
            <div className="flex justify-center">
                <SearchBarL />
            </div>
            <div className="flex  flex-row min-w-max[1200px] justify-center bg-white">
                {/* siderBar filter */}
                <div className="w-[236px] mx-7">
                    <div className="bg-slate-500 rounded-md w-[236px] h-[150px]">
                        <SimpleMap />
                    </div>
                    {/* filter by */}
                    <div className="border-t-2 mt-[20px] border-b-2 pb-[20px] 
                        flex flex-col ">
                        <h1 className="mt-5 mb-3 font-semibold font-PT tracking-wider text-base">
                            Search by Hotel Name
                        </h1>
                        <input type="search"
                            className=" placeholder border-b-2 bg-transparent  rounded-md"
                            placeholder="e.g. Best Western" />
                    </div>
                    <div className="  border-b-2 pb-[20px] 
                        flex flex-col ">
                        <h1 className="mt-5 mb-3 font-semibold font-PT tracking-wider text-base">
                            Filter by
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3 rounded-md border-2"
                                    id="" name="" value="" />
                                Breakfast Included
                            </label>
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3 rounded-md border-2"
                                    id="" name="" value="" />
                                Pet Freindly
                            </label>
                            <label className="italic font-light">
                                <input type="checkbox" className="mr-3 rounded-md border-2"
                                    id="" name="" value="" />
                                Gym
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
                            Guest Rating
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            <label className="italic font-light">
                                <input type="radio" className="mr-3  border-2"
                                    id="" name="" value="" />
                                Any
                            </label>
                            <label className="italic font-light">
                                <input type="radio" className="mr-3  border-2"
                                    id="" name="" value="" />
                                Wonderful 4.5+
                            </label>
                            <label className="italic font-light">
                                <input type="radio" className="mr-3  border-2"
                                    id="" name="" value="" />
                                Very good 4+
                            </label>
                            <label className="italic font-light">
                                <input type="radio" className="mr-3  border-2"
                                    id="" name="" value="" />
                                Good 3.5+
                            </label>
                        </div>
                    </div>
                </div>
                {/* siderBar filter */}
                <div className="mr-8">
                    <div className="mb-[8px] flex justify-between items-center">
                        <div className="text-lg font-PT font-semibold tracking-wider">
                            <span>20 Hotels Available</span>
                        </div>
                        <select id="Sort-By"
                            className=" placeholder border-b-2 bg-transparent  rounded-md w-[180px]">
                            <option>Sort By</option>
                            <option value='Recommended'>Recommended</option>
                            <option value='Price'>Price</option>
                            <option value='Start rating'>Start Rating</option>
                            <option value='sort'>sort</option>
                            <option value='sort'>sort</option>
                            <option value='sort'>sort</option>
                        </select>
                    </div>
                    <CardPackSearchList />
                </div>
            </div>
        </>
    )
}

export default PackageSearch