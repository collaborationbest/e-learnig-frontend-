"use client"
import { login } from "../../../api/auth/signin/route";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Google from "@/app/components/auth/GoogleLoginButton";
import Header from "@/app/components/Header";

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const Signup = () => {
        router.push("/auth/signup");
    }

    const Login = async () => {
        try {

            if (email === "") toast.error("Enter your email");
            else if (password === "") toast.error("Enter your password");

            const response = await login(email, password);

            if (response.state === 1) {
                localStorage.setItem("token", JSON.stringify(response.user));
                toast.success("Login successful!");
                router.push("/");
            } else {
                toast.error("Check your password!!!");
            }
        } catch (error) {
            console.log("Login failed:", error);
        }
    };

    const emailHandle = (value: string) => {
        setEmail(value);
    }

    const passwordHandle = (value: string) => {
        setPassword(value);
    }

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center justify-center p-4">
            <Header />
            <div className="w-full max-w-md mt-[90px]">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8 transition-all duration-500 hover:shadow-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#296FF9] to-[#59CEFC] py-2 bg-clip-text text-transparent font-[system-ui]">Log In</h2>
                        <p className="text-gray-500 mt-2 font-[system-ui]">Please sign in to continue</p>
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
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => emailHandle(e.target.value)}
                                />
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
                                    placeholder="Enter your password"
                                    required
                                    value={password}
                                    onChange={(e) => passwordHandle(e.target.value)}
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
                            onClick={() => Login()}
                            className="w-full font-[system-ui] bg-gradient-to-r text-white from-[#296FF9] to-[#59CEFC] tex4white py-3 rounded-lg hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                        >
                            Sign In
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

                    <p className="text-center text-sm text-gray-600 font-[system-ui]" onClick={Signup}>
                        Do not have an account?
                        <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 font-[system-ui]">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;