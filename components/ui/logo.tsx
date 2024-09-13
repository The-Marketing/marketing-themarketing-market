"use client";
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  //update the size of the logo when the size of the screen changes


  return (
    <>
      <Link href="/" >
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