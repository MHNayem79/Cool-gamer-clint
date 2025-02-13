import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const UpdateReview = () => {
    const data=useLoaderData();
    const {_id,rating,published,photo,name,genres,gameTitle,email,description}=data
    const { user } = useContext(AuthContext)
    const [selected, setSelected] = useState("");
    const handleUpdateReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const gameTitle = form.gameTitle.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const published = form.published.value;
        const genres = form.genres.value;
        const UpdatedReviews = { name, email, photo, gameTitle, description, rating, published, genres };
        console.log(UpdatedReviews);

        // send data to the server
        fetch(`https://chill-gamer-server-tawny.vercel.app/updateReview/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatedReviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: "Coffee Updated Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div className="bg-gray-200 md:m-20">
            <h2 className="text-center text-4xl font-bold mx-auto py-10">Update Review</h2>
            <form onSubmit={handleUpdateReview}>
                <div className="md:flex justify-center gap-10 mx-10 pb-10">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        User Name
                        <input type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            readOnly
                            className="grow"
                            placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        User Email
                        <input type="text"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            className="grow"
                            placeholder="Email" />
                    </label>
                </div>
                <div className="md:flex justify-center gap-10 mx-10 pb-10">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Game Cover URL
                        <input type="text"
                            className="grow"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Photo URL" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Game Title
                        <input type="text"
                            className="grow"
                            name="gameTitle"
                            defaultValue={gameTitle}
                            placeholder="Game Title" />
                    </label>
                </div>
                <div className="md:flex justify-center gap-10 mx-10 pb-10">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Review Description
                        <input type="text"
                            className="grow"
                            name="description"
                            defaultValue={description}
                            placeholder="Review Description" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Rating
                        <input type="text"
                            className="grow"
                            name="rating"
                            defaultValue={rating}
                            placeholder="Rating" />
                    </label>
                </div>
                <div className="md:flex justify-center items-center gap-10 mx-10 pb-10">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Publishing year
                        <input type="text"
                            className="grow"
                            name="published"
                            defaultValue={published}
                            placeholder="Publishing year" />
                    </label>
                    <div className="dropdown md:w-1/2">
                        <label className="input input-bordered flex items-center gap-2 md:w-full">
                            Genres
                            <input
                                type="text"
                                placeholder="Genres"
                                name="genres"
                                defaultValue={genres}
                                className="grow" />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-1 bg-base-100 shadow w-32">
                            {["Adventure", "Action", "RPG"].map((item) => (
                                <li key={item}>
                                    <a onClick={() => setSelected(item)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="text-center mx-10 pb-10">
                    <button className="btn btn-block bg-orange-400">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;