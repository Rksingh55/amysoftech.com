import Head from 'next/head'
import { FaArrowRightLong, FaRocket, FaShirt } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { FaComment, FaRegBuilding } from "react-icons/fa";
import { RiChatFollowUpLine, RiMotorbikeFill } from "react-icons/ri";
import { GiArchiveRegister, GiPodiumWinner } from "react-icons/gi";
import { MdHome, MdOutlineAppRegistration, MdOutlineDesignServices, MdOutlineRateReview } from "react-icons/md";
import Link from 'next/link';
import Frontheader from './Navbar';
import Footer from '../Layouts/Footer';
import { useEffect, useState } from 'react';
import AuctionCard from '@/components/cards/auctioncard';
import { LiaCarSideSolid, LiaComments } from 'react-icons/lia';
import { LuMusic4 } from 'react-icons/lu';
import { FiWatch } from "react-icons/fi";
import { AiOutlineTeam } from 'react-icons/ai';

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

            {/* ----hersection----- */}
            <div className=" bg-gradient-to-b  from-blue-400 to-purple-300 text-white min-h-screen flex flex-col gap-5 md:flex-row items-center justify-center  ">
                <div className="  p-4  basis-1/2    text-center herosectionbg max-sm:mt-[-50px]"  >
                    <p className='py-2'>{t('Welcome To FDO Bidmate Auction House')}</p>
                    <h1 className="text-3xl md:text-6xl font-bold mb-4">
                        {t('Build, Sell & Collect Digital items')}
                    </h1>
                    <p className="mb-6 text-lg md:text-xl">
                        {t('The services will provide safe, efficient, economically andenvironmentally sustainable services in innovative ways to Conserve the Environment of Our Beautiful Oman for Future Generations')}
                    </p>
                    <Link href="/auth/login">
                        <button className="bg-white text-blue-500 font-semibold py-[12px] px-10 rounded-full mb-6">
                          {t('Start Exploring')}
                        </button>
                    </Link>
                </div>

            </div>
            <div>
            </div>

            {/* ------live auction card-------- */}
            <div className=' py-[30px]' >
                <div className=" p-3 md:w-[45%] m-auto  text-center md:text-3xl  ">
                    <h1 className=" font-bold mb-2">
                        {t('Live Auction')}
                    </h1>
                    <p className="mb-6  md:text-lg ">
                        {t('Explore on the world s best & largest Bidding marketplace with our beauty Bidding products. We want to be a part of your smile, success and future growth')}
                    </p>
                </div>
                <div className='w-[90%] m-auto '>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        <AuctionCard />
                    </div>
                </div>
            </div>

            {/* -----upcoming auction card----- */}

            <div className=' py-[30px]' >
                <div className=" p-3 md:w-[45%] m-auto  text-center md:text-3xl  ">
                    <h1 className=" font-bold mb-2">
                        {t('Upcoming Auction')}
                    </h1>
                    <p className="mb-6  md:text-lg ">
                        {t('Get ready for our next big event! Our upcoming auction promises to bring you an array of exclusive and high-quality bidding products')}
                    </p>
                </div>
                <div className='w-[90%] m-auto  flex gap-3 md:flex-row flex-col items-center'>
                    <div
                        className="relative overflow-hidden md:w-1/2 h-80  cursor-pointer  bg-purple-400"
                    >
                        <div className="z-10 absolute w-full h-full peer"></div>
                        <div
                            className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                        ></div>
                        <div
                            className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500 font-bold"
                        >
                            {t("Ford Shelby White Car")}
                        </div>
                        <div className="w-full text-white h-full items-center justify-center flex gap-2 flex-col ">
                            <div className='flex justify-center items-center gap-2'> <div className='w-[50px] h-[1px] bg-white'></div>  <p>  {t('Upcoming Auction')}</p>  <div className='w-[50px] h-[1px] bg-white'></div></div>
                            <h1 className='uppercase text-xl font-bold '> {t('This Product Coming in Next Month')}</h1>
                            <div className='flex gap-2 font-bold text-black'>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                            </div>
                            <button className='bg-black p-2 text-sm mt-2 px-4  '>{t("Get Ready")} </button>
                        </div>
                    </div>


                    <div
                        className="relative overflow-hidden md:w-1/2 h-80  cursor-pointer  bg-green-400"
                    >
                        <div className="z-10 absolute w-full h-full peer"></div>
                        <div
                            className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-green-300 transition-all duration-500"
                        ></div>
                        <div
                            className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-green-300 transition-all duration-500 font-bold"
                        >
                                 {t("Ford Shelby White Car")}
                        </div>
                        <div className="w-full text-white h-full items-center justify-center flex gap-2 flex-col ">
                            <div className='flex justify-center items-center gap-2'> <div className='w-[50px] h-[1px] bg-white'></div>  <p>{t('Upcoming Auction')}</p>  <div className='w-[50px] h-[1px] bg-white'></div></div>
                            <h1 className='uppercase text-xl font-bold mx-sm:text-center'> {t('This Product Coming in Next Month')}</h1>
                            <div className='flex gap-2 font-bold text-black'>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                            </div>
                            <button className='bg-black p-2 text-sm mt-2 px-4  '>{t("Get Ready")} </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
