"use client"
import Image from "next/image";
import { FaApple, FaArrowCircleLeft, FaBusinessTime, FaCalendar, FaLock, FaUnlock, FaUser } from "react-icons/fa";
import { CgSupport } from "react-icons/cg";
import { FC } from "react";

interface CheckOutProps {
    setIsCheckOut?: React.Dispatch<React.SetStateAction<boolean>>,
    setIsPayOut?: React.Dispatch<React.SetStateAction<boolean>>,
    isCheckOut?: boolean,
    setIsGetStarted?: React.Dispatch<React.SetStateAction<boolean>>
}

const Checkout: FC<CheckOutProps> = ({ setIsCheckOut, setIsPayOut, isCheckOut, setIsGetStarted }) => {

    const handlePayOut = () => {
        setIsCheckOut?.(false);
        setIsPayOut?.(true);
    }

    const handlePrevPayOut = () => {
        setIsGetStarted?.(false);
        setIsCheckOut?.(false);
    }

    return (
        <div className={`max-w-7xl w-full justify-center items-center ${isCheckOut ? "flex" : "hidden"}`}>
            <div className="w-full flex lg:flex-row flex-col justify-center lg:items-start items-center gap-6 px-2">
                <div className="lg:w-[35rem] w-full p-8 flex flex-col justify-center rounded-lg shadow-lg items-start gap-4 border">
                    <span className="font-bold cursor-pointer flex items-center gap-1" onClick={() => handlePrevPayOut()}> <FaArrowCircleLeft /> Back</span>
                    <div className="flex pb-4 border-b w-full">
                        <h1 className="font-bold text-[2.5rem]">Checkout</h1>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-4 mt-4">
                        <div className="w-full flex md:flex-row flex-col justify-between items-center gap-4">
                            <span className="flex items-center gap-2 md:text-lg text-base font-medium">Pay with credit / debit card <FaLock color="#FFC107" /></span>
                            <Image alt="Pay" src="/assets/icon/payment.svg" width={230} height={80} className="w-[230px] h-[80px]" />
                        </div>
                        <button className="w-full py-3 bg-black text-white text-lg font-medium flex justify-center items-center rounded-lg">
                            <FaApple />Pay</button>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-2 mt-4">
                        <div className="w-full flex py-1 items-start justify-start relative">
                            <input className="w-full border border-[#001F3F] outline-none py-[0.7rem] px-12 font-medium rounded-lg" type="text" placeholder="Card Number" />
                            <Image src="/assets/icon/creditcard.svg" width={30} height={28} alt="CreditCard" className="absolute left-2 top-[0.7rem]" />
                        </div>
                        <div className="w-full flex justify-center items-center gap-5">
                            <div className="w-1/2 flex py-1 items-center justify-start relative">
                                <input className="w-full border border-[#001F3F] outline-none py-[0.7rem] px-12 font-medium rounded-lg" type="date" />
                                <FaCalendar className="absolute left-2 top-[1rem] w-6 h-6" color="#001F3F" />
                            </div>
                            <div className="w-1/2 flex py-1 items-center justify-start relative">
                                <input className="w-full border border-[#001F3F] outline-none py-[0.7rem] px-12 font-medium rounded-lg" type="text" placeholder="CCV" />
                                <FaLock className="absolute left-2 top-[1rem] w-6 h-6" color="#001F3F" />
                            </div>
                        </div>
                        <div className="w-full flex py-1 items-start justify-start relative">
                            <input className="w-full border border-[#001F3F] outline-none py-[0.7rem] px-12 font-medium rounded-lg" type="text" placeholder="Card Number" />
                            <FaUser className="absolute left-2 top-[1rem] w-6 h-6" color="#001F3F" />
                        </div>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-[#296FF9] to-[#59CEFC] text-white text-lg font-medium rounded-lg mt-8" onClick={() => handlePayOut()}>Pay $1.45</button>
                    <div className="w-full flex justify-center items-center mt-4">
                        <span className="flex gap-1 text-xs">By completing your order, you agree to the <b>terms of services</b> and <b>privacy policy.</b> </span>
                    </div>
                </div>
                <div className="lg:w-[25em] w-full flex flex-col p-6 shadow-lg border rounded-lg">
                    <div className="w-full flex justify-start items-center gap-4 pb-6 border-b">
                        <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                            <Image src="/assets/avatar/avatar.png" width={64} height={64} className="w-full h-full rounded-full" alt="Avatar" />
                        </div>
                        <div className="flex flex-col justify-center items-start font-medium">
                            <span className="font-bold">@zainjo</span>
                            <span>Change username</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start py-6 gap-4 border-b">
                        <div className="w-full flex justify-between items-center">
                            <span className="flex items-center gap-2 font-medium"> <FaUser color="#FFC107" /> 1000 followers</span>
                            <span className="font-medium">$12.99</span>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <span className="flex items-center gap-2 text-xl font-bold">Total to pay</span>
                            <span className="font-medium text-xl">$12.99</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start py-6 gap-4">
                        <div className="w-full flex justify-start items-center gap-2">
                            <FaUser />
                            <span className="flex gap-1"> <b>High quality</b> followers</span>
                        </div>
                        <div className="w-full flex justify-start items-center gap-2">
                            <FaUnlock />
                            <span className="flex gap-1"> <b>No Instagram password</b> required </span>
                        </div>
                        <div className="w-full flex justify-start items-center gap-2">
                            <FaBusinessTime />
                            <span className="flex gap-1"> <b>Fast delivery,</b> up to 10 mins</span>
                        </div>
                        <div className="w-full flex justify-start items-center gap-2">
                            <CgSupport />
                            <span className="flex gap-1"> <b>24/7</b> support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;