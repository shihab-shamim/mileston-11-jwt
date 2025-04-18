
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import signup from "../assets/images/login/login.svg"
import  { AuthContext } from '../provider/AuthProvider';
import UseAuth from '../hooks/UseAuth';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import useGoogle from '../hooks/useGoogle';

function Signup() {
    const {createUser}=UseAuth();
    const google=useGoogle()
  
   


    const handleSignUp =(e)=>{

      e.preventDefault()
      const name =e.target.name.value;
      const email =e.target.email.value;
      const password =e.target.password.value;
      const confrimPassword =e.target.confrimPassword.value;

      if(password !== confrimPassword){
         Swal.fire({
          position: "top-end",
          icon: "error",
          title: `password did not match`,
          showConfirmButton: false,
          timer: 1500
        });
      
        return;

      }

       createUser(email,password)
       .then((result)=>{
        if(result.user){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `user create successfully`,
            showConfirmButton: false,
            timer: 1500
          });
        
        }
        updateProfile(result.user, {
          displayName: name, photoURL: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
       })
       .catch((error)=>{
        console.log(error.message.split('/')[1].split(')')[0]);
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
            <img src={signup} alt="" />

            
            {/* Lock Icon */}
            <div className="absolute -top-6 -right-6 bg-red-600 rounded-full p-3">
              <Lock className="w-6 h-6 text-white" />
            </div>

            {/* Main Content */}
            
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>
          
          <form  onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
              name='name'
              
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
              />
            </div>

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
                placeholder="Create password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
              name='confrimPassword'
              
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8">
            <p className="text-center text-gray-600 mb-4">Or Sign Up with</p>
            <div className="flex justify-center gap-4">
              {/* Social Sign Up Buttons */}
              <button className="p-3 rounded-full border hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-full border hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475700/linkedin-color.svg" alt="LinkedIn" className="w-6 h-6" />
              </button>
              <button onClick={()=>google()} className="p-3 rounded-full border hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
              </button>
            </div>
          </div>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{' '}
            <Link  to="/login" className="text-red-600 hover:text-red-700 font-medium">
              Login
            </Link >
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;