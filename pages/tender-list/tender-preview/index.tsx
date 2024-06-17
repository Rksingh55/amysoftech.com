import BlankLayout from '@/components/Layouts/BlankLayout';
import Header from '@/components/front/Pageheader';
import Frontheader from '@/components/front/Navbar';
import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { RiFolderDownloadFill } from "react-icons/ri";
import Footer from '@/components/Layouts/Footer';
function TenderPreview() {
    return (
        <>
            <Frontheader />
            <div className='pt-[100px]'>
                <Header heading="Tender Preview"/>
            </div>
            <div className=' w-[90%] m-auto'>
                <div className='border-2 bg-white    rounded-md p-3  mt-4 flex justify-between'>
                    <div>
                        <h1 className='text-xl font-extrabold'>Title</h1>
                        <h3 className='py-3'>Ceo Tender</h3>
                    </div>
                    <div>
                        <button className='bg-black text-white rounded-md px-3 py-2 flex gap-1'> <FaTelegramPlane className='mt-1' /> Apply Now</button>
                        <h3 className='py-2'>1 week closed</h3>
                    </div>
                </div>
                <div className='bg-[#F4F7FF]  rounded-md p-3  mt-3 shadow-md border-1'>
                    <h1 className='text-xl font-extrabold  flex  max-sm:justify-center '>Tender Overview</h1>
                    <div className='flex flex-col md:flex-row md:justify-between pt-3 items-center justify-center gap-2'>
                        <div>
                            <h1 className=' font-bold'>Ref. No</h1>
                            <h3 className='py-2'>Ceo Tender</h3>
                        </div>
                        <div>
                            <h1 className=' font-bold'>Currency</h1>
                            <h3 className='py-2'>Ceo Tender</h3>
                        </div>
                        <div>
                            <h1 className=' font-bold'>Tender Fee
                            </h1>
                            <h3 className='py-2'>Ceo Tender</h3>
                        </div>
                        <div>
                            <h1 className=' font-bold'>Status</h1>
                            <h3 className='py-2'>Ceo Tender</h3>
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <h1 className=' font-bold'>Download Documents</h1>
                            <RiFolderDownloadFill className='text-2xl' />
                        </div>
                    </div>

                </div>

                <div className='bg-[#F4F7FF]  rounded-md p-3  mt-3 shadow-md border-1'>
                    <h1 className='text-xl font-extrabold text-center flex  max-sm:justify-center '>Important Dates</h1>
                    <div className='flex flex-col md:flex-row md:justify-between pt-3 items-center justify-center gap-2'>
                        <div>
                            <h1 className=' font-bold'>Tender Float Date</h1>
                            <h3 className='py-2'>25 May, 2024</h3>
                        </div>
                        <div>
                            <h1 className=' font-bold'>Bid Submission Date</h1>
                            <h3 className='py-2'>28 May, 2024</h3>
                        </div>
                        <div>
                            <h1 className=' font-bold'>Clarification End Date
                            </h1>
                            <h3 className='py-2'>29 May, 2024</h3>
                        </div>
                        <div>
                            <h1 className=' font-bold'>Tender End Date</h1>
                            <h3 className='py-2'>3 June, 2024</h3>
                        </div>

                    </div>

                </div>

                <div className='bg-[#F4F7FF]  rounded-md p-3  mt-3 shadow-md border-1'>
                    <h1 className='text-xl font-extrabold flex  max-sm:justify-center '>Applicable Fees</h1>
                    <div className='flex flex-col md:flex-row  pt-3 items-center  gap-5'>
                        <div>
                            <h1 className=' font-bold'>Tender Float Date</h1>
                        </div>
                        <div>
                            <h1 className=' font-bold'>
                                Tender Fees</h1>
                            <h3 className='py-2'>100</h3>
                        </div>
                    </div>
                </div>

                {/* ----- Item List table------ */}
                <div className='bg-[#F4F7FF]  rounded-md p-3  mt-3 shadow-md border-1'>
                    <h1 className='text-2xl font-extrabold '>Item List</h1>
                    <table className='border-2 rounded-md  bg-white mt-2 '>
                        <tr className='border-2 '>
                            <th className='p-2'>Sr. No.</th>
                            <th className='p-2'>Category</th>
                            <th className='p-2'>Item Name</th>
                            <th className='p-2'>Unit</th>
                            <th className='p-2'>Quantity </th>
                        </tr>
                        <tr>
                            <td className='p-2'>1</td>
                            <td className='p-2'>Procurement_Category</td>
                            <td className='p-2'>Lab Supply Agreement</td>
                            <td className='p-2'>1</td>
                            <td className='p-2'>300</td>
                        </tr>
                        <tr>
                            <td className='p-2'>2</td>
                            <td className='p-2'>Procurement_Category</td>
                            <td className='p-2'>	Laptop</td>
                            <td className='p-2'>1</td>
                            <td className='p-2'>200</td>
                        </tr>
                        <tr>
                            <td className='p-2'>3</td>
                            <td className='p-2'>Procurement_Category</td>
                            <td className='p-2'>Mouse</td>
                            <td className='p-2'>1</td>
                            <td className='p-2'>100</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />

        </>
    )
}

TenderPreview.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default TenderPreview;