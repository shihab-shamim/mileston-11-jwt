import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut}=UseAuth()
  const navigate=useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
        },err=>{
            console.log("error the brak",err.response);
            if(err.response.status === 401){
                console.log("incheptor out");
                logOut()
                navigate('/login')


            }
        })
    })


    return axiosSecure
};

export default useAxiosSecure;