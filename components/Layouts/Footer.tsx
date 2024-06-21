import Link from "next/link";

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white  mt-5 text-center'>
            <footer className="py-8 w-[90%] m-auto">
                <div className="container mx-auto ">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:basis-1/3 mb-6 md:mb-0 text-start">
                       <div className="pb-4">
                       <Link className="navbar-brand" href="/">
                            <img src="/assets/images/FDO_Logo1.svg" alt="Logo" className=" w-[50px]" />
                        </Link>
                       </div>
                            <p className="mb-4">Fisheries Development Oman was founded by the Government  to contribute to the Omani economy by investing in local and international opportunities targeted towards the achievement of a sustainable and profitable world-class</p>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-white">Facebook</Link>
                                <Link href="#" className="text-gray-400 hover:text-white">Twitter</Link>
                                <Link href="#" className="text-gray-400 hover:text-white">Instagram</Link>
                            </div>
                        </div>
                        <div className="w-full max-sm:text-start md:basis-1/3 mb-6 md:mb-0">
                            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                                <li><Link href="/tender-list" className="text-gray-400 hover:text-white">Tender</Link></li>
                                <li><Link href="/rfi" className="text-gray-400 hover:text-white">RFI</Link></li>
                                <li><Link href="/auction" className="text-gray-400 hover:text-white">Auction</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:basis-1/3 text-start">
                            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                            <p className="mb-2 ">Email : contact@company.com</p>
                            <p className="mb-2 ">Phone : +123 456 7890</p>
                            <p className="mb-2 ">Address : 123 Street, City, Country</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-gray-400">© 2024 FDO. All rights reserved. Powered by Amysoftech.com</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
