import Head from 'next/head'
import { FaArrowRightLong, FaRocket } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { FaComment } from "react-icons/fa";
import { RiChatFollowUpLine } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { MdOutlineAppRegistration } from "react-icons/md";
import Link from 'next/link';
import Frontheader from './Navbar';
import Footer from '../Layouts/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
    const { t, i18n } = useTranslation();
    let u_name = "";
    useEffect(() => {
        const u_name = localStorage.getItem("userName");
        setName(u_name ?? "");
    }, []);
    const [name, setName] = useState(u_name ?? "");

    return (
        <>
            <Frontheader />
            <div className=" bg-gradient-to-b  from-blue-400 to-purple-300 text-white min-h-screen flex flex-col gap-5 md:flex-row items-center justify-center  ">
                <div className=" md:p-3 p-5  basis-1/2 md:mt-12  max-sm:mt-[120px] text-start">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        {t('We’re Leader in Waste Management Services')}
                    </h1>
                    <p className="mb-6 text-lg md:text-xl">
                        {t(' The services will provide safe, efficient, economically andenvironmentally sustainable services in innovative ways to Conserve the Environment of Our Beautiful Oman for Future Generations')}
                    </p>
                    <Link href="/dashboard/tender">
                        <button className="bg-white text-blue-500 font-semibold py-[12px] px-10 rounded-full mb-6">
                            Book a Demo
                        </button>
                    </Link>
                </div>
                <div className=" max-w-md space-y-2  basis-1/2 md:mt-12 max-sm:mb-10">
                    <a href="#"
                        className="flex items-center justify-between bg-white text-blue-500 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 border-b-2">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                                <span className="text-xl"><FaComment /></span>
                            </div>
                            <span className="text-lg font-medium">Raise A Complaint</span>
                        </div>
                        <FaArrowRightLong />
                    </a>
                    <a href="#"
                        className="flex items-center justify-between bg-white text-blue-500 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                                <span className="text-xl"><RiChatFollowUpLine /></span>
                            </div>
                            <span className="text-lg font-medium">Case Follow Up</span>
                        </div>
                        <FaArrowRightLong />

                    </a>
                    <a href="#"
                        className="flex items-center justify-between bg-white text-blue-500 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                                <span className="text-xl"><MdOutlineAppRegistration /></span>
                            </div>
                            <span className="text-lg font-medium">Customer Registration</span>
                        </div>
                        <FaArrowRightLong />

                    </a>
                    <a href="#"
                        className="flex items-center justify-between bg-white text-blue-500 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                                <span className="text-xl"><GiArchiveRegister /></span>
                            </div>
                            <span className="text-lg font-medium">Resident Registration</span>
                        </div>
                        <FaArrowRightLong />

                    </a>
                </div>
            </div>
            <div className='' >
                <div className=" p-3 md:w-[45%] m-auto mt-12 text-center md:text-3xl">
                    <h1 className=" font-bold mb-2">
                        {t('Waste Services')}
                    </h1>
                    <p className="mb-6  md:text-xl">
                        {t(' Be’ah strongly believe that to achieve its Vision, we need to operate in a sustainable way.')}
                    </p>
                </div>
                <div className='w-[90%] m-auto flex flex-col md:flex-row gap-2'>
                    <div
                        className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col  justify-center gap-3 relative after:absolute after:h-full after:bg-purple-500 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                    >
                        <FaRocket className='text-2xl' />
                        <p
                            className="cardtxt font-semibold text-black  group-hover:text-gray-700 text-xl tracking-widest"
                        >
                            Waste Collection
                        </p>
                        <p className="blueberry font-semibold text-black text-sm leading-8 tracking-widest">
                            Be'ah business trash and recycling pickup is the best choice for the organization.
                        </p>
                        <div className="ordernow flex flex-row justify-between items-center w-full">
                        </div>
                    </div>
                    <div
                        className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col  justify-center gap-3 relative after:absolute after:h-full after:bg-purple-500 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                    >
                        <FaRocket className='text-2xl' />
                        <p
                            className="cardtxt font-semibold text-black  group-hover:text-gray-700 text-xl tracking-widest"
                        >
                            Waste Collection
                        </p>
                        <p className="blueberry font-semibold text-black text-sm leading-8 tracking-widest">
                            Be'ah business trash and recycling pickup is the best choice for the organization.
                        </p>
                        <div className="ordernow flex flex-row justify-between items-center w-full">
                        </div>
                    </div>
                    <div
                        className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col  justify-center gap-3 relative after:absolute after:h-full after:bg-purple-500 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                    >
                        <FaRocket className='text-2xl' />
                        <p
                            className="cardtxt font-semibold text-black  group-hover:text-gray-700 text-xl tracking-widest"
                        >
                            Waste Collection
                        </p>
                        <p className="blueberry font-semibold text-black text-sm leading-8 tracking-widest">
                            Be'ah business trash and recycling pickup is the best choice for the organization.
                        </p>
                        <div className="ordernow flex flex-row justify-between items-center w-full">
                        </div>
                    </div>
                    <div
                        className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col  justify-center gap-3 relative after:absolute after:h-full after:bg-purple-500 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                    >
                        <FaRocket className='text-2xl' />
                        <p
                            className="cardtxt font-semibold text-black  group-hover:text-gray-700 text-xl tracking-widest"
                        >
                            Waste Collection
                        </p>
                        <p className="blueberry font-semibold text-black text-sm leading-8 tracking-widest">
                            Be'ah business trash and recycling pickup is the best choice for the organization.
                        </p>
                        <div className="ordernow flex flex-row justify-between items-center w-full">
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
