import Frontheader from '@/components/front/Navbar'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { SlCalender } from "react-icons/sl";
import Link from 'next/link';
import Header from '@/components/front/Pageheader';
import BlankLayout from '@/components/Layouts/BlankLayout';
import { FaSortDown } from 'react-icons/fa';
import { HiMiniArrowLongRight } from 'react-icons/hi2';
import Tendercard from '@/components/cards/tendercard';
import Footer from '@/components/Layouts/Footer';
function Tenders() {

  return (
    <>
      <Frontheader />
      <Header heading="Tender List" />
      <div className='bg-[#F3F7FD]'>
        <div className='w-[90%] m-auto'>
          <div className='py-6  '>
            <input placeholder='Search By ' className='border-2 rounded-full p-2 px-4 ' />
            <p className='py-2'>(Tender Id, Tender Title, Tender Type)</p>
          </div>
          <h1 className='font-semibold text-xl py-2'>Total Tender(97)</h1>
          <div className='flex gap-2 md:flex-row flex-col'>
            <div className='basis-[70%]'>
              <Tendercard />
            </div>
            <div className='md:basis-[30%] h-[400px] w-full bg-white mt-2    border-2 rounded-md  '>
              <div className='bg-blue-400 text-white  p-3 ' style={{ borderRadius: "5px 5px 0px 0px" }}>Modify Search</div>
              <div className='p-2'>
                <label>Sort by text :</label>
                <input type='text' placeholder='Click here to Precise keyword' className='border-2 rounded-md w-full py-2  px-3' />
              </div>
              <div className='p-2'>
                <label>Sort by Sector :</label>
                <input type='text' placeholder='Click here to exclude Sectors' className='border-2 rounded-md w-full py-2  px-2' />
              </div>
              <div className='p-2'>
                <label>Sort by Region / Country :</label>
                <input type='text' placeholder='Click here to exclude Countries/Regions' className='border-2 rounded-md w-full py-2 px-2 ' />
              </div>
              <div className='p-2 flex gap-2  justify-center'>
                <button className='bg-blue-400 text-white px-5 py-2 rounded-md'>Filter</button>
                <button className='border-2 text-black hover:bg-blue-400 hover:text-white px-5 py-2 rounded-md'>Save</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

Tenders.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default Tenders