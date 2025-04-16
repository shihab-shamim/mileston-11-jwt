import { Navigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user,loading}=UseAuth();

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

    return  <Navigate to='/login' />
};

export default PrivateRoute;