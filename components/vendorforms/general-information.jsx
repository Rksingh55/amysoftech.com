import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import IconUser from '@/components/Icon/IconUser';
import { GrOrganization } from 'react-icons/gr';
import { MdPhone } from 'react-icons/md';
import { AiTwotoneHome, AiTwotoneMail } from "react-icons/ai";

function generalinformation() {
    const router = useRouter();
    const [message, setmessege] = useState("")
    const[pagevalidate,setpagevalidate]=useState();
    const [user, setuser] = useState({
        org_name: "",
        name: "",
        email: "",
        number: "",
        password: "",
        cr_number: " ",
    });
    console.log("userdata", user)
    const submitForm = () => {
        console.log(user)
    }
    return (
        <div>
            <form className="space-y-5 dark:text-white" onSubmit={submitForm}>

                <div>
                    <label htmlFor="Name">Organization  Name</label>
                    <div className="relative text-white-dark">
                        <input onChange={(e) => setuser({ ...user, org_name: e.target.value })} id="Name" type="text" placeholder="Enter Organization  Name" className="form-input ps-10 placeholder:text-white-dark" />
                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <GrOrganization />
                        </span>
                    </div>
                </div>
                <div>
                    <label htmlFor="Name">Cr Number</label>
                    <div className="relative text-white-dark">
                        <input onChange={(e) => setuser({ ...user, cr_number: e.target.value })} id="Name" type="text" placeholder="Enter cr  Number" className="form-input ps-10 placeholder:text-white-dark" />
                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <GrOrganization />
                        </span>
                    </div>
                </div>
                <div>
                    <label htmlFor="Name">Name</label>
                    <div className="relative text-white-dark">
                        <input onChange={(e) => setuser({ ...user, name: e.target.value })} id="Name" type="text" placeholder="Enter Name" className="form-input ps-10 placeholder:text-white-dark" />
                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <IconUser fill={true} />
                        </span>
                    </div>
                </div>
                <div className='flex gap-2 md:flex-row flex-col'>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <div className="relative text-white-dark">
                            <input onChange={(e) => setuser({ ...user, email: e.target.value })} id="Email" type="email" placeholder="Enter Email" className="form-input ps-10 placeholder:text-white-dark" />
                            <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                <AiTwotoneMail />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Email">Phone Number</label>
                        <div className="relative text-white-dark">
                            <input onChange={(e) => setuser({ ...user, number: e.target.value })} id="Email" type="number" placeholder="Enter Phone Number" className="form-input ps-10 placeholder:text-white-dark" />
                            <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                <MdPhone />
                            </span>
                        </div>
                    </div>

                </div>
                <div>
                    <label >Password</label>
                    <div className="relative text-white-dark">
                        <input onChange={(e) => setuser({ ...user, password: e.target.value })} type="number" placeholder="Enter password" className="form-input ps-10 placeholder:text-white-dark" />
                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <AiTwotoneHome />
                        </span>
                    </div>
                </div>

                <button type="submit" className="btn  !mt-6 w-full border-0 uppercase bg-blue-500 text-white hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default generalinformation