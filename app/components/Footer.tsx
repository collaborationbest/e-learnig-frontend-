"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {

    const router = useRouter();

    const FooterItems = [
        {
            title: "FAQ",
            path: "faq"
        },
        {
            title: "Blog",
            path: "blog"
        },
        {
            title: "About Us",
            path: "aboutus"
        },
        {
            title: "Contact Us",
            path: "contactus"
        },
        {
            title: "Term of Service",
            path: "termofservice"
        },
        {
            title: "Privacy Policy",
            path: "privacypolicy"
        },
    ]

    const PageDirectory = (route: string) => {
        if (route === "About Us") router.push("/aboutus");
    }

    return (
        <footer className="w-full mt-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <div className="w-full flex flex-row flex-wrap justify-start items-center gap-8 py-10">
                        {
                            FooterItems.map((item) => (
                                <Link key={item.title} href={"/" + item.path} className="font-bold text-[#192d5a] text-base hover:text-[#2563EB] transition duration-300" onClick={() => PageDirectory(item.title)}>{item.title}</Link>
                            ))
                        }
                    </div>
                    <div className="w-full flex md:flex-row flex-wrap flex-col justify-between items-start gap-24 py-8">

                        <div className="flex flex-col justify-start items-start gap-6 md:w-auto w-full">
                            <h1 className="font-bold font-[system-ui] lg:text-lg text-xl h-8 text-[#192d5a]">My Account</h1>
                            <div className="flex flex-col justify-start items-start gap-3 font-[system-ui] text-[#192d5a] font-medium lg:text-[0.9rem] text-lg">
                                <Link href="/auth/signin" className="hover:text-[#2563EB] transition duration-300">Log In</Link>
                                <Link href="/auth/signup" className="hover:text-[#2563EB] transition duration-300">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-[#192d5a] ">Copyright © 2025 TBS.io. All Rights Reserved</span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                            <Image src="assets/icon/payment.svg" width={250} height={50} className="w-[250px] h-[50px]" alt="Payment" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;