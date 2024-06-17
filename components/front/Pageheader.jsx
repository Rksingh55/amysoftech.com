import React from 'react';
import NextBreadcrumb from '../NextBreadcrumb';

const Header = ({ heading }) => {
  return (
    <header className="text-black mainheaderbg  md:py-[60px] py-12   z-1">
      <div className="container mx-auto ">
        <h1 className=" md:text-3xl text-xl  font-bold text-white max-sm:pl-2  py-2 ">{heading}</h1>
        <NextBreadcrumb
          homeElement={'Home'}
          separator={<span className='px-2'>  / </span>}
          activeClasses='text-amber-500'
          containerClasses='flex '
          listClasses='hover:underline  font-bold '
          capitalizeLinks
        />
      </div>

    </header>
  );
};

export default Header;
