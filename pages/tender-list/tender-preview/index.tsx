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
            <Header heading="Tender Preview" />
            <div className=' w-[90%] m-auto'>
                <div className='flex gap-2 mt-3 md:flex-row flex-col'>
                    <div className='basis-[70%]  p-2 bg-white  rounded-md'>
                        <div className="max-w-4xl mx-auto p-3 ">
                            <h2 className="text-2xl font-bold mb-2">Tender Details</h2>
                            <div className="py-2">
                                <span className="font-bold">Title : </span>
                                <span>CEO Tender</span>
                            </div>
                            <div className="py-2">
                                <span className="font-bold">Ref. No : </span>
                                <span>TDR-000014</span>
                            </div>
                            <div className="py-2">
                                <span className="font-bold">Currency : </span>
                                <span>Australian Dollar</span>
                            </div>
                            <div className="py-2">
                                <span className="font-bold">Tender Fee
                                    : </span>
                                <span>100$</span>
                            </div>
                            <div className="py-2">
                                <span className="font-bold">Status
                                    : </span>
                                <span className='text-green-600 font-bold'>Aproved</span>
                            </div>

                            <div className="py-2">
                                <span className="font-bold">Tendering Authority : </span>
                                <a href="#" className="text-blue-500">Click Here</a>
                            </div>
                            <div className="py-2">
                                <span className="font-bold">Brief - </span>
                                <p>
                                    Design And Construction Of Elevated Metro Viaduct Of Length 17.624 Km Between Ch.21256.814 To Ch.38881.7 Including Railway Spans Of Length 79m & 100m And 6-Lane Double-Decker Portion With Vehicular Underpass (Vup) From Ch. 25755.211 To 26895.211 For A Total Length Of 1.14km In Reach-1a Of Nmrp Phase-2
                                </p>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Tender Documents</h3>
                            <div>
                                <span className="font-semibold">Tender Document : </span>
                                <a href="#" className="text-blue-500 und">Click Here</a>
                            </div>
                            <div className='mt-3'>
                                <h3 className="text-xl font-bold mb-2">Important Dates</h3>
                                <table className=' rounded-md  bg-white mt-3 '>
                                    <tr className='bg-[#F4F7FF] '>
                                        <th className='p-2'>Type</th>
                                        <th className='p-2'>Date</th>

                                    </tr>
                                    <tr>
                                        <td className='p-2'>Tender Float Date</td>
                                        <td className='p-2'>25 May, 2024</td>

                                    </tr>
                                    <tr>
                                        <td className='p-2'>Bid Submission Date</td>
                                        <td className='p-2'>	28 May, 2024</td>

                                    </tr>
                                    <tr>
                                        <td className='p-2'>Clarification End Date</td>
                                        <td className='p-2'>29 May, 2024</td>

                                    </tr>
                                    <tr>
                                        <td className='p-2'>Tender End Date</td>
                                        <td className='p-2'>3 June, 2024</td>

                                    </tr>
                                </table>
                            </div>


                            <div className='mt-2'>
                                <h3 className="text-xl font-bold mb-2">Applicable Fees</h3>
                                <table className=' rounded-md  bg-white mt-3 '>
                                    <tr className='bg-[#F4F7FF] '>
                                        <th className='p-2'>Type</th>
                                        <th className='p-2'>Amount
                                        </th>

                                    </tr>
                                    <tr>
                                        <td className='p-2'>Bid Bond Fees</td>
                                        <td className='p-2'>34323</td>

                                    </tr>
                                    <tr>
                                        <td className='p-2'>Tender Fees</td>
                                        <td className='p-2'>786786</td>
                                    </tr>

                                </table>

                            </div>


                            <h1 className='text-2xl font-semibold mt-3'>Item List</h1>
                            <div className='  max-sm:overflow-scroll'>
                                <table className=' rounded-md  bg-white mt-4 '>
                                    <tr className=' bg-[#F4F7FF] '>
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

                    </div>
                    <div className='basis-[30%] h-[570px]  p-3 bg-white rounded-md '>
                        <h1 className='text-2xl pb-2'>Get Free Sample</h1>
                        <div>
                            <input type='text' placeholder='Enter Email ID*' className='w-full border-2 p-3 rounded-md mt-2' />
                            <input type='text' placeholder='Enter Company Name*' className='w-full border-2 p-3 rounded-md mt-2' />
                            <input type='text' placeholder='Enter Conatct Number*' className='w-full border-2 p-3 rounded-md mt-2' />
                            <input type='number' placeholder='Enter Interested Tender Id*' className='w-full border-2 p-3 rounded-md mt-2' />
                            <textarea placeholder='Enter Messege*' className='w-full border-2 p-3 rounded-md mt-2' />
                        
                        </div>
                        <p className='py-2'>By clicking upon "Submit" button, you agree to Terms & Conditions & Privacy Policy of this website.</p>
                        <div className='py-2 '>
                            <button className='bg-blue-500 text-white px-5 py-2 rounded-md'>Submit</button>
                        </div>
                    </div>

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