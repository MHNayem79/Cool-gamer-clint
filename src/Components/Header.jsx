import { useContext } from "react";
import { NavLink, useLoaderData, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Header = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext)
    const data = useLoaderData()
    console.log(data)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("Sign Out Successfully")
                navigate("/")
            })
            .catch(error => {
                console.log("ERROR", error.message)
            })
    }

    const link = <div className="space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allReviews">All Reviews</NavLink>
        {
            user && <>
                <NavLink to="/addReview">Add Review</NavLink>
                <NavLink to={`/myReviews/${user?.email}`}>My Reviews</NavLink>
                <NavLink to={`/gameWishlist/${user?.email}`}>Game WishList</NavLink>
            </>
        }
    </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Chill Gamer</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <img className="mr-3 w-[50px] rounded-full" title={user?.email} src={user?.photoURL} alt="photo" />
                            <button onClick={handleSignOut} className="btn">SignOut</button>
                        </>
                        :
                        <>
                            <NavLink to="/login" className="btn"> <button>login</button> </NavLink>
                            <NavLink to="/register" className="btn"> <button>Register</button> </NavLink>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;