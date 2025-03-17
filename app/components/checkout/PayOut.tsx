"use client"
import Image from "next/image";
import { FaArrowCircleLeft, FaBusinessTime, FaCalendar, FaHeart, FaLock, FaPlus, FaUnlock, FaUser } from "react-icons/fa";
import { CgSupport } from "react-icons/cg";
import { FC } from "react";

interface PayOutProps {
    isPayOut?: boolean,
    setIsPayOut?: React.Dispatch<React.SetStateAction<boolean>>,
    setIsCheckOut?: React.Dispatch<React.SetStateAction<boolean>>
}

const PayOut: FC<PayOutProps> = ({ isPayOut, setIsPayOut, setIsCheckOut }) => {

    const handlePrevPayOut = () => {
        setIsCheckOut?.(true);
        setIsPayOut?.(false);
    }

    return (
        <div className={`max-w-7xl w-full justify-center items-center ${isPayOut ? "flex" : "hidden"}`}>
            <div className="w-full flex lg:flex-row flex-col justify-center lg:items-start items-center gap-6 px-2">
                <div className="lg:w-[35rem] w-full p-8 flex flex-col justify-center rounded-lg shadow-lg items-start gap-4 border">
                    <span className="font-bold cursor-pointer flex items-center gap-1" onClick={() => handlePrevPayOut()}> <FaArrowCircleLeft /> Back</span>
                    <div className="flex pb-4 border-b w-full">
                        <h1 className="font-bold text-[2.5rem]">Checkout</h1>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-4 mt-4">
                        <div className="w-full flex md:flex-row flex-col justify-between items-center gap-4">
                            <span className="flex items-center gap-2 md:text-lg text-base font-medium">Pay with credit / debit card <FaLock color="#FFC107" /></span>
                            <Image alt="Pay" src="/assets/icon/payment.svg" width={230} height="80" />
                        </div>
                        <div className="w-full flex flex-col justify-center items-center gap-2 mt-4">
                            <div className="w-full flex py-1 items-start justify-start relative">
                                <input className="w-full border border-[#001F3F] outline-none py-[0.7rem] px-12 font-medium rounded-lg" type="text" placeholder="Card Number" />
                                <Image src="/assets/icon/creditcard.svg" width={30} height={28} alt="CreditCard" className="absolute left-2 top-[0.7rem]" />
                            </div>
                            <div className="w-full flex justify-center items-center gap-5">
                                <div className="w-1/2 flex py-1 items-center justify-start relative">
                                    <input className="w-full border border-[#001F3F] outline-none py-[0.7rem] px-12 font-medium rounded-lg" type="month" />
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
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-[#296FF9] to-[#59CEFC] text-white text-lg font-medium rounded-lg">Continue to payment</button>
                    <div className="w-full flex justify-center items-center">
                        <span className="flex gap-1 text-xs">By completing your order, you agree to the <b>terms of services</b> and <b>privacy policy.</b> </span>
                    </div>
                    <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 font-[system-ui] bg-white/90 text-gray-500">OR</span>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-[#296FF9] to-[#59CEFC] text-white text-lg font-medium rounded-lg">Pay With Crypto</button>
                    <div className="w-full flex justify-center items-center gap-2">
                        <span>We accept</span>
                        <div className="flex gap-1">
                            <Image src="/assets/img/crypto1.png" width={25} height={25} alt="crypto1" />
                            <Image src="/assets/img/crypto2.svg" width={25} height={25} alt="crypto1" />
                            <Image src="/assets/img/crypto3.png" width={25} height={25} alt="crypto1" />
                            <Image src="/assets/img/crypto4.png" width={25} height={25} alt="crypto1" />
                            <Image src="/assets/img/crypto5.svg" width={25} height={25} alt="crypto1" />
                        </div>
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
                        <div className="w-full flex flex-col justify-center items-center gap-2">
                            <div className="w-full flex justify-between items-center bg-gradient-to-r from-[#296FF9] to-[#59CEFC] p-2 rounded-2xl">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="flex justify-center items-start mb-5"><FaUser color="white" /></div>
                                    <div className="flex flex-col justify-center items-start">
                                        <span className="flex text-white">Add &nbsp; <b>50 likes</b> </span>
                                        <div className="flex gap-3">
                                            <div className="relative">
                                                <span className="font-medium text-[#ffffff79]">$1.47</span>
                                                <div className="w-10 h-[2px] absolute top-1/2 left-[-1.5px] bg-[#ffffff79]"></div>
                                            </div>
                                            <span className="font-medium text-white">$1.10</span>
                                            <span className="text-[#3b7bfe] font-medium px-1 bg-white rounded-lg text-sm flex justify-center items-center">Save 25%</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[#3b7bfe] text-lg p-2 rounded-full cursor-pointer bg-white flex"> <FaPlus /> </span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center bg-gradient-to-r from-[#296FF9] to-[#59CEFC] p-2 rounded-2xl">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="flex justify-center items-start mb-5"><FaHeart color="white" /></div>
                                    <div className="flex flex-col justify-center items-start">
                                        <span className="flex text-white">Add &nbsp; <b>50 likes</b> </span>
                                        <div className="flex gap-3">
                                            <div className="relative">
                                                <span className="font-medium text-[#ffffff79]">$1.47</span>
                                                <div className="w-10 h-[2px] absolute top-1/2 left-[-1.5px] bg-[#ffffff79]"></div>
                                            </div>
                                            <span className="font-medium text-white">$1.10</span>
                                            <span className="text-[#3b7bfe] font-medium px-1 bg-white rounded-lg text-sm flex justify-center items-center">Save 25%</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[#3b7bfe] text-lg p-2 rounded-full cursor-pointer bg-white flex"> <FaPlus /> </span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center bg-gradient-to-r from-[#296FF9] to-[#59CEFC] p-2 rounded-2xl">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="flex justify-center items-start mb-5"><FaUser color="white" /></div>
                                    <div className="flex flex-col justify-center items-start">
                                        <span className="flex text-white">Add &nbsp; <b>50 likes</b> </span>
                                        <div className="flex gap-3">
                                            <div className="relative">
                                                <span className="font-medium text-[#ffffff79]">$1.47</span>
                                                <div className="w-10 h-[2px] absolute top-1/2 left-[-1.5px] bg-[#ffffff79]"></div>
                                            </div>
                                            <span className="font-medium text-white">$1.10</span>
                                            <span className="text-[#3b7bfe] font-medium px-1 bg-white rounded-lg text-sm flex justify-center items-center">Save 25%</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[#3b7bfe] text-lg p-2 rounded-full cursor-pointer bg-white flex"> <FaPlus /> </span>
                                </div>
                            </div>
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

export default PayOut;