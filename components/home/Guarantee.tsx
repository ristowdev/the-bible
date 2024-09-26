import React from 'react'

export default function Guarantee() {
  return (
    <div className="w-full min-h-[200px] mt-[50px] flex justify-between flex-col lg:flex-row items-center">
        <div className="w-[100%] lg:w-[33.333%] flex items-center justify-center text-center flex-col">
            <img src="/g1.png" className="w-[200px] h-[200px] object-contain"/>
            <div className="flex flex-col items-center justify-center p-[30px] pt-0 pb-0">
                <span className="text-[18px] font-openSans font-bold ">Money Back</span>
                <p className="mt-3 font-openSans text-[14px]">Complete purchase safety is provided by the 60-Day 100% Money-Back Guarantee. This suggests that in the event that {"you're"} dissatisfied or decide to change your mind.</p>
            </div>
        </div> 
        <div className="w-[100%] lg:w-[33.333%] flex items-center justify-center text-center flex-col mt-10 mb-10 lg:mt-0 lg:mb-0">
            <img src="/g2.png" className="w-[200px] h-[200px] object-contain"/>
            <div className="flex flex-col items-center justify-center p-[30px] pt-0 pb-0">
                <span className="text-[18px] font-openSans font-bold ">Best Product</span>
                <p className="mt-3 font-openSans text-[14px]">They stand out for their distinctive designs, which are each painstakingly made to capture the essence of American history and culture, due to their uniqueness.</p>
            </div>
        </div> 
        <div className="w-[100%] lg:w-[33.333%] flex items-center justify-center text-center flex-col">
            <img src="/g3.png" className="w-[200px] h-[200px] object-contain"/>
            <div className="flex flex-col items-center justify-center p-[30px] pt-0 pb-0">
                <span className="text-[18px] font-openSans font-bold ">Best Quality</span>
                <p className="mt-3 font-openSans text-[14px]">We pledge to use the utmost care and attention to detail when making each poster. {"We're"} determined to give you the greatest collectibles out there, and we {"won't"} give up.</p>
            </div>
        </div> 
    </div>  
  )
}
