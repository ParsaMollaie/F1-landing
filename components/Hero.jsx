'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="min-h-[80vh] w-full text-white flex flex-col items-center justify-center px-4 py-14 md:pb-40 relative overflow-hidden"
      style={{
        background: `
            conic-gradient(
              from 180deg at 50% 50%,
              #AFA7FF 11%,
              #000000 32%,
              #000000 35%,
              #1A1D28 54%,
              #545B80 96%,
              #252525 100%
            )
          `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center flex flex-col justify-center items-center md:gap-8 gap-2">
        <div className="md:w-[8rem] w-28">
          <Image
            src="/svgs/logo.svg"
            alt="F1 logo"
            width={130}
            height={40}
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-xl md:text-5xl font-bold tracking-wide">
          BABAK NIKFAR
        </h1>
        <p className="text-sm md:text-base text-yellow-300 uppercase">
          Formula 1% Owner
        </p>
      </div>

      <div className="relative w-[90%] max-w-4xl mb-12 rounded-lg">
        <Image
          src="/images/first_solo.png"
          alt="Babak Nikfar Portrait"
          width={800}
          height={800}
          className="w-full h-auto grayscale"
          priority
        />
        <Image
          src="/images/signature.png"
          alt="Signature"
          width={600}
          height={100}
          className="absolute md:-bottom-16 -bottom-6 left-1/2 transform -translate-x-1/2 w-2/3 pointer-events-none z-10"
        />
      </div>
    </section>
  );
}
