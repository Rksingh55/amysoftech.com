import BlankLayout from '@/components/Layouts/BlankLayout';
import { MdHome, MdOutlineAttachment } from "react-icons/md";
import { FaBuilding, FaMoneyCheckAlt } from "react-icons/fa";
import Frontheader from '@/components/front/Navbar';
import { RiAccountCircleLine, RiPsychotherapyLine } from "react-icons/ri";
import { LuFileQuestion } from "react-icons/lu";
// import GeneralInformationform from "../components/vendorforms/general-information"
import React from 'react'
import { useEffect, useState } from 'react';
import IconUser from '@/components/Icon/IconUser';
import { GrOrganization } from 'react-icons/gr';
import { FcOk } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Index() {
    const [activeTab, setActiveTab] = useState(1);
    const [error, seterror] = useState('')
    const [completedTabs, setCompletedTabs] = useState([]);
    const [user, setuser] = useState({
        org_name: " ",
        name: " ",
        cr_number: " ",
    });

    console.log(user)
    const handleButtonClick = () => {
        if (!user.org_name.trim() || !user.name.trim() || !user.cr_number.trim()) {
            seterror("Please fill the all required field**")
        } else {
            setCompletedTabs([...completedTabs, activeTab]);
            if (activeTab < tabs?.length) {
                setActiveTab(activeTab + 1);
            } else {
                console.log('Finish');
            }
        }
    };


    const handleTabClick = (tabId) => {
        if (!user.org_name.trim() || !user.name.trim() || !user.cr_number.trim()) {
            seterror("Please fill the all required field**")
        }
        else {
            setActiveTab(tabId);
        }
    };

    const tabs = [
        {
            id: 1, icon: <MdHome className="text-2xl" />, label: "General Information",
            content: <>
                <form className="space-y-5 dark:text-white" >
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

                </form>
            </>
        },
        { id: 2, icon: <FaBuilding />, label: "Company details", content: "The next and previous buttons help you to navigate through your content." },
        { id: 3, icon: <FaMoneyCheckAlt />, label: "Tax & Billing info", content: "Wonderful transition effects." },
        { id: 4, icon: <RiAccountCircleLine />, label: "Account information", content: "Customize your experience." },
        { id: 5, icon: <LuFileQuestion />, label: "Questionnaire", content: "Manage your notifications." },
        { id: 6, icon: <MdOutlineAttachment />, label: "Attachment", content: "View your analytics data." },
        { id: 7, icon: <RiPsychotherapyLine />, label: "Other details", content: "Check your messages." }
    ];
    return (
        <>
            <ToastContainer />

            <Frontheader />
            <div className="w-[90%] m-auto py-4">
                <div className="">
                    <div className="inline-block w-full">
                        <div className="relative z-[1] w-[80%] m-auto">
                            <div
                                className={`absolute top-[25px] -z-[1] m-auto  bg-blue-800 transition-[width]  ltr:left-12 rtl:right-0 border-dotted border-b-[2.5px]`}
                                style={{
                                    width: `${(activeTab - 1) * (90 / (tabs?.length - 1))}%`
                                }}
                            ></div>
                            <ul className="mb-5 grid grid-cols-7 ">
                                {tabs?.map((tab) => (
                                    <li key={tab?.id} className="mx-auto  flex flex-col justify-center items-center">
                                        <button
                                            type="button"
                                            className={`${activeTab === tab?.id ? '!border-primary !bg-primary text-white' : ''}
                                text-xl flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c] ${completedTabs.includes(tab.id) ? 'text-green-500' : ''}`}
                                            onClick={() => handleTabClick(tab.id)}
                                        >
                                            {tab.icon}
                                        </button>
                                        <span className={`${activeTab === tab?.id ? 'text-primary ' : ''}text-center mt-2 block`}>{tab?.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex justify-center items-center py-2'><p className='text-red-500  font-bold'>{error}</p></div>


                        <div className='bg-white p-4'>
                            {tabs?.map((tab) => (
                                <p key={tab?.id} className="mb-5">{activeTab === tab?.id && tab?.content}</p>
                            ))}
                        </div>
                        <div className="flex justify-between py-4">
                            <button
                                type="button"
                                className={`p-2 px-4 btn-primary ${activeTab === 1 ? 'hidden' : ''}`}
                                onClick={() => setActiveTab(activeTab > 1 ? activeTab - 1 : 1)}
                            >
                                Back
                            </button>

                            <button
                                type="button"
                                className="p-2 px-4 btn-primary ltr:ml-auto rtl:mr-auto"
                                onClick={handleButtonClick}
                            >
                                {activeTab === tabs?.length ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.getLayout = (page) => {
    return <BlankLayout>{page}</BlankLayout>;
};

export default Index;
