'use client'
import React, { useEffect } from 'react'
import FAQ from './FAQ'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { AdsText } from "../constants";
import { convertToPersianDigits } from "@/lib";



const Advertisement = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
  return (
    <section className="w-full px-4 relative bg-[#42465D]">
      <div className='relative w-full h-[250px] md:h-[350px] lg:h-[400px]'>
        {/* right image */}
        <div 
            className="absolute left-1/2 -translate-x-1/2 -top-18 w-64 md:w-[33rem] "
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
            className="absolute left-1/3 -translate-x-1/2 -top-48 z-10 w-58 md:w-[20rem]"
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

        {/* right start */}
        <div 
          className="w-32 h-32 absolute right-1/3 top-48"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <Image
            src="/svgs/star.svg"
            alt='alt'
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>

        {/* left start */}
        <div 
          className="w-20 h-20 absolute left-1/3 z-20 top-16"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="900"
        >
          <Image
            src="/svgs/star.svg"
            alt='alt'
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="text-center my-32 font-semibold text-2xl leading-12" dir="rtl">
        <p className="text-white">
          <span className="text-[#C3BDFF]">{convertToPersianDigits(AdsText.adsTexts.ads1)}{" "}</span> 
          نیروی سازمان ها 
        </p>
        <p className="text-white font-light">به صورت حضوری و در بستر جلسات آنلاین</p>
      </div>

      <div className='relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]'>
        {/* category image */}
        <div 
            className="absolute md:left-1/3 left-1/4 -translate-x-1/2 top-0 w-14 md:w-[9rem] z-20"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_s_top.png"
              alt="Instagram category"
              width={150}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>

        {/* right image */}
        <div 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-72 md:w-[40rem] z-10"
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
            className="absolute md:right-1/4 right-0 -translate-x-1/2 md:bottom-22 bottom-8 w-32 md:w-[12rem] z-20"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_s_down.png"
              alt="Instagram id"
              width={200}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>

        {/* arrow image */}
        <div 
            className="absolute md:left-1/2 md:top-32 top-14 -translate-x-1/2 md:bottom-22  w-16 md:w-[10rem] z-20"
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
        
        {/* left iamge */}
        <div 
            className="absolute left-1/3 -translate-x-1/2 top-32 w-58 md:w-[22rem]"
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

      
      <div className="text-center my-48 font-medium text-2xl leading-12" dir="rtl">
        <p className="text-white">
          این فقط یک تغییر عدد نیست ! 
        </p>
        <p className="text-white font-light">تحول درآمد، زندگی شخصیه</p>
      </div>

      <div className='relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]'>

        {/* right image */}
        <div 
            className="absolute md:right-1/3 left-1/2 top-8 w-48 md:w-[24rem] z-10"
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
          className="md:w-32 md:h-32 w-16 h-16 absolute right-1/3 md:top-96 top-56 z-30"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <Image
            src="/svgs/star.svg"
            alt='alt'
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>

        {/* category image */}
        <div 
            className="absolute md:right-1/2 -translate-x-1/2 top-0 w-14 md:w-[9rem] z-30"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_t_top.png"
              alt="Instagram category"
              width={150}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>

        {/* arrow image */}
        <div 
            className="absolute md:right-1/2 md:top-32 top-14 -translate-x-1/2 md:bottom-22  w-16 md:w-[9rem] z-40"
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
            className="absolute left-1/3 -translate-x-1/3 top-5 w-58 md:w-[40rem] z-20"
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
            className="absolute md:left-1/4 -translate-x-1/2 md:bottom-22 bottom-8 w-28 md:w-[12rem] z-30"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_t_down.png"
              alt="Instagram id"
              width={200}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>

      </div>

      <div className="text-center my-48 font-medium text-2xl leading-12" dir="rtl">
        <p className="text-white">
          چند سال؟ یک سال؟ یک فصل؟ چند ماه؟ 
        </p>
        <p className="text-white font-light">{convertToPersianDigits(AdsText.adsTexts.ads2)}</p>
      </div>

      <div className='relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]'>

        {/* category image */}
        <div 
            className="absolute md:right-1/2 -translate-x-1/2 md:top-22 top-32 w-14 md:w-[9rem] z-30"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_fo_top.png"
              alt="Instagram category"
              width={150}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>

        {/* right image */}
        <div 
            className="absolute md:right-1/2 -translate-x-1/3 left-1/2 top-32 w-72 md:w-[36rem] z-20"
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
            className="absolute right-1/2 -translate-x-1/2 md:bottom-8 -bottom-8 w-28 md:w-[12rem] z-30"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_fo_down.png"
              alt="Instagram id"
              width={200}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>

        {/* star */}
        <div 
          className="md:w-32 md:h-32 w-16 h-16 absolute left-1/5 md:top-96 top-12 z-30"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <Image
            src="/svgs/star.svg"
            alt='alt'
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>

        {/* arrow image */}
        <div 
            className="absolute md:right-1/3 right-1/5 md:top-56 -bottom-8 -translate-x-1/2 w-16 md:w-[9rem] z-40"
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
            className="absolute left-1/3 -translate-x-1/2 md:top-0 bottom-10 w-58 md:w-[25rem] z-10"
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
          className="md:w-16 md:h-16 w-12 h-12 absolute right-1/2 transform -translate-x-1/2 md:top-96 top-56 z-40"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="900"
        >
          <Image
            src="/svgs/turkey.svg"
            alt='alt'
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="text-center my-48 font-medium text-2xl leading-12" dir="rtl">
        <p className="text-white font-light">
          مهم نیست کجای دنیا باشی
        </p>
        <p className="text-white">وقتی تصمیم بگیری بی مرز بدرخشی</p>
      </div>


      <div className='relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]'>
        {/* right image */}
        <div 
            className="absolute md:right-1/3 left-1/2 top-8 w-48 md:w-[24rem] z-10"
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
            className="absolute md:right-1/2 right-1/3 md:top-36 top-16 -translate-x-1/2 w-16 md:w-[9rem] z-40"
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
            className="absolute md:right-1/2 -translate-x-1/2 top-0 w-14 md:w-[9rem] z-30"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_fi_top.png"
              alt="Instagram category"
              width={150}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>
      
        {/* left iamge */}
        <div 
            className="absolute left-1/3 -translate-x-1/3 top-5 w-58 md:w-[40rem] z-20"
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
            className="absolute left-1/4 -translate-x-1/2 md:bottom-22 bottom-0 w-22 md:w-[10rem] z-30"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_fi_down.png"
              alt="Instagram id"
              width={200}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>

        {/* usa */}
        <div 
          className="md:w-16 md:h-16 w-10 h-10 absolute left-1/4 transform -translate-x-1/2 md:top-72 top-32 z-40"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="900"
        >
          <Image
            src="/svgs/usa.svg"
            alt='alt'
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>

      </div>

      <div className="text-center my-48 font-medium text-2xl leading-12" dir="rtl">
        <p className="text-white font-light">
          حنی مهم نیست مخاطب پیجت ایرانی باشه
        </p>
        <p className="text-white">یا از کشورهای دیگه ! </p>
      </div>

      <div className='relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem]'>

        {/* category image */}
        <div 
            className="absolute md:right-1/2 -translate-x-1/2 md:top-22 top-32 w-14 md:w-[9rem] z-30"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_six_top.png"
              alt="Instagram category"
              width={150}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>
        {/* right image */}
        <div 
            className="absolute md:right-1/2 -translate-x-1/3 left-1/2 top-32 w-72 md:w-[36rem] z-20"
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
            className="absolute right-1/2 -translate-x-1/2 md:bottom-14 -bottom-10 w-28 md:w-[12rem] z-30"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image
              src="/images/ads_fo_down.png"
              alt="Instagram id"
              width={200}
              height={50}
              className="w-full h-auto rounded-lg"
            />
        </div>

        {/* arrow image */}
        <div 
            className="absolute md:right-1/3 right-1/4 md:top-54 -bottom-2 -translate-x-1/2 w-16 md:w-[9rem] z-40"
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
            className="absolute left-1/3 -translate-x-1/2 md:top-0 -top-16 w-58 md:w-[25rem] z-10"
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
          className="md:w-16 md:h-16 w-10 h-10 absolute right-1/2 transform -translate-x-1/2 md:top-96 top-56 z-40"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="900"
        >
          <Image
            src="/svgs/uae.svg"
            alt='alt'
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className='pt-[10rem]'>
        <FAQ />
      </div>
    </section>
  )
}

export default Advertisement
