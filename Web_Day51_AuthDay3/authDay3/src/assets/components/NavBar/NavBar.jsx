import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signIn">Log In</Link></li>
        <li><Link to="/signUp">Sign Up</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        
        {user && <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/history">History</Link></li>
            </>
        }
        
    </>

    console.log(user);

    const handleLogOut = () => {
        logOut().then(() => {
            console.log('Sign-out successful.');
          }).catch((error) => {
            console.log('An error happened.', error);
          });
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Auth Day 3</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <p>{user.email}</p>
                    }
                    {
                        user ? <button onClick={handleLogOut} className="btn">Sign Out</button> : <button className="btn"><Link to="/signIn">Sign In</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;