import '../../styles/global.css'


const CardCidades = ({ cities }) => {
    if (cities) {
        const { name, Photo } = cities
        return (
            <>

                <div className="card w-[300px] h-[260px] relative  ">
                    <img className=" bg-cover bg-no-repeat w-full h-full 
                                        absolute rounded-md top-0 left-0"
                        src={Photo}
                    />

                    <div className="w-[300px] h-[260px]">
                        <div className="card-info relative  opacity-0 
                                        translate-y-1/4 duration-1000 mb-[130px] ml-1">
                            <p className="text-2xl text-gray-10 font-bold">{name}</p>
                        </div>
                        <div className="card-info relative  opacity-0 translate-y-1/4 duration-1000
                            flex justify-center pt-8 ">
                            <button className="card-button">Check Hotels Available</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default CardCidades