'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-5">
      <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height={100}
        width={100}
        src="/images/reek.png"
      />
      <div className="">
        <div className=""><button className='font-medium' onClick={() => router.push('/map')}>Plot Finder</button></div>
      </div>
    </div>
  );
};

export default Logo;
