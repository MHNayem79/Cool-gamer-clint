import { NavLink } from "react-router-dom";


const Header = () => {

    const link = <div className="space-x-5">
        <NavLink to="/"><a>Home</a></NavLink>
        <NavLink to="/allReviews"><a>All Reviews</a></NavLink>
        <NavLink to="/addReview"><a>Add Review</a></NavLink>
        <NavLink to="/myReviews"><a>My Reviews</a></NavLink>
        <NavLink to="/gameWishlist"><a>Game WishList</a></NavLink>
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
                <NavLink to="/login" className="btn"> <a>Login</a> </NavLink>
                <NavLink to="/register" className="btn"> <a>Register</a> </NavLink>
            </div>
        </div>
    );
};

export default Header;