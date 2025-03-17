import { googleLogin } from "@/app/api/auth/signin/route";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../Loading";

declare global {
    interface Window {
        google?: any
    }
}

interface GoogleCredentialResponse {
    credential: string,
    select_by?: string
}

const Google: React.FC = () => {
    const router = useRouter();
    const googleSignInRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleCredentialResponse = async (response: GoogleCredentialResponse) => {
        setLoading(true);
        try {
            const token = await googleLogin(response.credential);

            if (token.state === 1) {

                localStorage.setItem("token", JSON.stringify(token.user));

                toast.success("Login successful!");
                
                router.push("/");
            } else {
                toast.error("Check your password!!!");
            }
        } catch (error) {
            console.error("Google login failed:", error);
            toast.error("Login failed, please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {

            if (window.google?.accounts) {
                window.google.accounts.id.initialize({
                    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
                    callback: handleCredentialResponse,
                });

                if (googleSignInRef.current) {
                    window.google.accounts.id.renderButton(googleSignInRef.current, {
                        theme: "outline",
                        size: "large",
                    });
                }
            } else {
                console.error("Google accounts library failed to load.");
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [handleCredentialResponse]);

    if (loading) return <Loading />;

    return <div ref={googleSignInRef}></div>;
};

export default Google;