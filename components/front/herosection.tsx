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
import AuctionCard from '@/components/cards/auctioncard';
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
                <div className="  p-4  basis-1/2    text-center herosectionbg"  >
                    <p className='py-2'>Welcome To FDO Bidmate Auction House</p>
                    <h1 className="text-3xl md:text-6xl font-bold mb-4">
                        {t('Build, Sell & Collect Digital items.')}
                    </h1>
                    <p className="mb-6 text-lg md:text-xl">
                        {t(' The services will provide safe, efficient, economically andenvironmentally sustainable services in innovative ways to Conserve the Environment of Our Beautiful Oman for Future Generations')}
                    </p>
                    <Link href="/dashboard/tender">
                        <button className="bg-white text-blue-500 font-semibold py-[12px] px-10 rounded-full mb-6">
                            Start Exploring
                        </button>
                    </Link>
                </div>

            </div>
            <div className=' py-[80px]' >
                <div className=" p-3 md:w-[45%] m-auto  text-center md:text-3xl  ">
                    <h1 className=" font-bold mb-2">
                        {t('Live Auction')}
                    </h1>
                    <p className="mb-6  md:text-lg ">
                        {t(' Explore on the world s best & largest Bidding marketplace with our beauty Bidding products. We want to be a part of your smile, success and future growth.')}
                    </p>
                </div>
                <div className='w-[90%] m-auto '>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                        <AuctionCard />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
