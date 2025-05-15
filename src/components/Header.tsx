import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Header: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <header className="flex w-full items-center bg-white dark:bg-[#0F172A]">
            <div className="container mx-auto">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <a href="#" className="block w-full py-5">
                            <img src={logo} alt="Logo" className="rounded-2xl" />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                                    navbarOpen ? "navbarTogglerActive" : ""
                                }`}
                                id="navbarToggler"
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`${
                                    !navbarOpen ? "hidden" : ""
                                } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent`}
                            >
                                <ul className="block lg:flex">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-gray-500 dark:hover:text-white"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-gray-500 dark:hover:text-white"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-gray-500 dark:hover:text-white"
                                        >
                                            Your Images
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <a
                                href="#"
                                className="px-7 py-3 text-base font-medium text-gray-700 hover:text-gray-500 dark:text-white"
                            >
                                Login
                            </a>
                            <a
                                href="#"
                                className="rounded-md bg-blue-700 px-7 py-3 text-base font-medium text-white hover:bg-blue-900"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
