'use client'
import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Is this Bible officially endorsed by President Trump?",
    answer: "Yes, this is the only Bible endorsed by President Trump!"
  },
  {
    question: "What is the size of the Bible?",
    answer: "The Bible is a standard size of 6 x 9 inches."
  },
  {
    question: "Is the content unique?",
    answer: "Yes, the content has been carefully curated for this edition."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the FAQ if it's already open
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="w-full bg-black min-h-[600px] mt-[80px] pt-[50px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[1350px] w-[93%]">
          <div className="flex flex-col w-full items-center justify-center">
            <span className="text-[32px] text-white font-bebas">FREQUENTLY ASKED QUESTIONS</span>
            <div className="mt-2"></div>
            {faqs.map((faq, index) => (
              <div key={index} className="w-full border border-white p-[17px] flex justify-between mb-[20px] cursor-pointer" onClick={()=>{toggleFAQ(index)}}>
                <div className="flex flex-col">
                  <span className="uppercase font-bebas text-[24px] text-white">
                    {faq.question}
                  </span>
                  {openIndex === index && (
                    <p className="font-openSans text-white mt-2">{faq.answer}</p>
                  )}
                </div>
                <div className="mt-[5px]">
                  {openIndex !== index && (
                    <PlusCircle 
                      color='#ad0101' 
                    //   onClick={() => toggleFAQ(index)} 
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
