import BlankLayout from '@/components/Layouts/BlankLayout';
import Header from '@/components/front/Pageheader';
import Frontheader from '@/components/front/Navbar';
import React from 'react'
import Rficard from '@/components/cards/rficard';
import Footer from '@/components/Layouts/Footer';
function Tenders() {

  return (
    <>
      <Frontheader />
      <div className='pt-[100px]'>
        <Header heading="RFI "  />
      </div>

      <div className='w-[90%] m-auto py-10' >
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'> RFI Lists</h1>
          <input type='search' className='border-2 rounded-full py-2 px-12' placeholder='Search here..' />
        </div>
        {/* ----Rfi card------- */}
        <Rficard />
      </div>

      <Footer/>

    </>
  )
}

Tenders.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default Tenders