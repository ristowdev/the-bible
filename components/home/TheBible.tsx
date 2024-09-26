import React from 'react'
import { Button } from '../ui/button'

export default function TheBible() {
  return (
    <div className="flex flex-col w-full mt-[50px] min-h-[600px] items-center" id="the-bible">
        <h1 className="text-[36px] font-bebas">ORDER TODAY</h1>
        <div className="flex mt-[30px] flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[800px]">
                <img src="/big-hold.png" />
            </div>
            <div className="ml-0 lg:ml-10 mt-5 lg:mt-0 flex flex-col">
                <span className="uppercase text-[24px] font-bebas">God Bless The USA Bible</span>
                <span className="font-openSans font-bold mt-5">IN STOCK NOW FOR QUICK SHIPPING</span>
                <p className="font-openSans mt-3 text-base font-medium leading-[1.7]">Easy-to-read, large print, and slim design, this Bible invites you to explore God’s Word anywhere, any time.  This bible has been designed so that it delivers an easy reading experience in the trusted King James Version translation.  This large print Bible will be perfect to take to church, a bible study, work, travel, etc.</p>
                <p className="font-openSans mt-3 text-base font-bold leading-[1.7]">This Bible also features a copy of:</p>
                <ul className="mt-0 list-disc ml-3">
                    <li className="font-openSans text-base font-medium">Handwritten chorus to “God Bless The USA” by Lee Greenwood</li>
                    <li className="font-openSans text-base font-medium">The US Constitution</li>
                    <li className="font-openSans text-base font-medium">The Bill of Rights</li>
                    <li className="font-openSans text-base font-medium">The Declaration of Independence</li>
                    <li className="font-openSans text-base font-medium">The Pledge of Allegiance</li>
                </ul>
                <p className="font-openSans text-[18px] mt-[23px] font-medium">$59.99</p>
                <span className="font-openSans text-[16px] mt-0 text-[#ad0101] font-bold">IN STOCK NOW FOR QUICK SHIPPING</span>
                <Button className="w-fit rounded-none mt-3 text-[20px] h-[46px] font-openSans font-normal">
                    ADD TO CART
                </Button>
                <p className="font-openSans text-[12px] font-medium mt-3">GodBlessTheUSABible.com uses President Donald J. Trump’s name, likeness and image under paid license from CIC Ventures LLC. The GodBlessTheUSABible.com is not political and is not affiliated with any political campaign.</p>
            </div>
        </div>
    </div>
  )
}
