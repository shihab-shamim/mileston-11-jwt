import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../fisebase/firebase.config";
import Swal from "sweetalert2";
const google = new GoogleAuthProvider();

export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null);
 const [loading,setLoading]=useState(true)


 const createUser=(email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
 }

 const logIn =(email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)

 }
 const googleLogIn=()=>{
    setLoading(true)
     return signInWithPopup(auth,google)
 }

 const handleGoogle=()=>{
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

const logOut =()=>{
    signOut(auth)
    .then(()=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Log Out Successfully`,
            showConfirmButton: false,
            timer: 1500
          });

    })
    .catch(error=>console.log(error))
}

 useEffect(()=>{

    const unSbcribs =  onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })
    return(()=>{
        return unSbcribs()
    })
 },[])


    const authInfo={
        user,loading,createUser,logIn,handleGoogle,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;