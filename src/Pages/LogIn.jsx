
import React from 'react';
import { Lock } from 'lucide-react';
import login from "../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from '../hooks/UseAuth';
import Swal from 'sweetalert2';
import useGoogle from '../hooks/useGoogle';
import axios from 'axios';

function Login() {
  const {logIn}=UseAuth()
  const google=useGoogle()
  const location=useLocation()
  const path=location?.state?location?.state:"/"
  const navigate=useNavigate()
  


    const handleLogin =(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        logIn(email,password)
        .then(result=>{
          const user={email}
          if(result.user){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Log In success",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(path) 
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
            .then(res=>{
              if(res.data.success){
                navigate(path)
              }
            })

          }
        })
        .catch(error=>{

          // console.log(error.message.split('/')[1].split(')')[0])
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${error.message.split('/')[1].split(')')[0]}`,
            showConfirmButton: false,
            timer: 1500
          });
        })
    }
    
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center p-8">
          <div className="relative">
            {/* Red Circle Background */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-600/10 rounded-full" />
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-red-600/10 rounded-full" />
            
            {/* Lock Icon */}
            <div className="absolute -top-6 -right-6 bg-red-600 rounded-full p-3">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <img src={login} alt="" />

            {/* Main Content */}
            
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
          
          <form  onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input 
              name='email'
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
              name='password'
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8">
            <p className="text-center text-gray-600 mb-4">Or Sign In with</p>
            <div className="flex justify-center gap-4">
              {/* Social Login Buttons */}
              <button className="p-3 rounded-full border hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-full border hover:bg-gray-50 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-6 h-6" />
              </button>
              <button onClick={()=>google(path)} className="p-3 rounded-full border hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
              </button>
            </div>
          </div>

          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" href="#" className="text-red-600 hover:text-red-700 font-medium">
              Sign Up
            </ Link >
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;