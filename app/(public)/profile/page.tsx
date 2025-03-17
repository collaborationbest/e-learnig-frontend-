"use client"
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import { saveUserInformation } from "@/app/api/auth/profile/route";
import { useRouter } from "next/navigation";

const Profile = () => {

    let tokenString;
    let token = null;

    const [isChangePassword, setIsChangePassword] = useState<boolean>(false);

    if (typeof window !== "undefined") {
        tokenString = localStorage.getItem("token") || "";
        try {
            token = tokenString ? JSON.parse(tokenString) : null;
        } catch (error) {
            console.error("Failed to parse token from localStorage:", error);
        }
    }

    const userEmail = token && token.email ? token.email : "";
    const password = token && token.password ? token.password : "";

    const [newPassword, setNewPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");
    const [newUsername, setNewusername] = useState<string>(
        token && (token.firstname || token.lastname) ?
            `${token.firstname || ""} ${token.lastname || ""}`.trim() : ""
    );
    const router = useRouter();

    const handleNewPassword = (value: string) => {
        setNewPassword(value);
    }

    const handleConfirm = (value: string) => {
        setConfirm(value);
    }

    const handleNewUsername = (value: string) => {
        setNewusername(value);
    }

    const InformationSave = async () => {
        if (isChangePassword && newPassword === "") toast.error("Enter your new password!!!");
        else if (isChangePassword && newPassword !== confirm) toast.error("Confirm your password!!!");
        else if (isChangePassword && newPassword.length < 8) toast.error("Password must be at least 8 characters long!");
        else if (newUsername === "") toast.error("Enter your username!!!");
        else {

            const [firstname, lastname] = newUsername.split(" ");
            const response = await saveUserInformation(token.ID, firstname, lastname, newPassword);

            if (!response) toast.error("Password Change Failed!!!");
            else {
                localStorage.removeItem("token");
                localStorage.setItem("token", JSON.stringify(response.user));
                toast.success("Success!!!");
                setNewPassword("");
                setConfirm("");

                router.push("/profile");
            }
        }
    }

    const landingPageDirectoy = () => {
        router.push("/");
    }

    return (
        <div>
            <Header />
            <section className="w-full flex justify-center items-center">
                <div className="max-w-7xl w-full flex flex-col justify-center items-center mt-[100px] px-2">
                    <div className="w-full flex justify-start items-center border-b md:pb-16 pb-8">
                        <h1 className="lg:text-5xl md:text-[2rem] text-[1.6rem] font-[system-ui] font-[700] text-center text-[#001F3F]">Account Setting</h1>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start bg-gray-100 mt-8 md:p-8 p-4">
                        <div className="space-y-6 lg:w-[40%] w-full">
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
                                        value={userEmail}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-gray-700 text-sm font-medium mb-2 font-[system-ui]" htmlFor="email">
                                    Username
                                </label>
                                <div className="relative">
                                    <i data-lucide="mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                    <input
                                        className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                        type="text"
                                        id="username"
                                        placeholder="Enter your username"
                                        required
                                        value={newUsername}
                                        onChange={(e) => handleNewUsername(e.target.value)}
                                    />
                                </div>
                            </div>


                            {
                                isChangePassword
                                    ? <>
                                        <div className="relative">
                                            <label className="block font-[system-ui] text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                                                New Password
                                            </label>
                                            <div className="relative">
                                                <i data-lucide="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                                <input
                                                    className="w-full font-[system-ui] pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                                    type="password"
                                                    id="newpassword"
                                                    placeholder="Enter your new password"
                                                    required
                                                    value={newPassword}
                                                    onChange={(e) => handleNewPassword(e.target.value)}
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
                                    </>
                                    : null
                            }

                            <div className="w-full flex justify-center items-center md:flex-row flex-col md:gap-2 md:space-y-0 space-y-6">
                                <button
                                    type="button"
                                    onClick={() => setIsChangePassword(!isChangePassword)}
                                    className="w-full font-[system-ui] bg-gradient-to-r text-white from-[#296FF9] to-[#59CEFC] tex4white py-3 rounded-lg hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                                >
                                    Change Password
                                </button>
                                <button
                                    type="button"
                                    onClick={() => InformationSave()}
                                    className="w-full font-[system-ui] bg-gradient-to-r text-white from-[#296FF9] to-[#59CEFC] tex4white py-3 rounded-lg hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                                >
                                    Save
                                </button>
                            </div>
                            <button
                                type="submit"
                                onClick={() => landingPageDirectoy()}
                                className="w-full font-[system-ui] bg-gradient-to-r text-white from-[#296FF9] to-[#59CEFC] tex4white py-3 rounded-lg hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Profile;