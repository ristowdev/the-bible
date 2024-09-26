import React from 'react'
import { Button } from '../ui/button'

export default function Products() {
    return (
        <div className="mt-[30px] min-h-[600px] w-full flex-col">
            <div className="w-full border-[5px] border-black min-h-[300px] flex">
                <div className="p-[20px] flex flex-col lg:flex-row">
                    <div className="w-[100%] lg:w-[350px]">
                        <img src="/intervened.jpg" />
                    </div>
                    <div className="ml-10 flex flex-col">
                        <span className="uppercase text-[24px] font-bebas font-semibold">God Bless The USA Bible – “The Day God Intervened” Edition</span>
                        <p className="font-openSans mt-3 text-base font-bold leading-[1.7]">
                            This beautiful God Bless The USA Bible has been custom embossed to in remembrance of the day that God intervened during President Donald J. Trump’s assassination attempt.
                        </p>
                        <p className="font-openSans mt-3 text-base font-normal leading-[1.7]">
                            DONALD J. TRUMP<br />
                            45TH PRESIDENT<br />
                            OF THE<br />
                            UNITED STATES OF AMERICA<br />
                            THE DAY GOD INTERVENED<br />
                            JULY 13, 2024
                        </p>
                        <p className="font-openSans text-[18px] mt-[23px] font-medium">$59.99</p>
                        <span className="font-openSans text-[16px] mt-0 text-[#ad0101] font-bold">IN STOCK NOW FOR QUICK SHIPPING</span>
                        <Button className="w-fit rounded-none mt-3 text-[20px] h-[46px] font-openSans font-normal">
                            ADD TO CART
                        </Button>

                    </div>
                </div>
            </div>

            <div className="w-full border-[5px] border-black min-h-[300px] flex mt-5">
                <div className="p-[20px] flex flex-col lg:flex-row">
                    <div className="w-[100%] lg:w-[350px]">
                        <img src="/intervened.jpg" />
                    </div>
                    <div className="ml-10 flex flex-col">
                        <span className="uppercase text-[24px] font-bebas font-semibold">God Bless The USA Bible – “The Day God Intervened” Edition</span>
                        <p className="font-openSans mt-3 text-base font-bold leading-[1.7]">
                            This beautiful God Bless The USA Bible has been custom embossed to in remembrance of the day that God intervened during President Donald J. Trump’s assassination attempt.
                        </p>
                        <p className="font-openSans mt-3 text-base font-normal leading-[1.7]">
                            DONALD J. TRUMP<br />
                            45TH PRESIDENT<br />
                            OF THE<br />
                            UNITED STATES OF AMERICA<br />
                            THE DAY GOD INTERVENED<br />
                            JULY 13, 2024
                        </p>
                        <p className="font-openSans text-[18px] mt-[23px] font-medium">$59.99</p>
                        <span className="font-openSans text-[16px] mt-0 text-[#ad0101] font-bold">IN STOCK NOW FOR QUICK SHIPPING</span>
                        <Button className="w-fit rounded-none mt-3 text-[20px] h-[46px] font-openSans font-normal">
                            ADD TO CART
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}
