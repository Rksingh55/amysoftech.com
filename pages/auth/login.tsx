import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BlankLayout from '@/components/Layouts/BlankLayout';
import Link from 'next/link';
import IconMail from '@/components/Icon/IconMail';
import IconLockDots from '@/components/Icon/IconLockDots';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const router = useRouter()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (email == "" || password == "") {
            seterror("Please enter valid email and password")
        }
        else {
            seterror("Validating please wait...!!")
        }
        const data = { email, password };
        fetch(`https://api.kefify.com/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

            .then((response) => response.json())
            .then((data) => {
                seterror(data.message)
                if (data.status == 1) {
                    toast.success("Login successfull")
                    setTimeout(() => {
                        router.push('/auction/auction-preview')
                    }, 100)
                    localStorage.setItem('token', JSON.stringify(data.access_token))
                    localStorage.setItem('userName', JSON.stringify(data.name))
                    localStorage.setItem('userEmail', JSON.stringify(data.email))
                    setemail('');
                    setpassword('');
                }
                else {
                    seterror("Please enter correct email & password")
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const handleChange = (e: any) => {
        if (e.target.name == "email") {
            setemail(e.target.value);
        } else if (e.target.name == "password") {
            setpassword(e.target.value);
        }
        console.log();
    };


    

    return (
        <div className=''>
            <ToastContainer />
            <div className="absolute inset-0">
                <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
            </div>
            <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6   dark:bg-[#060818] sm:px-16">
                <div className="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50  lg:flex-row lg:gap-10 xl:gap-0 lg:h-[568px]">
                    <div className='bg-red-200 w-full max-sm:hidden'>
                        <img className='w-full h-full object-cover' src='https://img.freepik.com/free-photo/young-adult-using-digital-device-while-travelling_23-2149119738.jpg?t=st=1718017242~exp=1718020842~hmac=f39b5aba42af1c7d5b6d7e645ee82f16240f565f93316fd0c3f788fb39abe959&w=900' />
                    </div>
                    <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 sm:px-6 lg:max-w-[667px]">

                        <div className="w-full max-w-[440px] lg:mt-16">
                            <div className="mb-10">
                                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign in</h1>
                                <p className="text-base font-bold leading-normal text-white-dark">Enter your email and password to login</p>
                            </div>
                            <form className="space-y-5 dark:text-white" method="post" onSubmit={handleSubmit}>
                                <div>
                                    {error && <p className='font-bold text-red-500 text-center'>{error}</p>}

                                    <label htmlFor="Email">Email</label>
                                    <div className="relative text-white-dark">
                                        <input type="text" className="form-input ps-10 placeholder:text-white-dark" placeholder="Email" name="email" value={email}
                                            onChange={handleChange} id="Email" />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconMail fill={true} />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="Password">Password</label>
                                    <div className="relative text-white-dark">
                                        <input type="password" className="form-input ps-10 placeholder:text-white-dark" name="password" placeholder="Enter Password" value={password}
                                            onChange={handleChange}
                                            onFocus={() => setIsPasswordFocused(true)}
                                           
                                            id="Password" />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconLockDots fill={true} />
                                        </span>
                                    </div>
                                </div>

                                <input
                                    type="submit"
                                    className={`btn  hover:bg-blue-600 !mt-6 w-full border-2 uppercase ${isPasswordFocused ? 'bg-blue-500 border-blue-500 text-white' : 'bg-gray-400 border-gray-400 shadow-none'}`}
                                    value="Log in"
                                    disabled={!isPasswordFocused}
                                />
                            </form>

                            <div className="text-center dark:text-white mt-8">
                                Don't have an account ?&nbsp;
                                <Link href="/auth/register" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                    SIGN UP
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Login.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default Login;
