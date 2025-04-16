import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, Trash2 } from 'lucide-react';
import UseAuth from '../hooks/UseAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Booking() {
    const {user}=UseAuth()
    const [cartItems,setCartItems]=useState([])
    const [reload,setReload]=useState(true)
  useEffect(()=>{
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setCartItems(data))

  },[user,reload])

  const handleBookingDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "Delete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/booking/${id}`)
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Delete Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      setReload(!reload)
                }
            })
        }
      });
    
  }

  const handleBookingDeletes =()=>{
    const ids=cartItems.map(item=>item._id)
    Swal.fire({
        title: "Are you sure?",
        text: "Delete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/booking`,{
                method:"DELETE",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(ids)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Delete Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      setReload(!reload)
                }
            })
        }
      });
   
  }
  const handleUpdate=(id)=>{
    const status={status:"confirm"}
    fetch(`http://localhost:5000/booking/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(status)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount > 0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Confirm Successfully`,
                showConfirmButton: false,
                timer: 1500
              });
              setReload(!reload)
        }

    })

  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Banner */}
      <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920&h=400)' }}>
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <h1 className="text-white text-2xl font-semibold">Cart Details</h1>
            <div className="flex items-center text-gray-300 text-sm mt-2">
              <a href="#" className="hover:text-white">Home</a>
              <span className="mx-2">—</span>
              <span>Product Details</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {cartItems.map((item, index) => (
            <div key={item.id} className={`flex items-center p-4 ${index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <X onClick={()=>handleBookingDelete(item._id)} size={20} className="text-gray-400 cursor-pointer" />
              </button>
              
              <div className="ml-4 w-20 h-20 rounded-lg overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="ml-4 flex-grow">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <div className="mt-1 text-sm text-gray-500">
                  <p>Color : {item.color}</p>
                  <p>Size: {item.size}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-medium text-gray-900">${item.price}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
                {
                    item?.status?<span className="inline-block cursor-pointer mt-1 px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                    Confirmed
                  </span>:<span onClick={()=>handleUpdate(item?._id)} className="inline-block cursor-pointer mt-1 px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">
                  Padding
                </span>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex items-center justify-between">
          <Link to="/" className="flex  cursor-pointer items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
          
          { cartItems.length >0 && <button onClick={handleBookingDeletes} className="flex cursor-pointer items-center text-red-600 hover:text-red-700">
            <Trash2 size={20} className="mr-2" />
            Clear Shopping Cart
          </button>}
        </div>
      </div>
    </div>
  );
}

export default Booking;