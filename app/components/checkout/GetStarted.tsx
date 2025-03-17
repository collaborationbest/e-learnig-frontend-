"use client"
import { FaHeart, FaMailBulk, FaUser, FaStar } from "react-icons/fa";
import { FC, useState } from "react";
import Image from "next/image";

const cardItem = [
    {
        id: 0,
        count: 50,
        price: 5.53
    },
    {
        id: 1,
        count: 100,
        price: 7.25
    },
    {
        id: 2,
        count: 150,
        price: 9.99
    },
    {
        id: 3,
        count: 200,
        price: 12.99
    },
    {
        id: 4,
        count: 250,
        price: 18.99
    },
    {
        id: 5,
        count: 300,
        price: 22.99
    },
    {
        id: 6,
        count: 350,
        price: 36.99
    },
]

interface CheckOutProps {
    isGetStarted?: boolean,
    setIsCheckOut?: React.Dispatch<React.SetStateAction<boolean>>
    setIsGetStarted?: React.Dispatch<React.SetStateAction<boolean>>
}

const GetStarted: FC<CheckOutProps> = ({ setIsCheckOut, isGetStarted, setIsGetStarted }) => {

    const [cardPrice, setCardPrice] = useState<number>(cardItem[0].price);

    const handleCardItem = (id: number) => {
        setCardPrice(cardItem[id].price);
    }

    const handleCheckOut = () => {
        setIsGetStarted?.(true);
        setIsCheckOut?.(true)
    }

    return (
        <div className={`max-w-7xl w-full flex-col justify-center items-center ${isGetStarted ? "hidden" : "flex"}`}>
            <div className="w-full flex lg:flex-row flex-col justify-center lg:items-center items-center gap-6 px-2">
                <div className="lg:w-[35rem] w-full p-8 flex flex-col justify-center rounded-lg shadow-lg items-start gap-4 border">
                    <div className="flex pb-4 border-b w-full">
                        <h1 className="font-bold text-[2.5rem]">Get Started</h1>
                    </div>
                    <div className="relative mb-2 w-full">
                        <div className="relative text-[#192d5a] focus-within:text-[#192d5a]">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                <FaUser />
                            </div>
                            <input type="text" id="username" className="w-full block h-12 pr-5 pl-12 py-2.5 text-base font-medium leading-7 shadow-xs text-[#192d5a] bg-transparent border border-[#192d5a] rounded-lg placeholder-[#192d5a] focus:outline-none" placeholder="harsh" />
                        </div>
                    </div>
                    <div className="relative mb-2 w-full">
                        <div className="relative text-[#192d5a] focus-within:text-[#192d5a]">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                <FaMailBulk />
                            </div>
                            <input type="text" id="password" className="w-full block h-12 pr-5 pl-12 py-2.5 text-base font-medium leading-7 shadow-xs text-[#192d5a] bg-transparent border border-[#192d5a] rounded-lg placeholder-[#192d5a] focus:outline-none" placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <div className="relative mb-2 w-full">
                        <div className="relative text-[#192d5a] focus-within:text-[#192d5a]">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                <FaHeart />
                            </div>
                            <select id="count" className="w-full block h-12 pr-5 pl-12 py-2.5 text-base font-medium leading-7 shadow-xs text-[#192d5a] bg-transparent border border-[#192d5a] rounded-lg placeholder-[#192d5a] focus:outline-none" onChange={(e) => handleCardItem(Number(e.target.value))}>
                                {
                                    cardItem.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.count} likes
                                        </option>
                                    ))
                                }
                            </select>
                            <span className="absolute right-12 top-[0.55rem] text-lg font-medium">${cardPrice}</span>
                        </div>
                    </div>
                    <div className="w-full mb-2 flex flex-col justify-center items-center py-2 bg-gray-100 gap-1">
                        <span className="text-[#3b7bfe] font-medium">Special Offer : Buy Automatic Instagram Likes and Save 25%</span>
                        <span className="font-medium text-sm">Save time manually buying likes every time you post by</span>
                        <span className="font-medium text-sm">subscribing to our Automatic Likes.</span>
                        <span className="font-medium text-sm px-2 py-1 bg-gradient-to-r from-[#296FF9] to-[#59CEFC] rounded-md text-white">Save 25% now!</span>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded outline-none"
                        />
                        <label className="ml-2 text-gray-600 font-[system-ui] text-sm" htmlFor="remember">
                            Send me special promotions and discounts
                        </label>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-[#296FF9] to-[#59CEFC] text-white text-lg font-medium rounded-lg mt-8" onClick={() => handleCheckOut()}>Continue</button>
                </div>
                <div className="lg:w-[25em] w-full flex flex-col p-6">
                    <div className="w-full flex justify-start items-center gap-4 pb-6">
                        <div className="flex w-full flex-col justify-center items-center text-center font-medium">
                            <span>One of the very best sites to invest <br />in social media marketing packages <br />in LikesIO.</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-start gap-1 text-[#38c793]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center py-6 gap-4">
                        <span className="font-medium">- ABC Action News</span>
                        <div className="w-[85px] h-[85px] rounded-full flex justify-center items-center border-4 border-[#FFC107]">
                            <Image src="/assets/img/us.png" alt="US" width={80} height={80} className="rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;