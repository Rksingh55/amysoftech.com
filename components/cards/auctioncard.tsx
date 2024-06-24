import React from 'react'
import { RiAuctionFill } from 'react-icons/ri';
import 'react-toastify/dist/ReactToastify.css';
import Countdown from 'react-countdown';
import { BiDollarCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';

function auctioncard() {
    const router = useRouter()

    const cars = [
        {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1717741403~exp=1717745003~hmac=b12a164652bf5a44bc7c6a228e72d2457832c6fc74604d05aeaeca33bde8bf84&w=900',
            currentBid: 876.00,
            bids: 30,
            buyNow: 50000,
            AuctionType: 'Forward',
        },
        {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://img.freepik.com/free-photo/front-wheel-blue-vintage-sedan_114579-6115.jpg?t=st=1717741420~exp=1717745020~hmac=b53eaa336feed7766426dc6aff1652050268631ae989938fae6083ce004fe34e&w=900',
            currentBid: 876.00,
            bids: 30,
            buyNow: 50000,
            AuctionType: 'Reverse',
        },
        {
            year: 2014,
            make: 'KIA',
            model: 'Sorento',
            trim: 'LX',
            imageUrl: 'https://d3nn873nee648n.cloudfront.net/900x600/20487/300-PK1047952.jpg',
            currentBid: 876.00,
            bids: 30,
            buyNow: 50000,
            AuctionType: 'Reverse',
        },

    ];


    const handlebid = (auctionType :any) => {
        router.push({
          pathname: '/auction/auction-preview',
          query: { auctionType },
        });
      };

    return (
        <>
            {cars?.map((car, index) => (
                <div data-aos="zoom-in" key={index} className="max-w-sm mx-auto w-full bg-white my-3    overflow-hidden   cursor-pointer  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-100 ">
                    <div className='p-1    '>
                        <img className="w-full object-cover  " src={car?.imageUrl} alt={car?.model} />
                    </div>
                    <div className="p-6">
                        <h2 className="text-gray-800 text-xl font-semibold">{car?.year} {car?.make} {car?.model}, {car?.trim}</h2>
                        <div className='py-2'>
                            <p className='font-bold'>  AuctionType :  <span className="text-green-600 ">{car?.AuctionType}</span></p>

                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <div className='flex gap-2'>
                                <div className='flex  items-center justify-center'>
                                    <RiAuctionFill className='text-2xl text-green-700' />
                                </div>
                                <span className="text-gray-700 font-bold text-center">Current Bid <br />$ {car?.currentBid}</span>
                            </div>
                            {/* <div className='w-[1px] h-12 bg-black'></div> */}
                            <div className='flex gap-2'>
                                <div className='flex  items-center justify-center'>
                                    <BiDollarCircle className='text-2xl text-green-700' />
                                </div>
                                <span className="text-red-500 font-bold text-center">Buy Now <br /> $ {car?.buyNow}</span>
                            </div>

                        </div>
                        <div className="flex gap-5 items-center justify-between mt-4 border-t-2 border-dotted py-3">
                            <span className="text-green-600 ">Bids : {car?.bids}</span>
                            <span className="text-blue-600">Time Left :
                                <Countdown date={Date.now() + 1000000000} />

                            </span>
                        </div>


                        <button  onClick={() => handlebid(car?.AuctionType)} className=" bg-blue-500 text-white px-10 py-2 mt-1 ">Bid Now</button>

                    </div>
                </div>
            ))}
        </>
    )
}

export default auctioncard