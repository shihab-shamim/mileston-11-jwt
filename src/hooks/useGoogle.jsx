import React from 'react';
import UseAuth from './UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const useGoogle = () => {

    const navigate=useNavigate()
    const {googleLogIn}=UseAuth()
     const handleGoogle=(path)=>{
        googleLogIn()
        .then(result=>{
            console.log(result.user);
            if(result.user){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log in success",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(path)
            }
        })
        .catch(error=>{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
              });
        })
    
    
    }
    return handleGoogle;
};

export default useGoogle;