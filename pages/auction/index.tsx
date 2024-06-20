import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/front/Pageheader';
import BlankLayout from '@/components/Layouts/BlankLayout';
import Frontheader from '@/components/front/Navbar';
import Auctioncards from '@/components/cards/auctioncard';
import Footer from '@/components/Layouts/Footer';
const AuctionCard = () => {

  return (
    <>
      <ToastContainer />
      <Frontheader />
      <Header heading="Auction List" />
      <div className='w-[90%] m-auto '>
        <div className=' py-3 flex justify-end'>
          <input type='search' className='border-2 rounded-full py-2 px-8' placeholder='Search here..' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Auctioncards />
        </div>

      </div>
      <Footer />


    </>
  );
};

AuctionCard.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default AuctionCard;
