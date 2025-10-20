import axios from "axios"

export const axiosInstance=axios.create({
    baseURL:"http://localhost:5000/api",
    withCredentials:true,                   //enable cookie transfer from back->front or we can say to receive jwt cookie from server
})