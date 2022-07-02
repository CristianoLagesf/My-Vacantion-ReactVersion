import { User } from "phosphor-react"




const Header = () => {

    return (
        <>
            <header className="flex flex-row bg-bg-Company justify-end text-blue-100  h-[50px]">
                <div className="flex flex-row justify-evenly self-center mr-10 w-[350px] font-bold text-xl">
                    <a>Packages</a>
                    <a>Flight</a>
                    <a>Hotels</a>
                </div>
                <div className="flex-none self-center mx-8 border-double border-4 rounded border-gray-100 font-bold text-lg">
                    <a className="flex item-center gap-2 items-center mx-4">
                        <User size={32} />
                        Login
                    </a>
                </div>
            </header>
        </>
    )

}


export default Header