import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Language from '@/components/language/language';
import { BsTextLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { AiTwotoneMail } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const { t, i18n } = useTranslation();
    let u_name = "";
    useEffect(() => {
        const u_name = localStorage.getItem("userName");
        const Username = u_name ? u_name.replace(/['"]/g, '') : "";
        setName(Username);
    }, []);
    const [name, setName] = useState(u_name ?? "");

    return (
        <>
            <div className="bg-white">

                <div className="bg-white flex justify-between py-3 w-[90%] m-auto font-semibold ">
                    <div className="max-sm:hidden flex gap-1">
                        <AiTwotoneMail className="mt-[3px]" /> Email : amysoftech@gmail.com
                    </div>
                    <div className="">
                        <div className="  text-black flex  gap-2  ">
                            <div> {name !== "" ? (
                                <p className="flex gap-1"> <CiUser className="mt-[2px]" />{name}</p>
                            ) : (
                                <p>User</p>

                            )}</div>
                            <div className="h-[17px] w-[1px] bg-black"></div>
                            <div>
                                {name !== "" ? (
                                    <Link href="/dashboard/tender">
                                        <button className="  rounded-full hover:text-blue-500">
                                            Access Bidmate
                                        </button>
                                    </Link>
                                ) : (
                                    <Link href="/auth/login">
                                        <button className="  rounded-full ">
                                            Login
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <header className="myheader ">
                <nav className="navbar navbar-expand-sm  ">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <img src="/assets/images/FDO_Logo1.svg" alt="Logo" className=" w-[50px]" />
                        </Link>
                        <BsTextLeft className="text-white text-4xl md:hidden" onClick={togglePopup} />

                        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'visible' : 'hidden'}`}>
                            <div className="bg-white p-6 rounded-md w-[90%] text-center">
                                <div className=" flex justify-end items-end py-2">
                                    <MdOutlineClose onClick={togglePopup} className="text-2xl " />
                                </div>
                                <ul>
                                    <Link href="/" onClick={togglePopup}> <li className="hover:bg-blue-100 mt-1 py-2 border-1">Home</li></Link>

                                    <Link href="/tender-list" onClick={togglePopup}> <li className="hover:bg-blue-100 mt-1 py-2 border-1">Tenders</li></Link>
                                    <Link href="/rfi" onClick={togglePopup}> <li className="hover:bg-blue-100 mt-1 py-2 border-1">RFI</li></Link>
                                    <Link href="/auction" onClick={togglePopup}> <li className="hover:bg-blue-100 mt-1 py-2 border-1">Auction</li></Link>
                                    <Link href="/auth/register" onClick={togglePopup}> <li className="hover:bg-blue-100 mt-1 py-2 border-1">Register</li></Link>
                                    <Link href="/login" onClick={togglePopup}> <li className="hover:bg-blue-100 mt-1 py-2 border-1">Login</li></Link>
                                </ul>

                            </div>
                        </div>

                        <div className="navbar-collapse max-sm:hidden" id="collapsibleNavId">
                            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">

                            </ul>
                            <div className="d-flex" style={{ alignItems: "center" }}>
                                <ul className="navbar-nav mt-2 mt-lg-0">

                                    <li className="nav-item px-2    ">
                                        <Link
                                            className="nav-link sv-nav text-light"
                                            href="/tender-list"
                                        >
                                            {t('tenders')}
                                        </Link>
                                    </li>
                                    <li className="nav-item px-2">
                                        <Link
                                            className="nav-link sv-nav text-light"
                                            href="/rfi"
                                        >
                                            {t('RFI')}
                                        </Link>
                                    </li>
                                    <li className="nav-item px-2">
                                        <Link
                                            className="nav-link sv-nav text-light"
                                            href="/auction"
                                        >
                                            {t('auction')}
                                        </Link>
                                    </li>
                                </ul>




                                <Language></Language>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>




        </>
    )
};
export default Navbar;