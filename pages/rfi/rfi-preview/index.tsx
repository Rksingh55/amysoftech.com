import BlankLayout from '@/components/Layouts/BlankLayout';
import React, { useEffect } from 'react'
import Frontheader from '@/components/front/Navbar';
import Header from '@/components/front/Pageheader';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Rfipreview() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    let u_name = "";
    useEffect(() => {
        const u_name = localStorage.getItem("userName");
        setName(u_name ?? "");
    }, []);
    const [name, setName] = useState(u_name ?? "");

    const handleLogin = (): void => {
        if (!name) {
            toast.error('You must be logged in to view rfi, Please Login');
            setTimeout(() => {
                router.push("/auth/login")
            }, 3000);
            return;
        } else {
            setIsLoggedIn(true)
        }
    };

    const maskedClass = isLoggedIn ? '' : 'blur-sm';

    return (
        <>
            <ToastContainer />

            <Frontheader />
            <div className='pt-[100px]'>
                <Header heading="RFI Preview " />
            </div>
            <div className='w-[90%] m-auto py-8 '>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold">View RFI</h1>
                        <div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Document</button>
                            
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">General Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
                            <div className='flex flex-col gap-2'>
                                <p><strong>Request ID :</strong> <span >RFI-0000000004</span></p>
                                <p><strong>Location :</strong> <span className={maskedClass}>Oman</span></p>
                                <p><strong>TypeType :</strong> <span >Pre-Qualification</span></p>
                                <p><strong>Description : </strong> <span className={maskedClass}>Add</span></p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p><strong>Department : </strong> <span >CEO Office</span></p>
                                <p><strong>Project : </strong> <span className={maskedClass}>PRJ-000133</span></p>
                                <p><strong>Budget : </strong> <span className={maskedClass}>9000</span></p>
                                <p><strong>Instruction : </strong> <span >Ins</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Important Dates</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
                            <div className='flex flex-col gap-2'>
                                <p><strong>Publish Date :</strong> <span >2024-05-23 11:45:00</span></p>
                                <p><strong>Clarification End Date : </strong> <span className={maskedClass}>2024-05-30 11:46:00</span></p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p><strong>Float Date:</strong> <span className={maskedClass}>2024-05-24 11:45:00</span></p>
                                <p><strong>Close Date : </strong> <span >2024-05-31 11:47:00</span></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Bidding Documents</h2>
                        <div className="overflow-x-auto py-3">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b-2">SN</th>
                                        <th className="py-2 px-4 border-b-2">Document Name</th>
                                        <th className="py-2 px-4 border-b-2">Upload Document</th>
                                        <th className="py-2 px-4 border-b-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b">1</td>
                                        <td className="py-2 px-4 border-b"><span className={maskedClass}>Company Certificate</span></td>
                                        <td className="py-2 px-4 border-b text-red-500"><span className={maskedClass}>Only PDF, JPEG, PNG Accepted</span></td>
                                        <td className="py-2 px-4 border-b"><i className="fas fa-cloud-upload-alt"></i> <span className={maskedClass}>Document</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Bid Information</h2>
                        <div className='py-3'>
                            <h1><strong>Bid Value : </strong>5000</h1>
                        </div>
                    </div>

                    {!isLoggedIn && (
                        <div className="mt-6">
                            <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded-md">Apply Now</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


Rfipreview.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default Rfipreview