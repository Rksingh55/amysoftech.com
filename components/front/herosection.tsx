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


    const Productcard = [
        {
            name: "Office",
            icon: <FaRegBuilding />

        },
        {
            name: "Bike",
            icon: <RiMotorbikeFill />

        },
        {
            name: "Cars",
            icon: <LiaCarSideSolid />
        },
        {
            name: "Fashion",
            icon: <FaShirt />

        },
        {
            name: "Music",
            icon: <LuMusic4 />

        },
        {
            name: "Design",
            icon: <MdOutlineDesignServices />

        },
        {
            name: "Home",
            icon: <MdHome />

        },
        {
            name: "Watches",
            icon: <FiWatch />

        },
    ]



    return (
        <>
            <Frontheader />

            {/* ----hersection----- */}
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

            {/* -----product card----- */}

            <div className='w-[90%] m-auto flex flex-wrap justify-between py-12 '>
                {
                    Productcard?.map((item, value) => (
                        <div className='w-[140px] h-[140px] bg-white max-sm:mt-2    flex flex-col gap-2 justify-center items-center border-b-[2px] cursor-pointer border-blue-400 hover:shadow-lg'>
                            {item.icon && <div className='text-4xl text-blue-300'>{item.icon}</div>}
                            <h1 className='text-xl  '>{item?.name}</h1>
                        </div>
                    ))
                }
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
                        {t(' Explore on the world s best & largest Bidding marketplace with our beauty Bidding products. We want to be a part of your smile, success and future growth.')}
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
                        {t(' Get ready for our next big event! Our upcoming auction promises to bring you an array of exclusive and high-quality bidding products. ')}
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
                            Ford Shelby White Car
                        </div>
                        <div className="w-full text-white h-full items-center justify-center flex gap-2 flex-col ">
                            <div className='flex justify-center items-center gap-2'> <div className='w-[50px] h-[1px] bg-white'></div>  <p>Upcoming Auction</p>  <div className='w-[50px] h-[1px] bg-white'></div></div>
                            <h1 className='uppercase text-xl font-bold '> This Product Coming in Next Month.</h1>
                            <div className='flex gap-2 font-bold text-black'>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                            </div>
                            <button className='bg-black p-2 text-sm mt-2 px-4  '>Get Ready </button>
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
                            Ford Shelby White Car
                        </div>
                        <div className="w-full text-white h-full items-center justify-center flex gap-2 flex-col ">
                            <div className='flex justify-center items-center gap-2'> <div className='w-[50px] h-[1px] bg-white'></div>  <p>Upcoming Auction</p>  <div className='w-[50px] h-[1px] bg-white'></div></div>
                            <h1 className='uppercase text-xl font-bold mx-sm:text-center'> This Product Coming in Next Week.</h1>
                            <div className='flex gap-2 font-bold text-black'>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                                <div className='bg-white px-3 py-2'>00</div>
                            </div>
                            <button className='bg-black p-2 text-sm mt-2 px-4  '>Get Ready </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------latest news card------- */}
            <div className=' py-[80px]' >
                <div className=" p-3 md:w-[45%] m-auto  text-center md:text-3xl  ">
                    <h1 className=" font-bold mb-2">
                        {t('Latest News')}
                    </h1>
                    <p className="mb-6  md:text-lg ">
                        {t('Our latest updates feature an enhanced selection of beautiful bidding products, designed to elevate your experience and provide unparalleled opportunities for success. ')}
                    </p>
                </div>
                <div className='w-[90%] m-auto'>
                    <div className='flex gap-4 flex-wrap items-center justify-center'>
                        <div
                            className="max-w-xs overflow-hidden bg-white    transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
                            ></div>
                            <div>
                                <img src='https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/elsa-noblet-5KD5PmZEfcg-unsplash-1.jpg' />
                            </div>
                            <div className="p-6 relative z-10">
                                <p className="text-xl font-semibold text-gray-800">An Introvert’s Guide to Be Successful at Work</p>
                                <p className="mt-2 text-gray-600">
                                    Our classNameic blue jeans are a timeless addition to your wardrobe. Crafted
                                    from premium denim, they offer both style and comfort. Perfect for any
                                    casual occasion.
                                </p>
                                <div className="flex items-center mt-4 text-gray-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 fill-current text-yellow-500"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path>
                                    </svg>
                                    <span className="ml-2">4.8 (24 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="max-w-xs overflow-hidden bg-white   transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
                            ></div>
                            <div>
                                <img src='https://d3nn873nee648n.cloudfront.net/900x600/11949/1-CR367517.jpg' />
                            </div>
                            <div className="p-6 relative z-10">
                                <p className="text-xl font-semibold text-gray-800">Why You Should (Often) Pay More for Links</p>
                                <p className="mt-2 text-gray-600">
                                    Our classNameic blue jeans are a timeless addition to your wardrobe. Crafted
                                    from premium denim, they offer both style and comfort. Perfect for any
                                    casual occasion.
                                </p>
                                <div className="flex items-center mt-4 text-gray-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 fill-current text-yellow-500"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path>
                                    </svg>
                                    <span className="ml-2">4.8 (24 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="max-w-xs overflow-hidden bg-white   transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
                            ></div>
                            <div>
                                <img src='https://d3nn873nee648n.cloudfront.net/900x600/11954/1-CR367670.jpg' />
                            </div>
                            <div className="p-6 relative z-10">
                                <p className="text-xl font-semibold text-gray-800">David Droga Still Has Faith in Online Creative.</p>
                                <p className="mt-2 text-gray-600">
                                    Our classNameic blue jeans are a timeless addition to your wardrobe. Crafted
                                    from premium denim, they offer both style and comfort. Perfect for any
                                    casual occasion.
                                </p>
                                <div className="flex items-center mt-4 text-gray-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 fill-current text-yellow-500"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path>
                                    </svg>
                                    <span className="ml-2">4.8 (24 reviews)</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-[90%] m-auto py-12  '>
                    <div className='flex gap-2 flex-col md:flex-row '>
                        <div className='basis-1/4 bg-white  p-4  flex  items-center justify-center'>
                            <div className='flex  gap-4'>
                                <div className='flex justify-center items-center'>
                                    <AiOutlineTeam className='text-5xl text-blue-400' />
                                </div>
                                <div>
                                    <h1 className='font-semi-bold text-3xl'>4,400</h1>
                                    <h1 className='text-xl mt-1'>Happy Customer</h1></div>
                            </div>
                        </div>
                        <div className='basis-1/4 bg-white  p-3 flex  items-center justify-center'>
                            <div className='flex  gap-4'>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineRateReview className='text-5xl text-blue-400' />
                                </div>
                                <div>
                                    <h1 className='font-semi-bold text-3xl'>8,700</h1>
                                    <h1 className='text-xl mt-1'>Good Reviews</h1></div>
                            </div>
                        </div>
                        <div className='basis-1/4 bg-white  p-3 flex  items-center justify-center'>
                            <div className='flex  gap-4'>
                                <div className='flex justify-center items-center'>
                                    <GiPodiumWinner className='text-5xl text-blue-400' />
                                </div>
                                <div>
                                    <h1 className='font-semi-bold text-3xl'>270</h1>
                                    <h1 className='text-xl mt-1'>Winner Customer</h1></div>
                            </div>
                        </div>
                        <div className='basis-1/4 bg-white  p-3 flex  items-center justify-center'>
                            <div className='flex  gap-4'>
                                <div className='flex justify-center items-center'>
                                    <LiaComments className='text-5xl text-blue-400' />
                                </div>
                                <div>
                                    <h1 className='font-semi-bold text-3xl '>2,400</h1>
                                    <h1 className='text-xl mt-1'>New Comments</h1></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
