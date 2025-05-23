import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user,loading}=UseAuth();

    const location =useLocation()

    if(loading){

        return <><span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-xl"></span></>
    }
    if(user){
        return children;
    }

    return  <Navigate state={location?.pathname} to='/login' />
};

export default PrivateRoute;