


import { Logo } from "./Logo"
import { useState } from "react";
import { AirplaneTakeoff, Bed, List, Package } from 'phosphor-react';
import Login from './login/Login';
import { NavLink } from 'react-router-dom';



const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center 
                justify-between px-2 py-3 bg-bg-Company mb-3 text-blue-100">

                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between 
                                    lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink to='/'
                            className="inline-block mr-4 py-2 "

                        >
                            <div className=" w-[120px] h-auto flex ">
                                <Logo />
                            </div>
                        </NavLink>

                        <button
                            className=" px-3 py-1 block 
                                lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <List size={32} color="#f7f7f7" weight="bold" />
                        </button>

                    </div>

                    <div
                        className={
                            "lg:flex flex-grow items-center justify-end " +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className={" " + (navbarOpen && "pl-6")}>
                                <NavLink to='/'
                                    className="px-3 py-2 flex items-center font-bold text-2xl   
                                    hover:opacity-75  hover:underline underline-offset-2"

                                >
                                    {navbarOpen ? (<Package size={32} color="#f7f7f7" weight="bold" className='mr-4' />) : ''} Packages
                                </NavLink>
                            </li>
                            <li className={" " + (navbarOpen && "pl-6")}>
                                <NavLink to='psearch'
                                    className="px-3 py-2 flex items-center font-bold text-2xl   
                                    hover:opacity-75  hover:underline underline-offset-2"

                                >
                                    {navbarOpen ? (<AirplaneTakeoff size={32} color="#f7f7f7" weight="bold" className='mr-4' />) : ''} Flights
                                </NavLink>
                            </li>
                            <li className={" " + (navbarOpen && "pl-6")}>
                                <NavLink to='fsearch'
                                    className="px-3 py-2 flex items-center font-bold text-2xl   
                                    hover:opacity-75  hover:underline underline-offset-2"

                                >
                                    {navbarOpen ? (<Bed size={32} color="#f7f7f7" weight="bold" className='mr-4' />) : ''} Hoteis
                                </NavLink>
                            </li>
                            <li className={" " + (navbarOpen && "order-first")}  >
                                <Login />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}




export default Header