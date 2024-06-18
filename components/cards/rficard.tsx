import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function rficard() {
    const RFIcard = [
        {}, {},
      
    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-4  '>
            {
                RFIcard?.map(() => (
                    <div className=' border-2 bg-white  rounded-md'>
                        <div className=' text-grey-400 border-b-[1px]  p-3 font-bold ' style={{ borderRadius: "5px 5px 0px 0px" }}>
                        RFI-000000004</div>
                        <div className='flex justify-between p-3'>
                            <div>
                                <h1 className=' font-semibold'>Department</h1>
                                <h2>Computer</h2>
                            </div>
                            <div>
                                <h1 className=' font-semibold'>Department</h1>
                                <h2>Computer</h2>
                            </div>
                            <div>
                                <h1 className=' font-semibold'>Budget</h1>
                                <h2>$3535</h2>
                            </div>
                        </div>
                        <div className='flex justify-between p-3'>
                            <div>
                                <h1 className=' font-semibold'>Publish Date</h1>
                                <h2>26 February, 2024</h2>
                            </div>
                            <div>
                                <h1 className=' font-semibold'>Clarification End Date</h1>
                                <h2>29 February, 2024</h2>

                            </div>
                            <div>
                                <h1 className=' font-semibold'>Submission Date</h1>
                                <h2>26 February, 2024</h2>

                            </div>
                        </div>

                        <div className='flex justify-end p-2'>
                           <Link href="/rfi/rfi-preview"> <button className='hover:text-blue-500 px-2 flex gap-2'>View RFI Detail <FaArrowRightLong  className='mt-[2px]'/></button></Link>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default rficard