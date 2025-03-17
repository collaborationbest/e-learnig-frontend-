"use client"
import { FaCheck, FaStar } from "react-icons/fa";
import Image from "next/image";
import Stormlike from "../../components/homepage/Stormlike";
import WhyStormLike from "../../components/homepage/WhyStormlike";
import Service from "../../components/homepage/Service";
import FAQ from "../../components/homepage/Faq";
import Rating from "../../components/homepage/Rating";
import { useRouter } from "next/navigation";

const Homepage = () => {


    const route = useRouter();

    const checkOut = () => {
        route.push("/checkout");
    }

    return (
        <section className="w-full flex flex-col justify-center items-center mt-[100px]">
            <div className="max-w-7xl w-full flex flex-col justify-center items-center pt-10">
                <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="lg:text-5xl md:text-[2.3rem] text-[1.6rem] font-[system-ui] font-[700] text-center text-[#001F3F]">
                        TBS Coaching Academy</h1>
                </div>

                <div className="w-full flex flex-col justify-center items-center mt-8 px-2">
                    <span className="md:w-[50%] w-full md:text-center text-start text-xl font-[system-ui] font-medium text-gray-600">
                        The platform aims to provide a seamless online learning experience with user authentication, course management, multimedia content delivery, discussion forums, secure online exams, and a progressive web app (PWA) design.</span>
                </div>

                <div className="w-full flex justify-center items-center mt-8">
                    <div className="lg:flex lg:justify-center lg:w-[65%] w-full lg:items-center grid grid-cols-[60%,40%] place-items-center grid-rows-2 bg-transparent lg:py-4 lg:px-0 px-2 rounded-lg">
                        <div className="flex gap-1 lg:order-1 order-1 md:justify-center justify-start md:w-auto sm:w-[60%]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="bg-[#eab308] p-[0.5rem] w-8 h-8 flex justify-center items-center rounded-lg">
                                    <FaStar className="text-lg text-white" />
                                </div>
                            ))}
                            <div className="w-[1px] h-8 bg-gray-500 ml-3 lg:flex hidden"></div>
                        </div>

                        <div className="flex items-center gap-2 bg-transparent text-white lg:px-4 py-[0.5rem] rounded-lg lg:w-[50%] sm:w-[75%] w-full lg:order-2 order-3 lg:ml-4 lg:mr-4 col-span-2">
                            <div className="content w-full">
                                <div className="slider w-full">
                                    <div className="slider-text-1 text-sm font-bold w-full">
                                        <span className="relative flex size-3 ml-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC71] opacity-75"></span>
                                            <span className="relative inline-flex size-3 rounded-full bg-[#2ECC71]"></span>
                                        </span>
                                        <div className="flex justify-between w-full h-full mt-20px items-center text-[#2ECC71] px-2">
                                            <div className="w-1/2 flex justify-center font-[system-ui]"><b>100 likes &nbsp;</b>delivered</div>
                                            <div className="w-1/2 flex justify-end items-center gap-2 font-[system-ui]">
                                                <span className="p-1 rounded-full bg-white text-[#2ECC71]"> <FaCheck /> </span>
                                                <span>19 mins ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-text-2 text-sm font-bold w-full">
                                        <span className="relative flex size-3 ml-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC71] opacity-75"></span>
                                            <span className="relative inline-flex size-3 rounded-full bg-[#2ECC71]"></span>
                                        </span>
                                        <div className="flex justify-between w-full h-full mt-20px items-center text-[#2ECC71] px-2">
                                            <div className="w-1/2 flex justify-center font-[system-ui]"><b>100 likes &nbsp;</b>delivered</div>
                                            <div className="w-1/2 flex justify-end items-center gap-2 font-[system-ui]">
                                                <span className="p-1 rounded-full bg-white text-[#2ECC71]"> <FaCheck /> </span>
                                                <span>19 mins ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-text-3 text-sm font-bold w-full">
                                        <span className="relative flex size-3 ml-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC71] opacity-75"></span>
                                            <span className="relative inline-flex size-3 rounded-full bg-[#2ECC71]"></span>
                                        </span>
                                        <div className="flex justify-between w-full h-full mt-20px items-center text-[#2ECC71] px-2">
                                            <div className="w-1/2 flex justify-center font-[system-ui]"><b>100 likes &nbsp;</b>delivered</div>
                                            <div className="w-1/2 flex justify-end items-center gap-2 font-[system-ui]">
                                                <span className="p-1 rounded-full bg-white text-[#2ECC71]"> <FaCheck /> </span>
                                                <span>19 mins ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex md:justify-center justify-end md:ml-0 ml-10 items-center md:w-auto sm:w-[40%] lg:order-3 order-2">
                            <div className="w-[1px] h-8 bg-gray-500 lg:flex hidden"></div>
                            <button className="border border-[#eab308] px-3 py-2 rounded-lg ml-4">
                                <Image src="assets/icon/apple.svg" alt="Apple Pay" width={45} height={25} className="w-[45px] h-[25px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
            <Rating />
        </section>
    )
}

export default Homepage;