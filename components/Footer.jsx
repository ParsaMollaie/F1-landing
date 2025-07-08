'use client';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      className="flex flex-col justify-center items-center gap-3 p-14 mb-8"
      dir="rtl"
    >
      <div className="flex flex-col justify-center items-center text-center gap-10">
        <div className="md:w-[8rem] w-28">
          <Image
            src="/svgs/logo.svg"
            alt="F1 logo"
            width={130}
            height={40}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xl font-light">برای عضویت در کلاب فرمول یک درصد</p>
        <p className="text-xl font-medium">روی لینک زیر کلیک کن:</p>

        <button className="bg-[#AFA7FF] text-black md:px-12 px-6 py-4 rounded-lg cursor-pointer font-bold text-lg">
          عضویت در کلاب
        </button>
      </div>
      <div className="border-t border-white pt-4 w-[90%] opacity-25 mt-20" />
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 gap-10">
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-[#E6FFC0]">دفتر ایران، تهران</p>
          <p className="text-sm">
            امیرآباد شمالی، خیابان فرشی مقدم، پارک علم و فناوری دانشگاه تهران.
          </p>
          <p className="text-sm">پلاک 74. مرکز توسعه کسب و کار صنعت 4</p>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <a href="#">
            <Image
              src="/svgs/social_x.svg"
              alt="Twitter/X"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </a>

          <a href="#">
            <Image
              src="/svgs/social_whatsapp.svg"
              alt="WhatsApp"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </a>

          <a href="#">
            <Image
              src="/svgs/social_youtube.svg"
              alt="YouTube"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </a>

          <a
            href="https://www.instagram.com/babaknikfar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svgs/social_instagram.svg"
              alt="Instagram"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </a>

          <a
            href="https://t.me/formulyekdarsad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svgs/social_telegram.svg"
              alt="Telegram"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
