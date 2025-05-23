import { Link } from "react-router-dom";
import logo  from '../assets/logo.svg';
import UseAuth from "../hooks/UseAuth";


const Navbar = () => {
  const {logOut,user}=UseAuth()
    const navmenu =<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/service">Service</Link></li>
    {user && <li><Link to="/bookings">Booking</Link></li>}
    {user?<li><button onClick={()=>logOut()}>Log Out</button></li>:<li><Link to='/login'>Log In</Link></li>}
    {/* <li><Link to="/">Home</Link></li> */}
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navmenu}

      </ul>

    </div>
    <Link className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navmenu}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
    );
};

export default Navbar;