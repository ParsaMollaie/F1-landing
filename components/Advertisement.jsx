'use client';
import React, { useEffect } from 'react';
import FAQ from './FAQ';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { AdsText } from '../constants';
import { convertToPersianDigits } from '@/lib';

const Advertisement = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full px-4 relative bg-[#42465D]">
      <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
        {/* right image */}
        <div
          className="absolute left-1/2 -translate-x-1/2 lg:-top-18 md:-top-8 -top-8 w-64 md:w-[33rem] "
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image
            src="/images/ads_f_right.png"
            alt="Babak Nikfar"
            width={590}
            height={370}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* left iamge */}
        <div
          className="absolute lg:left-1/3 left-1/4 -translate-x-1/2 -top-48 z-10 w-58 md:w-[20rem]"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Image
            src="/images/ads_f_left.png"
            alt="Babak Nikfar"
            width={590}
            height={370}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* right star */}
        <div
          className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-12 h-12 absolute lg:right-1/3 right-1/4 lg:top-48 md:top-62 top-26"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <Image
            src="/svgs/star.svg"
            alt="alt"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>

        {/* left star */}
        <div
          className="lg:w-20 lg:h-20 w-12 h-12 absolute lg:left-1/3 left-1/6 lg:top-16 md:top-10 -top-4 z-20"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="900"
        >
          <Image
            src="/svgs/star.svg"
            alt="alt"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className="text-center my-32 font-semibold md:text-2xl text-lg leading-12"
        dir="rtl"
      >
        <p className="text-white">
          <span className="text-[#C3BDFF]">
            {convertToPersianDigits(AdsText.adsTexts.ads1)}{' '}
          </span>
          نیروی سازمان ها
        </p>
        <p className="text-white font-light">
          به صورت حضوری و در بستر جلسات آنلاین
        </p>
      </div>

      <div className="relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]">
        {/* category image */}
        <div
          className="absolute lg:left-1/3 md:left-1/3 left-1/3 lg:top-4 md:top-5 top-10 w-14 md:w-[6rem] lg:w-[9rem] z-20"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <Image
            src="/svgs/ads_s_top.svg"
            alt="Instagram category"
            width={150}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* right image */}
        <div
          className="absolute lg:right-1/2 -translate-x-1/3 left-1/2 top-12 w-72 md:w-[22rem] lg:w-[36rem] z-10"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image
            src="/images/ads_s_right.png"
            alt="Babak Nikfar"
            width={700}
            height={450}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* id image */}
        <div
          className="absolute lg:right-1/5 md:right-20 right-1 lg:bottom-24 md:bottom-24 -bottom-6 w-22 md:w-[8rem] lg:w-[12rem] z-20"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Image
            src="/svgs/ads_s_down.svg"
            alt="Instagram id"
            width={200}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* arrow image */}
        <div
          className="absolute lg:right-1/3 md:right-58 right-1/4 lg:top-36 md:top-28 top-24 w-16 lg:w-[10rem] md:w-[5.5rem] z-20"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Image
            src="/svgs/ads_arrow.svg"
            alt="Instagram id"
            width={170}
            height={40}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* star */}
        <div
          className="lg:w-28 lg:h-28 md:w-18 md:h-18 w-12 h-12 absolute lg:left-1/3 md:left-1/6 left-1/6 lg:top-96 md:top-80 top-72 z-30"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <Image
            src="/svgs/star.svg"
            alt="alt"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>

        {/* left iamge */}
        <div
          className="absolute left-1/3 -translate-x-1/2 top-32 w-58 lg:w-[22rem] md:w-[18rem]"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Image
            src="/images/ads_s_left.png"
            alt="Babak Nikfar"
            width={360}
            height={390}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div
        className="text-center my-48 font-medium md:text-2xl text-lg leading-12"
        dir="rtl"
      >
        <p className="text-white font-bold">این فقط یک تغییر عدد نیست !</p>
        <p className="text-white font-light">تحول درآمد، زندگی و رشد شخصیه</p>
      </div>

      <div className="relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]">
        {/* right image */}
        <div
          className="absolute lg:right-1/4 left-1/2 lg:-top-5 md:-top-6 -top-5 w-44 lg:w-[24rem] md:w-[16rem] z-10"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image
            src="/images/ads_t_right.png"
            alt="Babak Nikfar"
            width={350}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* right star */}
        <div
          className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-12 h-12 absolute lg:right-1/4 md:right-1/6 right-1/6 lg:top-96 md:top-56 top-36 z-30"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <Image
            src="/svgs/star.svg"
            alt="alt"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>

        {/* category image */}
        <div
          className="absolute lg:right-1/2 md:right-1/2 right-1/2 -translate-x-1/3 lg:-top-2 md:top-0 top-3 w-14 md:w-[6rem] lg:w-[9rem] z-30"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <Image
            src="/svgs/ads_t_top.svg"
            alt="Instagram category"
            width={150}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* arrow image */}
        <div
          className="absolute lg:left-1/3 md:left-1/3 left-1/3 lg:top-36 md:top-22 top-16 w-16 lg:w-[8rem] md:w-[5.5rem] z-40"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image
            src="/svgs/ads_arrow.svg"
            alt="Instagram id"
            width={170}
            height={40}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* left iamge */}
        <div
          className="absolute lg:left-1/3 md:left-1/3 left-1/3 -translate-x-1/2 top-5 w-58 md:w-[22rem] lg:w-[36rem] z-20"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Image
            src="/images/ads_t_left.png"
            alt="Babak Nikfar"
            width={700}
            height={390}
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* id image */}
        <div
          className="absolute lg:left-1/4 md:left-1/6 left-1/6 -translate-x-1/3 lg:bottom-26 md:bottom-28 bottom-10 w-22 md:w-[8rem] lg:w-[12rem] z-30"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Image
            src="/svgs/ads_t_down.svg"
            alt="Instagram id"
            width={200}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div
        className="text-center my-48 md:text-2xl text-lg leading-12"
        dir="rtl"
      >
        <p className="text-white font-bold">
          چند سال؟ یک سال؟ یک فصل؟ چند ماه؟
        </p>
        <p className="text-white font-light">
          {convertToPersianDigits(AdsText.adsTexts.ads2)}
        </p>
      </div>

      <div className="relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]">
        {/* category image */}
        <div
          className="absolute lg:right-1/2 md:right-1/2 right-1/2 lg:top-6 md:top-8 top-10 w-14 md:w-[6rem] lg:w-[9rem] z-30"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <Image
            src="/svgs/ads_fo_top.svg"
            alt="Instagram category"
            width={150}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* right image */}
        <div
          className="absolute lg:right-1/2 -translate-x-1/3 left-1/2 top-12 w-72 md:w-[22rem] lg:w-[36rem] z-20"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image
            src="/images/ads_fo_right.png"
            alt="Babak Nikfar"
            width={600}
            height={470}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* id image */}
        <div
          className="absolute lg:right-1/2 right-1/2 lg:bottom-26 md:bottom-24 bottom-0 w-22 md:w-[8rem] lg:w-[12rem] z-30"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Image
            src="/svgs/ads_fo_down.svg"
            alt="Instagram id"
            width={200}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* star */}
        <div
          className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-12 h-12 absolute lg:left-1/6 md:left-1/12 left-1/12 lg:top-96 md:top-64 top- z-30"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <Image
            src="/svgs/star.svg"
            alt="alt"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>

        {/* arrow image */}
        <div
          className="absolute lg:right-1/3 md:right-1/3 right-1/4 lg:top-40 md:top-28 top-26 w-16 lg:w-[9rem] md:w-[5.5rem] z-40"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image
            src="/svgs/ads_arrow.svg"
            alt="Instagram id"
            width={170}
            height={40}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* left iamge */}
        <div
          className="absolute left-1/3 -translate-x-1/2 lg:-top-3 md:-top-9 -top-32 w-58 lg:w-[25rem] md:w-[18rem] z-10"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Image
            src="/images/ads_fo_left.png"
            alt="Babak Nikfar"
            width={400}
            height={550}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* turkey */}
        <div
          className="lg:w-16 lg:h-16 w-10 h-10 absolute transform lg:right-1/2 right-1/2 -translate-x-1/2 lg:top-60 md:top-40 top-36 z-40"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="900"
        >
          <Image
            src="/svgs/turkey.svg"
            alt="alt"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className="text-center my-48 font-medium md:text-2xl text-lg leading-12"
        dir="rtl"
      >
        <p className="text-white font-light">مهم نیست کجای دنیا باشی</p>
        <p className="text-white">وقتی تصمیم بگیری بی مرز بدرخشی</p>
      </div>

      <div className="relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]">
        {/* right image */}
        <div
          className="absolute lg:right-1/4 left-1/2 lg:-top-5 md:-top-6 -top-5 w-44 lg:w-[24rem] md:w-[16rem] z-10"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image
            src="/images/ads_fi_right.png"
            alt="Babak Nikfar"
            width={350}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* arrow image */}
        <div
          className="absolute lg:left-1/3 md:left-1/3 left-1/3 translate-x-1/2 lg:top-36 md:top-22 top-16 w-14 lg:w-[8rem] md:w-[5.5rem] z-40"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image
            src="/svgs/ads_arrow.svg"
            alt="Instagram id"
            width={170}
            height={40}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* category image */}
        <div
          className="absolute lg:right-1/2 md:right-1/2 right-1/2 translate-x-1/6 lg:-top-2 md:top-0 top-3 w-14 md:w-[6rem] lg:w-[9rem] z-30"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <Image
            src="/svgs/ads_fi_top.svg"
            alt="Instagram category"
            width={150}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* left iamge */}
        <div
          className="absolute lg:left-1/3 md:left-1/3 left-1/3 -translate-x-1/3 top-5 w-58 md:w-[22rem] lg:w-[36rem] z-20"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Image
            src="/images/ads_fi_left.png"
            alt="Babak Nikfar"
            width={700}
            height={390}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* id image */}
        <div
          className="absolute lg:left-1/4 md:left-1/5 left-1/6 -translate-x-1/3 lg:bottom-26 md:bottom-28 bottom-10 w-22 md:w-[8rem] lg:w-[12rem] z-30"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Image
            src="/svgs/ads_fi_down.svg"
            alt="Instagram id"
            width={200}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* usa */}
        <div
          className="lg:w-16 lg:h-16 w-8 h-8 absolute transform lg:left-1/4 md:left-1/4 left-1/5 translate-x-1/6 lg:top-60 md:top-36 top-28 z-40"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="900"
        >
          <Image
            src="/svgs/usa.svg"
            alt="alt"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className="text-center my-48 font-medium md:text-2xl text-lg leading-12"
        dir="rtl"
      >
        <p className="text-white font-light">
          حتی مهم نیست مخاطب پیجت ایرانی باشه
        </p>
        <p className="text-white">یا از کشورهای دیگه ! </p>
      </div>

      <div className="relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]">
        {/* category image */}
        <div
          className="absolute lg:right-1/2 md:right-1/2 right-1/2 lg:top-6 md:top-8 top-10 w-14 md:w-[6rem] lg:w-[9rem] z-30"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <Image
            src="/svgs/ads_six_top.svg"
            alt="Instagram category"
            width={150}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* right image */}
        <div
          className="absolute lg:right-1/3 -translate-x-1/6 left-1/2 top-12 w-60 md:w-[22rem] lg:w-[36rem] z-20"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image
            src="/images/ads_six_right.png"
            alt="Babak Nikfar"
            width={600}
            height={470}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* id image */}
        <div
          className="absolute lg:right-1/2 right-1/2 translate-x-1/3 lg:bottom-26 md:bottom-24 bottom-8 w-22 md:w-[8rem] lg:w-[12rem] z-30"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Image
            src="/svgs/ads_fo_down.svg"
            alt="Instagram id"
            width={200}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* arrow image */}
        <div
          className="absolute lg:right-1/3 md:right-1/4 right-1/5 translate-x-1/3 lg:top-32 md:top-22 top-18 w-16 lg:w-[9rem] md:w-[5.5rem] z-40"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image
            src="/svgs/ads_arrow.svg"
            alt="Instagram id"
            width={170}
            height={40}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* left iamge */}
        <div
          className="absolute left-1/3 -translate-x-1/2 lg:-top-3 md:-top-9 -top-32 w-58 lg:w-[25rem] md:w-[18rem] z-10"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Image
            src="/images/ads_six_left.png"
            alt="Babak Nikfar"
            width={400}
            height={550}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* uae */}
        <div
          className="lg:w-16 lg:h-16 w-10 h-10 absolute transform lg:right-1/2 right-1/2 -translate-x-1/2 lg:top-60 md:top-40 top-36 z-40"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="900"
        >
          <Image
            src="/svgs/uae.svg"
            alt="alt"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="pt-[2rem]">
        <FAQ />
      </div>
    </section>
  );
};

export default Advertisement;
