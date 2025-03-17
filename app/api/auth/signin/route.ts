import axios from "axios";
export const login = async (email: string, password: string) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signin`, { email, password });
    return response.data;
}

export const signOut = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signout`);
    return response.data;
}

export const googleLogin = async (token: string) => {
    console.log(token)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/googleLogin`, { token });
    return response.data;
}