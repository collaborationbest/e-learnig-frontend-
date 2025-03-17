"use client";
import Image from "next/image";
import Logo from "../../public/assets/img/logo.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { signOut } from "../api/auth/signin/route";
import Link from "next/link";

const Header: React.FC = () => {

    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const toggleMenu = () => setIsToggleOpen((prev) => !prev);
    const router = useRouter();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");

    const Signup = () => {
        router.push("/auth/signup");
    }

    const Login = () => {
        router.push("/auth/signin");
    }

    const PageRouter = (route: string) => {
        if (route === "Contact Us" || route === "Contact") router.push("/contactus");
        else if (route === "FAQ") router.push("/faq");
        else if (route === "About Us") router.push("/aboutus");
        else if (route === "Blog") router.push("blog");
        else if (route === "Term of Service") router.push("termofservice");
        else if (route === "Privacy Policy") router.push("privacypolicy");

        setIsToggleOpen(false);
    }


    const Useful = [
        {
            id: 1,
            title: "FAQ",
            path: "faq"
        },
        {
            id: 2,
            title: "Contact",
            path: "contactus"
        },
        {
            id: 3,
            title: "About Us",
            path: "aboutus",
        },
        {
            id: 4,
            title: "Our Team",
            path: "ourteam"
        },
        {
            id: 5,
            title: "Term of Service",
            path: "termofservice"
        },
        {
            id: 6,
            title: "Privacy Policy",
            path: "privacypolicy"
        },
    ]

    const LandingPage = () => {
        router.push("/");
    }

    const LogOut = async () => {

        const response = await signOut();
        localStorage.removeItem("token");

        if (response) {
            toast.success("Logout Successfully!");
            router.push("/");
        }

        setTimeout(() => {
            setIsLogin(false);
        }, 1000);
    }

    useEffect(() => {
        const tokenString = localStorage.getItem("token");
        const token = tokenString ? JSON.parse(tokenString) : null;

        if (!token) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
            setUser(token.firstname + " " + token.lastname);
        }
    }, [])

    const handleProfile = () => {
        router.push("/profile");
    }

    return (
        <header className="w-full h-[80px] fixed top-0 left-0 z-50 flex transition-all duration-150 justify-between items-center xl:px-8 lg:px-2 px-4 bg-white/5 backdrop-blur-lg animate__animated animate__fadeIn animate__delay-0.5s">
            <Link className=" text-black font-bold text-[35px] cursor-pointer" href={'/'}>
                TBS
            </Link>

            <nav className="w-auto flex justify-center items-center">
                <ul className="lg:flex hidden justify-center items-center xl:gap-10 gap-4 cursor-pointer font-medium xl:text-base lg:text-[13px] font-[system-ui]">
                    {
                        isLogin
                            ? <li className="text-[#001F3F] flex items-center justify-center gap-2 group relative py-2 pl-3">
                                <span className="hover:text-[#2563EB] transition-all duration-300 flex gap-2 items-center">
                                    <FaUser />
                                    {user}
                                </span>
                                <div className="hidden flex-col justify-center items-center absolute w-[150px] top-10 right-0 rounded-lg shadow-sm group-hover:flex">
                                    <span className="w-full flex justify-center gap-4 items-center py-2 relative transition-all duration-300 hover:text-[#2563EB]" onClick={() => handleProfile()}>
                                        <FaUser className="absolute left-2" />
                                        My Profile
                                    </span>
                                    <span className="w-full flex justify-center gap-4 items-center py-2 relative transition-all duration-300 hover:text-[#2563EB]" onClick={() => LogOut()}>
                                        <FaSignOutAlt className="absolute left-2" />
                                        LogOut
                                    </span>
                                </div>
                            </li>
                            : <>
                                <li className="hover:text-[#2563EB] transition duration-300 text-[#001F3F]" onClick={() => Login()}>Login</li>
                                <li className="px-4 py-2 border bg-transparent text-[#192d5a] from-[#296FF9] to-[#59CEFC] hover:bg-gradient-to-r border-[#3b7bfe] rounded-lg hover:text-white transition duration-300" onClick={() => Signup()}>
                                    Sign Up
                                </li>
                            </>
                    }
                </ul>

                <div className="lg:hidden flex items-center">
                    <button className="text-gray-600 focus:outline-none" onClick={toggleMenu}>
                        {isToggleOpen ? (
                            <svg className="w-8 h-8 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isToggleOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={toggleMenu}
            ></div>

            <div
                className={`fixed top-0 left-0 w-full h-screen sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto ${isToggleOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="w-full h-[80px] flex justify-between items-center px-4">
                    <div className=" text-black font-bold text-[35px]">
                        TBS
                    </div>
                    <button className="text-gray-600" onClick={toggleMenu}>
                        <svg className="w-8 h-8 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <ul className="flex flex-col items-start px-6 space-y-6 text-[15px] font-medium mt-6">

                    <div className="flex flex-col gap-3 w-full">
                        <span className="font-bold text-[#7e819c] text-xs font-[system-ui]">USEFUL LINKS</span>
                        {Useful.map((item, index) => (
                            <li key={item.id} onClick={() => PageRouter(item.title)} className={`w-full py-2 hover:text-indigo-500 transition duration-300 font-[system-ui] cursor-pointer flex justify-start items-center gap-3 ${item.id === index - 1 ? "" : "border-b"}`}>
                                {item.title}
                            </li>
                        ))}
                    </div>

                    {
                        isLogin
                            ? <>
                                <li className="w-full">
                                    <button className="w-full px-4 py-2 border bg-transparent text-[#192d5a] from-[#296FF9] to-[#59CEFC] hover:bg-gradient-to-r hover:text-white transition duration-300 font-[system-ui]" onClick={() => handleProfile()}>
                                        My Profile
                                    </button>
                                </li>
                                <li className="w-full">
                                    <button className="w-full px-4 py-2 font-[system-ui]" onClick={() => LogOut()}>
                                        LogOut
                                    </button>
                                </li>
                            </>
                            : <>
                                <li className="w-full">
                                    <button className="w-full px-4 py-2 border bg-transparent text-[#192d5a] from-[#296FF9] to-[#59CEFC] hover:bg-gradient-to-r hover:text-white transition duration-300 font-[system-ui]" onClick={() => Signup()}>
                                        SIGN UP
                                    </button>
                                </li>
                                <li className="w-full">
                                    <button className="w-full px-4 py-2 font-[system-ui]" onClick={() => Login()}>
                                        LOG IN
                                    </button>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;