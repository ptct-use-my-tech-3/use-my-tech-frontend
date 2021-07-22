import axios from "axios";

export const axiosWithAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: '',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        }
    })
}