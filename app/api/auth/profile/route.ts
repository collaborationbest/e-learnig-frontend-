import axios from "axios";

export const saveUserInformation = async (id: number, firstname: string, lastname: string, password: string) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/updatepassword`, { id, firstname, lastname, password });
    return response.data;
}