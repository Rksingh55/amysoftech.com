import React from 'react'
import { RiAuctionFill } from 'react-icons/ri';
import { FcCurrencyExchange } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Countdown from 'react-countdown';

function auctioncard() {

    const cars = [
        {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1717741403~exp=1717745003~hmac=b12a164652bf5a44bc7c6a228e72d2457832c6fc74604d05aeaeca33bde8bf84&w=900',
            currentBid: 876.00,
            buyNow: 5000.00,
            bids: 30,
            timeLeft: '0d : 1h : 39m : 20s',
        },
        {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://img.freepik.com/free-photo/front-wheel-blue-vintage-sedan_114579-6115.jpg?t=st=1717741420~exp=1717745020~hmac=b53eaa336feed7766426dc6aff1652050268631ae989938fae6083ce004fe34e&w=900',
            currentBid: 876.00,
            buyNow: 5000.00,
            bids: 30,
            timeLeft: '0d : 1h : 39m : 20s',
        },
        {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1717735344~exp=1717738944~hmac=1d64b9f86ee14d88464ca540b0f430f90e2ac9ef8840de988704e3a93832e026&w=900',
            currentBid: 876.00,
            buyNow: 5000.00,
            bids: 30,
            timeLeft: '0d : 1h : 39m : 20s',
        }, {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://img.freepik.com/free-photo/blue-jeep-photo-shooting-sunset_114579-4043.jpg?t=st=1717741470~exp=1717745070~hmac=de594ceb0e8de71ba88e4c9b1ac30233813bfdbdb2a1bbaebbe790fa27093391&w=900',
            currentBid: 876.00,
            buyNow: 5000.00,
            bids: 30,
            timeLeft: '0d : 1h : 39m : 20s',
        }, {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1717735344~exp=1717738944~hmac=1d64b9f86ee14d88464ca540b0f430f90e2ac9ef8840de988704e3a93832e026&w=900',
            currentBid: 876.00,
            buyNow: 5000.00,
            bids: 30,
            timeLeft: '0d : 1h : 39m : 20s',
        }, {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1717735344~exp=1717738944~hmac=1d64b9f86ee14d88464ca540b0f430f90e2ac9ef8840de988704e3a93832e026&w=900',
            currentBid: 876.00,
            buyNow: 5000.00,
            bids: 30,
            timeLeft: '0d : 1h : 39m : 20s',
        },

        {
            year: 2019,
            make: 'Chevrolet',
            model: 'Equinox',
            trim: 'LT',
            imageUrl: 'https://img.freepik.com/free-photo/grey-luxury-sedan-car-sunset_114579-4045.jpg?t=st=1717736054~exp=1717739654~hmac=9dea2a054904986400f22516d6f8ec9e9c28d03f471a9171e7832a7a7243d7d9&w=996',
            currentBid: 876.00,
            buyNow: 5000.00,
            bids: 30,
            timeLeft: '0d : 1h : 39m : 20s',
        }
    ];

    return (
        <>
            {cars?.map((car, index) => (
                <div data-aos="zoom-in" key={index} className="max-w-sm mx-auto bg-white   overflow-hidden my-4  cursor-pointer  transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-100 ">
                    <div className='p-1    '>
                        <img className=" h-48 object-cover object-center " src={car?.imageUrl} alt={car?.model} />
                    </div>
                    <div className="p-6">
                        <h2 className="text-gray-800 text-xl font-semibold">{car?.year} {car?.make} {car?.model}, {car?.trim}</h2>
                        <div className="flex items-center justify-between mt-4">
                            <div className='flex gap-2'>
                                <div className='flex  items-center justify-center'>
                                    <RiAuctionFill className='text-2xl text-green-700' />
                                </div>
                                <span className="text-gray-700 font-bold text-center">Current Bid <br />${car?.currentBid}</span>
                            </div>
                            <div className='w-[1px] h-12 bg-black'></div>
                            <div className='flex gap-2'>
                                <div className='flex  items-center justify-center'>
                                    <FcCurrencyExchange className='text-2xl text-green-700' />
                                </div>
                                <span className="text-red-500 font-bold text-center">Buy Now <br /> ${car?.buyNow}</span>
                            </div>

                        </div>
                        <div className="flex gap-5 items-center justify-between mt-4 border-t-2 border-dotted py-2">
                            <span className="text-green-600 ">Bids : {car?.bids}</span>
                            <span className="text-blue-600">Time Left :
                                <Countdown date={Date.now() + 1000000000} />

                            </span>
                        </div>
                        <Link href="/auction/auction-preview">
                            <button className=" bg-blue-500 text-white px-10 py-2 mt-1 ">Bid Now</button>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default auctioncard