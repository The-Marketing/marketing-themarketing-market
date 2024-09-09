"use client";
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  //update the size of the logo when the size of the screen changes


  return (
    <>
      <Link className="h-3 w-3 transition-all group-hover:scale-110" href="/" >
        <Image
          src="/fav-icon.png"
          alt="Logo"
          width={30}
          height={30}
          
        />
      </Link>
    
    </>
  );
};

export default Logo;
