import { useLoaderData } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";



const CheckOut = () => {
    const {user}=UseAuth()
    const {title,_id,price,img}=useLoaderData()
    const name= user?.displayName.split(" ")
    const firstname=name?.[0]
    const lastname=name?.pop()
    const date = new Date().toLocaleDateString();
   

    const handleCheckOut =async(e)=>{
        e.preventDefault();

      
        const phone=e.target.phone.value
        const email=e.target.email.value
        const message=e.target.message.value

       const order ={
        name:user?.displayName,email,date,service:_id,price,phone,message,img,title

       }
       try {
        const response = await fetch("http://localhost:5000/services", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
        });
    
        const data = await response.json();
        // console.log("Server Response:", data);
        
        if(data.insertedId){
             Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Booking Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
        }
        
      } catch (error) {
        console.log("Error posting order:", error);
         Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
      }

    }
 


    return (
        <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <div 
          className="relative h-[200px] bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=2070")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-8">
            <h1 className="text-white text-4xl font-bold">Check Out</h1>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-white">Home</span>
              <span className="text-white">/</span>
              <span className="text-red-500">Checkout</span>
            </div>
          </div>
        </div>
  
        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <form onSubmit={handleCheckOut} className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <input
                  type="text"
                  readOnly
                  required
                  name="firstName"
                  defaultValue={firstname}

                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-red-500"
                />
              </div>
  
              {/* Last Name */}
              <div>
                <input
                defaultValue={lastname}
                readOnly
                type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-red-500"
                />
              </div>
  
              {/* Phone */}
              <div>
                <input
                // defaultValue={user?.phoneNumber?user.phoneNumber:"+000 00 000000"}
                  required
                  type="tel"
                  name="phone"
                  placeholder="+88000 00 000 000"
                  className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-red-500"
                />
              </div>
  
              {/* Email */}
              <div>
                <input
                  required
                  defaultValue={user?.email}
                  name="email"
                  readOnly

                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-red-500"
                />
              </div>
  
              {/* Message */}
              <div className="md:col-span-2">
                <textarea
                required
                name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-red-500 resize-none"
                ></textarea>
              </div>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-colors"
            >
              Order Confirm
            </button>
          </form>
        </div>
      </div>
    );
};

export default CheckOut;