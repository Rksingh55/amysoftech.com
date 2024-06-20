import React from 'react'
import Link from 'next/link';
import { HiMiniArrowLongRight } from 'react-icons/hi2';
function tendercard() {
    const tender = [
        {}, {}, {}, {}, {}, {}, {}
    ]
    return (
        <div> {
            tender?.map((index:any) => (
                <div key={index} className='  mt-2   border-2 rounded-md  bg-white   '>
                    <div className=' md:p-9 p-3 rounded-md hover:shadow-md'>
                        <h1 className='text-xl font-semibold py-1'>Supply of HID Cards</h1>
                        <p className='py-2'><span className='text-blue-500 font-bold'>Tendor Id :  </span> TDR-000003</p>
                        <p className='py-2'><span className='text-blue-500 font-bold'>Discription :  </span> 1 Supply of HID Cards as per below specifications...</p>
                        <div className='flex justify-between max-sm:flex-col max-sm:gap-2 py-2'>
                            <div>
                                <p><span className='text-blue-500 font-bold'>Publish : </span> 13/06/2024</p>
                            </div>
                            <div>
                                <p><span className='text-red-500 font-bold'>Deadline : </span> 13/08/2024</p>
                            </div>
                            <div>
                                <p><span className='text-green-500 font-bold'>Region : </span> Middle East</p>
                            </div>
                            <div>
                                <p><span className='text-blue-500 font-bold'>Country : </span>UAE</p>
                            </div>
                            <div>
                                <p><span className='text-blue-500 font-bold'>Tender Fee : </span>100 $</p>
                            </div>

                        </div>
                        <Link href="/tender-list/tender-preview" className='flex justify-end py-2 '>
                            <p className=' font-bold rounded-md mt-2 text-blue-500 underline flex gap-2' >View Detail <HiMiniArrowLongRight className='mt-[2px]' />
                            </p>
                        </Link>
                    </div>

                </div>
            ))
        }
        </div>
    )
}

export default tendercard