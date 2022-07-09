import { CurrencyDollar, AirplaneInFlight, WhatsappLogo } from 'phosphor-react'


const CardCompany = (props) => {
    const icons = [
        <CurrencyDollar size={50} color="#93c5fd" weight="bold" />,
        <AirplaneInFlight size={50} color="#93c5fd" weight="bold" />,
        <WhatsappLogo size={50} color="#93c5fd" weight="bold" />
    ]
    return (

        <div className=" w-[190px] h-[120px] transition-all duration-300 shadow-xl 
                    overflow-hidden text-center bg-white
                    hover:h-[254px] ">
            <div className="header p-[20px] flex flex-col items-center 
                        bg-blue-10 mb-[16px]">
                <div className=" w-[50px] h-[60px]">
                    {icons[props.icon]}
                </div>
                <h1 className=" text-lg tracking-widest font-semibold uppercase 
                        transition-all duration-300 text-blue-300 
                        ">
                    {props.title}
                </h1>
            </div>

            <div className="content block text-justify text-blue-700 px-[18px] bg-white">
                <p>
                    {props.body}
                </p>


            </div>
        </div>
    )
}

export default CardCompany