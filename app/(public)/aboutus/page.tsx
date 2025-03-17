"use client"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from "next/image"
import { FaMinus, FaPlus } from "react-icons/fa"
import { useState } from "react"

const AboutUs = () => {


    return (
        <div>
            <Header />
            <section className="w-full flex flex-col justify-center items-center mt-[80px] px-2">
                <div className="max-w-7xl w-full flex flex-col justify-center items-center">
                    <div className="max-w-7xl w-full flex flex-col justify-center items-center pt-10">
                        <div className="w-full flex flex-col justify-center items-center">
                            <h1 className="lg:text-[3.2rem] md:text-[2rem] text-[1.6rem] font-[system-ui] font-[700] text-center text-[#001F3F]">
                                About Us Page</h1>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AboutUs