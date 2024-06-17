import React from 'react'

function rficard() {
    const RFIcard = [
        {}, {}, {}, {},
        {}, {}, {}, {},
    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-4  '>
            {
                RFIcard?.map(() => (
                    <div className=' border-2 bg-white  rounded-md'>
                        <div className='bg-blue-400 text-white  p-3 font-bold ' style={{ borderRadius: "5px 5px 0px 0px" }}>RQ-0225</div>
                        <div className='flex justify-between p-3'>
                            <div>
                                <h1 className='text-lg font-semibold'>Department</h1>
                                <h2>Computer</h2>
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>Department</h1>
                                <h2>Computer</h2>
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>Budget</h1>
                                <h2>$3535</h2>
                            </div>
                        </div>
                        <div className='flex justify-between p-3'>
                            <div>
                                <h1 className='text-lg font-semibold'>Publish Date</h1>
                                <h2>26 February, 2024</h2>
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>Department</h1>
                                <h2>29 February, 2024</h2>

                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>Submission Date</h1>
                                <h2>26 February, 2024</h2>

                            </div>
                        </div>

                        <div className='flex justify-end p-2'>
                            <button className='border-2 rounded-full p-2 px-4 hover:bg-blue-400 hover:text-white'>Apply Now</button>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default rficard