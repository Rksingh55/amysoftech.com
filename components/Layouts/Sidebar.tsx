import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import IconCaretsDown from '@/components/Icon/IconCaretsDown';
import IconMenuDashboard from '@/components/Icon/Menu/IconMenuDashboard';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import IconMinus from '@/components/Icon/IconMinus';
import IconMenuChat from '@/components/Icon/Menu/IconMenuChat';
import IconMenuMailbox from '@/components/Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '@/components/Icon/Menu/IconMenuTodo';
// import IconMenuNotes from '@/components/Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '@/components/Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '@/components/Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '@/components/Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '@/components/Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '@/components/Icon/Menu/IconMenuComponents';
import IconMenuElements from '@/components/Icon/Menu/IconMenuElements';
import IconMenuCharts from '@/components/Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '@/components/Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '@/components/Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '@/components/Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '@/components/Icon/Menu/IconMenuTables';
import IconMenuDatatables from '@/components/Icon/Menu/IconMenuDatatables';
import IconMenuForms from '@/components/Icon/Menu/IconMenuForms';
import IconMenuUsers from '@/components/Icon/Menu/IconMenuUsers';
import IconMenuPages from '@/components/Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '@/components/Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '@/components/Icon/Menu/IconMenuDocumentation';
import { MdDashboard, MdHome, MdOutlinePayment } from 'react-icons/md';
import { RiAuctionFill, RiForbidFill } from 'react-icons/ri';
import { PiNewspaperFill, PiOvenDuotone } from "react-icons/pi";
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { TbBlockquote } from 'react-icons/tb';
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { GoListUnordered } from "react-icons/go";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { IoDocumentOutline } from 'react-icons/io5';
import { LuLayoutList } from "react-icons/lu";
const Sidebar = () => {
    const router = useRouter();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [router.pathname]);

    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="h-full bg-white dark:bg-black">
                    <div className="flex items-center justify-between px-2 py-3">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img src="/assets/images/FDO_Logo1.svg" alt="Logo" className=" w-[60px] ml-5 flex-none" />
                            {/* <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">{t('URVA')}</span> */}
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                        <ul className="relative space-y-0.5 p-4 py-0 font-semibold">




                            <li className="nav-item">
                                <ul>
                                    
                                    <li className="nav-item">
                                        <Link href="/dashboard/tender" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <MdDashboard className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Dashboard')}</span>
                                            </div>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link href="/dashboard/tender" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <HiOutlineDocumentText className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Tender')}</span>
                                            </div>
                                        </Link>
                                    </li> */}


                                    <li className="nav-item">
                                        <Link href="/dashboard/auction" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <RiAuctionFill className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Auction')}</span>
                                            </div>
                                        </Link>
                                    </li>



                                    <li className="nav-item">
                                        <Link href="/dashboard/rfi" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <PiNewspaperFill className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('rfi')}</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/dashboard/purchase-request" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <BiSolidPurchaseTag className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Purchase Request')}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/dashboard/quotations" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <TbBlockquote className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Quotations')}</span>
                                            </div>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link href="/dashboard/purchase-orders" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <GoListUnordered className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Purchase Order')}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/dashboard/vendor/vendor-list" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <LuLayoutList  className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Vendors List')}</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                                            <div className="flex items-center">
                                                <VscGitPullRequestGoToChanges className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Vendor Request')}</span>
                                            </div>

                                            <div className={currentMenu !== 'dashboard' ? '-rotate-90 rtl:rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500 bg-white">
                                                <li>
                                                    <Link href="/dashboard/vendor/vendor-list">{t('Vendor List')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/vendor/approve-vendors">{t('Approved Vendors')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/vendor/pending-vendors">{t('Pending Vendors')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/dashboard/vendor/rejected-vendors">{t('Rejected Vendors')}</Link>
                                                </li>

                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/dashboard/grn" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <IoDocumentOutline className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('GRN')}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/dashboard/invoice" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <LiaFileInvoiceSolid className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Invoice')}</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/dashboard/payment" className="nav-link sv-nav text-light">
                                            <div className="flex items-center">
                                                <MdOutlinePayment className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Payement')}</span>
                                            </div>
                                        </Link>
                                    </li>
                                   





                                </ul>
                            </li>

                           
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav >
        </div >
    );
};

export default Sidebar;
