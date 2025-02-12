import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { googleUser } = useContext(AuthContext)
    const { signInUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGoogleLogin = e => {
        e.preventDefault()
        googleUser()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log("ERROR", error.message)
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Successfully logged in!",
                    icon: "success",
                    draggable: true
                });
                navigate("/")
            })
            .catch(error => {
                console.log("ERROR", error.message)
                setError(error.message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control flex flex-col gap-2 mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button onClick={handleGoogleLogin} className="btn btn-sm">Login With Google</button>
                        </div>

                        <p>New To This Website Please <NavLink className="text-red-500" to="/register">Register</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;