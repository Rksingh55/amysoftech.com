import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setPageTitle, toggleLocale, toggleRTL } from '../../store/themeConfigSlice';
import Link from 'next/link';
import BlankLayout from '@/components/Layouts/BlankLayout';
import { IRootState } from '@/store';
import { useTranslation } from 'react-i18next';
import Dropdown from '@/components/Dropdown';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import IconUser from '@/components/Icon/IconUser';
import IconMail from '@/components/Icon/IconMail';
import IconLockDots from '@/components/Icon/IconLockDots';
import { GoOrganization } from 'react-icons/go';
import { GrOrganization } from 'react-icons/gr';
import { FaPhone } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { AiTwotoneHome, AiTwotoneMail } from "react-icons/ai";

const RegisterCover = () => {
    const router = useRouter();
    const [message, setmessege] = useState("")
    const [user, setuser] = useState({
        organization: "",
        name: "",
        email: "",
        number: "",
        adress: "",
    });
    console.log("userdata", user)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Register Cover'));
    });

    const submitForm = (e: any) => {
        e.preventDefault();
        if (user !== null) {
            setmessege("Please fill all the required fields ")
        }
        console.log("user", user)
        // router.push('/');
    };

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const setLocale = (flag: string) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };
    const [flag, setFlag] = useState('');
    useEffect(() => {
        setLocale(localStorage.getItem('i18nextLng') || themeConfig.locale);
    }, []);

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className=''>
                <div className="absolute inset-0">
                    <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
                </div>
                <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                    <div className="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50  lg:flex-row lg:gap-10 xl:gap-0">
                        <div className='bg-red-200 w-full max-sm:hidden'>
                            <img className='w-full h-full object-cover' src='https://img.freepik.com/free-photo/young-adult-using-digital-device-while-travelling_23-2149119738.jpg?t=st=1718017242~exp=1718020842~hmac=f39b5aba42af1c7d5b6d7e645ee82f16240f565f93316fd0c3f788fb39abe959&w=900' />
                        </div>
                        <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
                            <div className="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full">
                                <Link href="/" className="block w-8 lg:hidden">
                                    {/* <img src="/assets/images/favicon.ico" alt="Logo" className="mx-auto w-10" /> */}
                                </Link>
                                <div className="dropdown ms-auto w-max">
                                    {flag && (
                                        <Dropdown
                                            offset={[0, 8]}
                                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                            btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
                                            button={
                                                <>
                                                    <div>
                                                        <img src={`/assets/images/flags/${flag.toUpperCase()}.svg`} alt="image" className="h-5 w-5 rounded-full object-cover" />
                                                    </div>
                                                    <div className="text-base font-bold uppercase">{flag}</div>
                                                    <IconCaretDown />
                                                </>
                                            }
                                        >
                                            <ul className="grid w-[280px] grid-cols-2 gap-2 !px-2 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                                                {themeConfig.languageList.map((item: any) => {
                                                    return (
                                                        <li key={item.code}>
                                                            <button
                                                                type="button"
                                                                className={`flex w-full rounded-lg hover:text-primary ${i18n.language === item.code ? 'bg-primary/10 text-primary' : ''}`}
                                                                onClick={() => {
                                                                    dispatch(toggleLocale(item.code));
                                                                    i18n.changeLanguage(item.code);
                                                                    setLocale(item.code);
                                                                }}
                                                            >
                                                                <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="h-5 w-5 rounded-full object-cover" />
                                                                <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                                                            </button>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </Dropdown>
                                    )}
                                </div>
                            </div>
                            <div className="w-full max-w-[440px] lg:mt-16">
                                <div className="mb-2">
                                    <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign Up</h1>
                                    <p className="text-base font-bold leading-normal text-white-dark">Fill Out the Form Carefully for Registration</p>
                                </div>

                                <div className='text-center py-3'>
                                    {message && <p className='text-red-500 font-bold'>{message}*</p>}
                                </div>
                                <form className="space-y-5 dark:text-white" onSubmit={submitForm}>

                                    <div>
                                        <label htmlFor="Name">Organization  Name</label>
                                        <div className="relative text-white-dark">
                                            <input onChange={(e) => setuser({ ...user, organization: e.target.value })} id="Name" type="text" placeholder="Enter Organization  Name" className="form-input ps-10 placeholder:text-white-dark" />
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
                                        <label >Adress</label>
                                        <div className="relative text-white-dark">
                                            <input onChange={(e) => setuser({ ...user, adress: e.target.value })} type="text" placeholder="Enter Adress" className="form-input ps-10 placeholder:text-white-dark" />
                                            <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                                <AiTwotoneHome />
                                            </span>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn  !mt-6 w-full border-0 uppercase bg-blue-500 text-white hover:bg-blue-600">
                                        Sign Up
                                    </button>
                                </form>

                                <div className="text-center dark:text-white mt-3">
                                    Already have an account ?&nbsp;
                                    <Link href="/auth/login" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                        SIGN IN
                                    </Link>
                                </div>
                            </div>
                            <p className="absolute bottom-6  text-center dark:text-white w-[80%]">© {new Date().getFullYear()}. FDO Bidmate All rights reserved. Powered by AMY Softech.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
RegisterCover.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default RegisterCover;
