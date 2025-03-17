"use client"
import { signUp } from "../../../api/auth/signup/route";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Google from "@/app/components/auth/GoogleLoginButton";
import Header from "@/app/components/Header";

const Signup = () => {

    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [secondname, setSecondname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");

    const Login = () => {
        router.push("/auth/signin");
    }

    const SignUp = async () => {
        try {
            if (email === "") toast.error("Enter your email!!!");
            else if (firstname === "") toast.error("Enter your firstname!!!");
            else if (secondname === "") toast.error("Enter your lastname!!!");
            else if (password.length < 8) toast.error("Password must be at least 8 characters long!");
            else if (password === "") toast.error("Enter your password!!!");
            else if (password !== confirm) toast.error("Check your password!!!");
            else {

                const response = await signUp(email, firstname, secondname, password);

                console.log(response);

                if (response.state === 1) {

                    localStorage.setItem("token", JSON.stringify(response.user));
                    toast.success("Sign Up Successfully!!!");

                    router.push("/");
                } else {
                    toast.error("Already your email registered!!!");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleEmail = (value: string) => {
        setEmail(value);
    }

    const handleFirstname = (value: string) => {
        setFirstname(value);
    }

    const handleSecondname = (value: string) => {
        setSecondname(value);
    }

    const handlePassword = (value: string) => {
        setPassword(value);
    }

    const handleConfirm = (value: string) => {
        setConfirm(value);
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Header />
            <div className="w-full max-w-md mt-[90px]">
                <div className="backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8 transition-all duration-500 hover:shadow-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#296FF9] to-[#59CEFC] py-2 bg-clip-text text-transparent font-[system-ui]">Sign Up</h2>
                        <p className="text-gray-500 mt-2 font-[system-ui]">Please sign up to login</p>
                    </div>

                    <div className="space-y-6">
                        <div className="relative">
                            <label className="block text-gray-700 text-sm font-medium mb-2 font-[system-ui]" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <i data-lucide="mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                <input
                                    className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => handleEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-full flex md:flex-row flex-col justify-center items-center gap-3">
                            <div className="relative md:w-1/2 w-full">
                                <label className="block text-gray-700 text-sm font-medium mb-2 font-[system-ui]" htmlFor="firstname">
                                    First Name
                                </label>
                                <div className="relative">
                                    <i data-lucide="mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                    <input
                                        className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                        type="text"
                                        id="firstname"
                                        placeholder="First Name"
                                        required
                                        value={firstname}
                                        onChange={(e) => handleFirstname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="relative md:w-1/2 w-full">
                                <label className="block text-gray-700 text-sm font-medium mb-2 font-[system-ui]" htmlFor="secondname">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <i data-lucide="mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                    <input
                                        className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                        type="text"
                                        id="secondname"
                                        placeholder="Last Name"
                                        required
                                        value={secondname}
                                        onChange={(e) => handleSecondname(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block font-[system-ui] text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <i data-lucide="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                <input
                                    className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => handlePassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block font-[system-ui] text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                                Confirm
                            </label>
                            <div className="relative">
                                <i data-lucide="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                <input
                                    className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                    type="password"
                                    id="confirm"
                                    placeholder="Confirm"
                                    required
                                    value={confirm}
                                    onChange={(e) => handleConfirm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 text-gray-600 font-[system-ui] text-sm" htmlFor="remember">
                                    Remember me
                                </label>
                            </div>
                            <Link href="#" className="text-sm text-blue-600 hover:text-blue-800 font-[system-ui] font-medium transition-colors duration-200">Forgot password?</Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full font-[system-ui] bg-gradient-to-r text-white from-[#296FF9] to-[#59CEFC] tex4white py-3 rounded-lg hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                            onClick={() => SignUp()}>
                            Sign Up
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 font-[system-ui] bg-white/80 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center gap-3">
                            <Google />
                        </div>
                    </div>

                    <p className="text-center text-sm text-gray-600 font-[system-ui]" onClick={() => Login()}>
                        Already do you have account?
                        <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 font-[system-ui]">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;