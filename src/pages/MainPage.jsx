
import { Player, Youtube } from "@vime/react"
import CardCitiesList from "../components/cardCities/CardCitiesList"
import Footer from "../components/Footer"
import Header from "../components/Header"

const MainPage = () => {
    return (
        <>
            <Header />
            <div className="flex  flex-row justify-center mt-20 mb-[220px]">
                <h1 className="font-extrabold text-6xl ">
                    Your vacation starts here
                </h1>
            </div>
            <div className="flex-1">

                <div className=" flex justify-center">
                    <div className="h-full w-full max-w-[800px] max-h-[50vh] aspect-video">
                        <Player>
                            <Youtube videoId="BNTs6-pNFRk" />
                            {/* <DefaultUi /> */}
                        </Player>
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">
                <CardCitiesList />
            </div>
            {/* Company msg */}
            <div className="bg-gradient-to-tr from-orange-900 to-gray-600 text-white
                w-full  h-[450px] mt-[220px] relative">
                <img src='/src/assets/images/placas.jpg'
                    className="w-full h-full  object-cover absolute mix-blend-overlay" />

                <h2 className="text-2xl  antialiased font-semibold flex justify-center pt-8">
                    Best offers for your next vacation
                </h2>
                <p className="flex justify-center w-3/6 m-auto mt-8 text-xl ">
                    Vacations should be easy that’s why we’re with you every step of the way,
                    so all you have to worry
                    is preparer your luggage.

                </p>
                <p className="flex justify-center w-3/6 m-auto mt-8">
                    Learn more about our Company policies
                </p>
                <button className="flex justify-center">Learn more</button>
            </div>

            <Footer />
        </>
    )
}

export default MainPage