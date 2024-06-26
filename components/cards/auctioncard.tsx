import React, { useState } from 'react';
import { RiAuctionFill } from 'react-icons/ri';
import { FcCurrencyExchange } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';
import Countdown from 'react-countdown';
import { BiDollarCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useAppDispatch } from '../../store/hooks';
import { addCard } from '../../Reducer/clickedCardsSlice';

import { LuArrowRightLeft } from 'react-icons/lu';
dayjs.extend(isBetween);

function AuctionCard() {
    const router = useRouter();

    const cars = [
        {
            id:"AUCT000001",
            Name: 'KIA',
            model: 'Sorento',
            year: 2014,
            imageUrl: 'https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1717741403~exp=1717745003~hmac=b12a164652bf5a44bc7c6a228e72d2457832c6fc74604d05aeaeca33bde8bf84&w=900',
            currentBid: 876.00,
            bids: 30,
            buyNow: 50000,
            AuctionType: 'Forward',
            publishDate: 'May 10 2024'
        },
        {
            id:"AUCT000002",
            Name: 'KIA',
            model: 'Suzuki Swift',
            year: 2022,
            imageUrl: 'https://img.freepik.com/free-photo/front-wheel-blue-vintage-sedan_114579-6115.jpg?t=st=1717741420~exp=1717745020~hmac=b53eaa336feed7766426dc6aff1652050268631ae989938fae6083ce004fe34e&w=900',
            currentBid: 876.00,
            bids: 20,
            buyNow: 4000,
            AuctionType: 'Reverse',
            publishDate: 'Jun 18 2024'
        },
        {
            id:"AUCT000003",
            Name: 'KIA',
            model: 'Kia Seltos',
            year: 2023,
            imageUrl: 'https://d3nn873nee648n.cloudfront.net/900x600/20487/300-PK1047952.jpg',
            currentBid: 876.00,
            bids: 30,
            buyNow: 12400,
            AuctionType: 'Reverse',
            publishDate: 'Aug 20 2024'
        },

    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState<any>();
    const [endDate, setEndDate] = useState<any>();

    const dispatch = useAppDispatch();
    const handleBid = (auctionType: any, car: any, id: any) => {
        dispatch(addCard(car));
        router.push({
            pathname: '/auction/auction-preview',
            query: { id, auctionType },
        });
    };




    const handleSearchChange = (e: any) => {
        setSearchQuery(e.target.value);
    };

    const filteredCars = cars?.filter(car => {
        const carPublishDate = dayjs(car?.publishDate, 'DD/MM/YYYY');
        const isWithinDateRange = startDate && endDate ? carPublishDate.isBetween(dayjs(startDate), dayjs(endDate), null, '[]') : true;
        return isWithinDateRange && `${car?.year} ${car?.Name} ${car?.model} ${car?.AuctionType} `.toLowerCase().includes(searchQuery?.toLowerCase());
    });

    return (
        <>
            <div className='py-3 flex justify-center flex-col md:flex-row'>
                <input
                    type='search'
                    className='border-2 py-2.5 px-2 md:w-[350px] rounded'
                    placeholder='Search here by name, model and year '
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <span className='flex justify-center items-center p-2'>Or</span>
                <div className='flex items-center justify-center gap-2 bg-blue-100 p-2 rounded'>
                    <DatePicker
                        selected={startDate}
                        placeholderText='Start Date'
                        onChange={(date) => setStartDate(date)}
                        dateFormat='dd/MM/yyyy'
                        className='border px-2 py-2 rounded cursor-pointer w-24'
                    />
                    <span><LuArrowRightLeft /></span>
                    <DatePicker
                        placeholderText='End Date'
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat='dd/MM/yyyy'
                        className='border px-2 py-2 rounded cursor-pointer w-24'
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredCars?.length > 0 ? (
                    filteredCars?.map((car) => (
                        <div data-aos="zoom-in" className="max-w-sm mx-auto w-full bg-white my-3 overflow-hidden  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100">
                            <div className='p-1'>
                                <img className="w-full object-cover" src={car.imageUrl} alt={car.model} />
                            </div>
                            <div className="p-6">
                                <h2 className="text-gray-800 text-xl font-semibold">{car.model}, {car.year}</h2>
                                <div className='py-2 flex justify-between'>
                                    <p className='font-semibold'>AuctionType : <span className="text-green-600">{car.AuctionType}</span></p>
                                    <p className='font-semibold'>Publish date : <span className="text-green-600">{car.publishDate}</span></p>
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <div className='flex gap-2 items-center'>
                                        <div className='flex items-center justify-center'>
                                            <RiAuctionFill className='text-2xl text-green-700' />
                                        </div>
                                        <span className="text-gray-700 font-bold text-center">Current Bid: $ {car.currentBid}</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <div className='flex items-center justify-center'>
                                            <BiDollarCircle className='text-2xl text-green-700' />
                                        </div>
                                        <span className="text-red-500 font-bold text-center">Buy Now: $ {car.buyNow}</span>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center justify-between mt-4 border-t-2 border-dotted py-3">
                                    <span className="text-green-600">Bids: {car.bids}</span>
                                    <span className="text-blue-600">Time Left:
                                        <Countdown date={Date.now() + 1000000000} />
                                    </span>
                                </div>
                                <div className='flex justify-end'>
                                    <button key={car.id}
                                        onClick={() => handleBid(car?.AuctionType, car,car?.id)} className="bg-blue-500 text-white px-10 py-2 mt-1">Bid Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center col-span-1 md:col-span-2 lg:col-span-3">
                        <p className="text-red-500 text-lg py-4 ">No data found matching your criteria.</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default AuctionCard;
