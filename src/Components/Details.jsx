import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { AiFillLike } from "react-icons/ai";
import Swal from "sweetalert2";


const Details = () => {

    const { user } = useContext(AuthContext)

    const reviewDetails = useLoaderData()

    const { _id, name, email, photo, gameTitle, description, rating, published, genres } = reviewDetails;


    const handleWatchList = e => {
        e.preventDefault();
        const userName = user.displayName;
        const userEmail = user.email;
        const detailsCollections = { userName, userEmail, name, email, photo, gameTitle, description, rating, published, genres }
        console.log(detailsCollections);

        fetch(`http://localhost:5000/review/${_id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(detailsCollections)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Wishlist Successfully add to the database!",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={photo}
                    className="w-full md:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{gameTitle}</h1>
                    <p className="py-2">
                        {description}
                    </p>
                    <p className="py-2 font-bold">
                        Rating : {rating}
                    </p>
                    <p className="py-2 font-bold">
                        Published : {published}
                    </p>
                    <p className="py-2 font-bold">
                        Genres : {genres}
                    </p>
                    <p className="py-2 font-bold">
                        Reviewer’s Name : {name}
                    </p>
                    <p className="py-2 font-bold">
                        Reviewer’s Email : {email}
                    </p>
                    {
                        user && <button onClick={handleWatchList} className="btn btn-primary">Add To WatchList <AiFillLike></AiFillLike> </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;