

import CardCitiesList from "../components/cardCities/CardCitiesList"
import CardHoteisList from "../components/cardHoteis/CardHoteisList"
import Footer from "../components/Footer"
import Header from "../components/Header"


import '../styles/global.css'
import CardCompany from "../components/UI/CardCompany"
import SearchBar from "../components/UI/SearchBar"

const textCompany = [
    " ",
    "Satisfaction Guaranteed"
]

const MainPage = () => {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Header */}
            <div className="grid justify-center bg-white">
                {/* ========== TOP Text ============ */}
                <div className="flex  flex-col  mt-[50px] mb-[200px] ">
                    <h1 className="font-bold text-6xl font-sans text-blue-10 uppercase mb-[10px] text-center">
                        Your vacation starts here
                    </h1>

                </div>
                {/* ========== TOP Text ============ */}
                <div className='flex justify-center flex-col relative w-[1000px]'>
                    <div className="absolute top-[-110px] left-[40px]">
                        <SearchBar />
                    </div>

                    <div className='bg-bgImage h-[500px] w-full max-w-[1000px] bg-cover rounded-md '>
                    </div>
                </div>
                {/* Company msg */}
                <div className=" text-gray-200 bg-cover  
                w-full  h-[270px] mt-[220px]  grid justify-items-center "
                >
                    <h2 className="text-4xl font-semibold font-PT text-blue-10 pt-4">
                        Why Choose My Vacation?
                    </h2>
                    <div className="flex  items-center  w-[700px] justify-between h-[150px] pt-[40px]">
                        <CardCompany className="mr-9" title="Best Offers" body={textCompany[0]} icon='0' />
                        <CardCompany title="Destinations" body={textCompany[0]} icon='1' />
                        <CardCompany title="Support 24/7" body={textCompany[0]} icon='2' />
                    </div>
                </div>

                {/* ========== Middle Site Company Msg  ============ */}
                <div className=" mt-[140px] grid justify-items-center">
                    <h2 className="text-3xl font-semibold text-blue-10">
                        Looking Something New?
                    </h2>
                    <p className="text-lg font-medium text-gray-300 leading-10 italic">
                        Check out the hottest Destinations
                    </p>
                </div>
                <div className="flex justify-center mt-[40px] mb-[120px] ">
                    <CardCitiesList />
                </div>
                {/* ========== Middle Site Company Msg  ============ */}
                <div className=" mt-[40px] grid justify-items-center">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Best Hoteis Accordiong our users
                    </h2>
                    <p className="text-lg font-medium text-gray-300 leading-10 italic">
                        Check out our Favorite Cities
                    </p>
                </div>
                <div className="flex justify-center mt-[40px] mb-[220px] ">
                    <CardHoteisList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainPage