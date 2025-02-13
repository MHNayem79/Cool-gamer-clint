import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { createUser, googleUser } = useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState([])
    const navigate = useNavigate("/")

    const handleGoogleLogin = e => {
        e.preventDefault()
        googleUser()
            .then(result => {
                console.log(result.user)
                navigate("/")
            })
            .catch(error => {
                console.log("ERROR", error.message)
            })
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Must be at least six charecter!",
            });
            return;
        }

        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

        if (!pattern.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "At least one upper case one lower case and one number!",
            });
            return;
        }




        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Successfully Registered!",
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
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                </div>
                <div className="card bg-base-100 w-full mx-10 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-col gap-2 mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>

                        <p>Already have an account Please <NavLink className="text-red-500" to="/login">Login</NavLink></p>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-sm m-7">Signup With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;