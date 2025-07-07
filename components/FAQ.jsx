import React from 'react';
import { FAQ_DATA } from "../constants";
import { convertToPersianDigits } from "../lib";

const FAQ = () => {
  return (
    <div className="p-6 rounded-lg flex flex-col justify-center items-center text-center md:text-right" dir='rtl'> 
      <h1 className="text-2xl font-bold mb-6 text-white">
        سوالاتی که ممکنه براتون پیش بیاد:
      </h1>
      
      <div className="space-y-4">
        {FAQ_DATA.map((item, index) => (
          <div 
            key={index}
            className="p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-3 text-white">
              {convertToPersianDigits(item.question)}
            </h2>
            <div className="pt-3 text-white">
              {item.answer.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-3 last:mb-0">
                  {convertToPersianDigits(paragraph)}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;