import axios from "axios";

export const signUp = async (email: string, firstname: string, lastname: string, password: string) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`, { email, firstname, lastname, password });
    return response.data;
}