import React, { useEffect, useState } from 'react'
import { GrFormSubtract } from "react-icons/gr";
import Header from '@/components/front/Pageheader';
import { FaStar } from 'react-icons/fa6';
import { FaStarHalfAlt } from 'react-icons/fa';
import { IoAddOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiHeart } from "react-icons/ci";
import Tabs from '@/components/Tablayout';
import { BiDetail, BiDollarCircle } from "react-icons/bi";
import { SiAmazoncloudwatch } from "react-icons/si";
import Countdown from '@/components/Countdown';
import BlankLayout from '@/components/Layouts/BlankLayout';
import Frontheader from '@/components/front/Navbar';
import { useRouter } from 'next/router';
import Footer from '@/components/Layouts/Footer';

function aucktion() {
  const router = useRouter();
  const targetDate = '2024-10-22T23:59:59';
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const initialCurrentBidAmount = 600;
  const minimumIncrement = 50;

  const [currentBid, setCurrentBid] = useState(initialCurrentBidAmount);
  const [value, setValue] = useState(initialCurrentBidAmount + minimumIncrement);
  const [autoMode, setAutoMode] = useState(false);

  useEffect(() => {
    setValue(currentBid + minimumIncrement);
  }, [currentBid]);

  const Decrement = () => {
    if (value > currentBid + minimumIncrement) {
      setValue(prevValue => prevValue - minimumIncrement);
    } else {
      toast.error('Bid amount cannot be less than the current bid amount');
    }
  };

  let u_name = "";
  useEffect(() => {
    const u_name = localStorage.getItem("userName");
    setName(u_name ?? "");
  }, []);
  const [name, setName] = useState(u_name ?? "");


  const handleBidSubmit = () => {
    if (!name) {
      toast.error('You must be logged in to submit a bid, Please Login');
      setTimeout(() => {
        router.push("/auth/login")
      }, 3000);
      return;
    }
    if (value > currentBid) {
      setCurrentBid(value);
      toast.success(`${value} $, Bid submitted successfully!`);
    } else {
      toast.error('Bid amount must be greater than the current bid');
    }
  };


  useEffect(() => {
    if (autoMode) {
      const timer = setInterval(() => {
        setValue(prevValue => {
          const newBid = prevValue + minimumIncrement;
          handleAutoBidSubmit(newBid);
          return newBid;
        });
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [autoMode]);

  const Increment = () => {
    setValue(prevValue => prevValue + minimumIncrement);
  };

  const handleAutoBidSubmit = (newBid: number) => {
    if (!name) {
      toast.error('You must be logged in to start auto bid, Please Login');
      setTimeout(() => {
        router.push("/auth/login")
      }, 4000);
      return;
    }
    setCurrentBid(newBid);
    toast.success(`${newBid} $, Auto bid submitted successfully!`);
  };


  return (
    <>
      <ToastContainer />
      <Frontheader />
      <div className='pt-[100px]'>
        <Header heading="Auction Preview" />
      </div>
      <div className='w-[90%] m-auto '>
        <div className='flex gap-4 md:flex-row flex-col  mt-5'>
          <div className='md:basis-[40%] w-full    md:h-[400px]'>
            <img src='https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1717741403~exp=1717745003~hmac=b12a164652bf5a44bc7c6a228e72d2457832c6fc74604d05aeaeca33bde8bf84&w=900' />
          </div>
          <div className='md:basis-[60%] w-full flex flex-col gap-2 '>
            <div className=' md:px-4 '>
              <h1 className='md:text-3xl text-xl font-bold'>2014 KIA Sorento, LX</h1>
              <div className='flex gap-1 py-3'>
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStarHalfAlt className='text-yellow-500' />

              </div>
              <p className=' py-2'>Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
              <p className=' py-2'>ITEM CONDITION : NEW</p>
              <p className=' py-2 font-bold text-blue-400'>Time Left -</p>

              {/* --------time left code -------- */}

              {isClient && <Countdown targetDate={targetDate} />}
              <h1 className='py-2'>Auction ends : {targetDate}</h1>

              <div className='bg-white w-full  flex flex-col md:flex-row max-sm:items-center gap-5 p-2 py-2 rounded-md mb-2 mt-2'>
                <div className='flex gap-2 p-2'>
                  <div className='flex justify-center items-center '> <BiDollarCircle className='text-4xl text-blue-500' /></div>
                  <div className='text-center '>

                    <h1 className=' font-bold'>61</h1>
                    <p>Active Bidder</p>
                  </div>
                </div>
                <div className='flex gap-2 p-2'>
                  <div className='flex justify-center items-center '> <SiAmazoncloudwatch className='text-4xl text-blue-500' /></div>
                  <div className='text-center '>
                    <h1 className=' font-bold'>203</h1>
                    <p>Watching</p>
                  </div>
                </div>
                <div className='flex gap-2 p-2'>
                  <div className='flex justify-center items-center '> <BiDetail className='text-4xl text-blue-500' /></div>
                  <div className='text-center '>
                    <h1 className=' font-bold'>82</h1>
                    <p>Total Bids</p>
                  </div>
                </div>
              </div>
              <p className=' py-2'>Timezone : UTC 0</p>
              <p className=' py-2'>Current highest bid : <span className='font-extrabold'>$ {currentBid}</span></p>


              {/* --------bid counter code-------- */}
              <div className='flex gap-4  py-3'>
                <button onClick={() => setAutoMode(false)} className={`px-4 py-2 ${!autoMode ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  Manual
                </button>
                <button onClick={() => setAutoMode(true)} className={`px-4 py-2 ${autoMode ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  Auto
                </button>
              </div>
              <h2 className='py-2 text-red-600'>Your bid amount  :  <span className='font-extrabold'> $ {value} </span></h2>

              {!autoMode ? (
                <div className='flex md:flex-row flex-col md:gap-4 gap-2 bg-white rounded-md p-6'>
                  <button onClick={Decrement} className='bg-green-100 hover:bg-green-300 md:px-6 flex items-center justify-center p-3' disabled={autoMode}>
                    <GrFormSubtract className='text-black' />
                  </button>
                  <div className='font-bold rounded-sm md:px-[100px] px-12 border-2 py-3'>{value} $</div>
                  <button onClick={Increment} className='bg-green-100 text-black hover:bg-green-300 md:px-6 p-3 flex items-center justify-center' disabled={autoMode}>
                    <IoAddOutline className='' />
                  </button>



                  <button onClick={handleBidSubmit} type='submit' className='bg-blue-500 md:px-12 text-white py-3'>
                    Bid
                  </button>
                </div>
              ) : null}

            </div>
          </div>
          {/* ------tabs-------- */}
        </div>
        <div className=' '>
          <Tabs />
        </div>
      </div>
      <Footer />

    </>
  )
}

aucktion.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default aucktion