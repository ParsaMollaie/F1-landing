"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { contentText } from "../constants";
import { convertToPersianDigits } from "@/lib";

export default function Introduction() {
  
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    
    <section className="w-full px-4 relative mb-96">
      <div 
        className="w-[90%] max-w-2xl mx-auto absolute -top-16 left-1/2 transform -translate-x-1/2 z-10"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <Image
          src="/images/second_solo.png"
          alt="Babak Nikfar"
          width={800}
          height={800}
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>

      <div className="mx-auto pt-64 text-[#BFBFBF]"> 
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl leading-10 mb-8" dir="rtl">
            {contentText.intro.map((line, index) => (
              <React.Fragment key={index}>
                  {convertToPersianDigits(line)}
                <br />
              </React.Fragment>
            ))}
          </p>

          <p className="text-lg md:text-xl leading-10 mb-8" dir="rtl">
            {contentText.achievements.map((line, index) => (
              <React.Fragment key={index}>
                  {convertToPersianDigits(line)}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem] my-28 max-w-6xl mx-auto">
          {/* Right to left image */}
          <div 
            className="absolute -translate-x-1/2 left-1/2 right-1/2 w-58 md:w-[15rem] z-10"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image
              src="/images/intro_f_right.png"
              alt='alt'
              width={280}
              height={420}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Left to right image */}
          <div 
            className="absolute md:left-1/3 -translate-x-1/2 -right-1/5 md:bottom-32 -bottom-20 w-72 md:w-[20rem] z-20"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Image
              src="/images/intro_f_left.png"
              alt='alt'
              width={320}
              height={130}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Star from top */}
          <div 
            className="md:w-32 md:h-32 w-16 h-16 absolute left-1/4 md:top-48 top-32 z-30"
            data-aos="fade-down"
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
        </div>

        <div className="text-center mb-20 text-[#BFBFBF]">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white" dir="rtl">
            {contentText.callToAction.title}
          </h3>
          <p className="text-lg md:text-xl mb-8 leading-10" dir="rtl">
            {contentText.callToAction.description.map((line, index) => (
              <React.Fragment key={index}>
                  {convertToPersianDigits(line)}
                <br />
              </React.Fragment>
            ))}
          </p>
          <p className="text-lg md:text-xl mb-8 leading-10" dir="rtl">
            {contentText.callToAction.additional.map((line, index) => (
              <React.Fragment key={index}>
                  {convertToPersianDigits(line)}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>


        <div className="relative w-full flex flex-col md:flex-row-reverse justify-center items-center lg:h-[35rem] md:h-[25rem] h-[15rem] my-28  max-w-6xl mx-auto">
          <div
            className="absolute md:right-48 right-1/3 top-0 z-10 w-64 md:w-[28rem]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image
              src="/images/intro_s_right.png"
              alt="Right Image"
              width={430}
              height={250}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Left image */}
          <div
            className="absolute md:left-24 left-1/3 top-12 w-64 md:w-[28rem]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Image
              src="/images/intro_s_left.png"
              alt="Left Image"
              width={430}
              height={250}
              className="w-full h-auto rounded-lg "
            />
          </div>

          {/* Star  */}
          <div
            className="md:w-32 md:h-32 w-16 h-16 absolute z-30 -top-14 md:left-80 left-1/3 transform"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <Image
              src="/svgs/star.svg"
              alt="Star"
              width={64}
              height={64}
              className="w-full h-auto"
            />
          </div>

          {/* Arrow */}
          <div
            className="absolute md:top-36 top-20 left-1/3 z-20 w-32 md:w-96"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="900"
          >
            <Image
              src="/svgs/arrow.svg"
              alt="Arrow"
              width={64}
              height={64}
              className="w-full h-auto"
            />
          </div>
        </div>

        
        <div className="text-center mb-20 text-[#BFBFBF]">
          <p className="text-lg md:text-xl mb-8 leading-10" dir="rtl">
            {contentText.callToAction.texts.map((line, index) => (
              <React.Fragment key={index}>
                  {convertToPersianDigits(line)}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="text-center my-32 font-normal text-xl" dir="rtl">
          <h3 className="text-[#D4DC74]">همه چی از الان شروع میشه .... </h3>
        </div>

        <div className="text-center my-32 font-bold text-xl" dir="rtl">
          <h3 className="text-white">{convertToPersianDigits(contentText.introdunctionTexts.intro1)}</h3>
          <ul className="text-[#BFBFBF] mt-6 font-medium">
            <li> {convertToPersianDigits(contentText.introdunctionTexts.intro2)}</li>
            <li> {convertToPersianDigits(contentText.introdunctionTexts.intro3)} </li>
          </ul>
        </div>

        <div className="relative w-full">          
          <Image
            src="/svgs/purple_glass.svg"
            alt="Glass Shape"
            width={400}
            height={400}
            className="absolute right-0 -top-72 w-[40rem] h-auto z-0"
          />
          
          <div 
            className="relative z-10 max-w-2xl mx-auto"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Image
              src="/images/intro_heart.png"
              alt="heart image"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="text-center my-32 font-normal text-xl" dir="rtl">
          <h3 className="text-white">فرمول کلاب ما 
          {" "} 
            <span className="bg-[rgba(97,81,255,0.4)] p-1 rounded-md">هر روز یک درصد بیشتر  </span>
          </h3>
        </div>

        <div className="text-center my-32 font-bold text-2xl leading-10" dir="rtl">
          <p className="text-white font-light"> {convertToPersianDigits(contentText.introdunctionTexts.intro4)}</p>
          <p className="text-white">که مجموعا {" "}
            <span className="text-[#C3BDFF]"> {convertToPersianDigits(contentText.introdunctionTexts.intro5)}{" "}</span> 
            رو زدیم !
          </p>
        </div>

      </div>
    </section>
  );
}

