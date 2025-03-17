"use client"
import Image from "next/image";
import { FaArrowCircleLeft, FaCheck, FaHeart } from "react-icons/fa";
import { FC, useState } from "react";

interface CheckOutProps {
    setIsCheckOut?: React.Dispatch<React.SetStateAction<boolean>>,
    setIsPayOut?: React.Dispatch<React.SetStateAction<boolean>>,
    isCheckOut?: boolean,
    setIsGetStarted?: React.Dispatch<React.SetStateAction<boolean>>
}

interface MediaData {
    id: number,
    img: string,
    isActive: boolean
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

    const [mediaData, setMediaData] = useState<MediaData[]>([
        {
            id: 0,
            img: "/assets/media/1.jpg",
            isActive: false
        },
        {
            id: 1,
            img: "/assets/media/2.jpg",
            isActive: false
        },
        {
            id: 2,
            img: "/assets/media/3.jpg",
            isActive: false
        },
        {
            id: 3,
            img: "/assets/media/4.jpg",
            isActive: false
        },
        {
            id: 4,
            img: "/assets/media/5.jpg",
            isActive: false
        },
        {
            id: 5,
            img: "/assets/media/6.jpg",
            isActive: false
        },
        {
            id: 6,
            img: "/assets/media/7.jpg",
            isActive: false
        },
        {
            id: 7,
            img: "/assets/media/8.jpg",
            isActive: false
        },
        {
            id: 8,
            img: "/assets/media/9.jpg",
            isActive: false
        },
        {
            id: 9,
            img: "/assets/media/10.jpg",
            isActive: false
        },
        {
            id: 10,
            img: "/assets/media/11.jpg",
            isActive: false
        },
        {
            id: 11,
            img: "/assets/media/12.jpg",
            isActive: false
        }
    ])

    const selectedMediaHandle = (id: number) => {
        if (mediaData[id].isActive === true) {
            const item = mediaData.map((temp) => (
                temp.id === id
                    ? { ...temp, isActive: false }
                    : { ...temp, isActive: temp.isActive }
            ))
            setMediaData(item);
        } else {
            const item = mediaData.map((temp) => (
                temp.id === id
                    ? { ...temp, isActive: true }
                    : { ...temp, isActive: temp.isActive }
            ))
            setMediaData(item);
        }
    }

    return (
        <div className={`max-w-7xl w-full justify-center items-center ${isCheckOut ? "flex" : "hidden"}`}>
            <div className="w-full flex lg:flex-row flex-col justify-center lg:items-start items-center gap-6 px-2">
                <div className="lg:w-[35rem] w-full p-8 flex flex-col justify-center rounded-lg shadow-lg items-start gap-4 border">
                    <span className="font-bold cursor-pointer flex items-center gap-1" onClick={() => handlePrevPayOut()}> <FaArrowCircleLeft /> Back</span>
                    <div className="flex pb-4 border-b w-full">
                        <h1 className="font-bold text-[2.5rem]">Checkout</h1>
                    </div>
                    <div className="w-full flex justify-center items-center py-3 bg-gray-200">
                        <h1 className="font-medium">0 posts selected / 50 likes per post</h1>
                    </div>
                    <div className="w-full grid grid-cols-4 place-content-center place-items-center gap-2">
                        {
                            mediaData.map((item, index) => (
                                <div key={index} className="flex justify-center items-center relative hover:opacity-90 cursor-pointer" onClick={() => selectedMediaHandle(index)}>
                                    <Image src={item.img} width={120} height={120} alt="media" className="w-[120px] h-[120px] object-cover" />
                                    {
                                        item.isActive
                                            ? <div className="w-6 h-6 flex justify-center items-center border rounded-full absolute top-2 right-2 text-white">
                                                <FaCheck />
                                            </div>
                                            : null
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-[#296FF9] to-[#59CEFC] text-white text-lg font-medium rounded-lg mt-8">Load more posts</button>
                    <div className="flex w-full flex-col items-start justify-center gap-2 mt-4 pt-4 border-t">
                        <label htmlFor="Advanced Options" className="text-sm font-medium">Advanced Options</label>
                        <select id="count" className="w-full block h-12 pr-5 py-2.5 text-base font-medium leading-7 shadow-xs text-[#192d5a] bg-transparent border border-[#192d5a] rounded-lg placeholder-[#192d5a] focus:outline-none">
                            <option value="speed">Delivery speed</option>
                        </select>
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
                            <div className="flex gap-4">
                                <span className="flex items-center gap-2 font-medium"> <FaHeart color="#FFC107" /> 50 likes</span>
                                <span className="text-[#296FF9] font-medium">Change</span>
                            </div>
                            <span className="font-medium">$1.47</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-4">
                        <button className="w-full py-3 bg-gradient-to-r from-[#296FF9] to-[#59CEFC] text-white text-lg font-medium rounded-lg mt-8" onClick={() => handlePayOut()}>Continue to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;