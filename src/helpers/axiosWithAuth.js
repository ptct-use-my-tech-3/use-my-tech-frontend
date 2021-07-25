import axios from "axios";

export const axiosWithAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://reqres.in/api',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        }
    })
}