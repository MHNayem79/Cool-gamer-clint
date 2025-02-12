import { useState } from "react";
import Swal from "sweetalert2";


const AddReview = () => {
    const [selected, setSelected] = useState("");
    const handleAddReview=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const gameTitle=form.gameTitle.value;
        const description=form.description.value;
        const rating=form.rating.value;
        const published=form.published.value;
        const genres=form.genres.value;
        const addedReviews={name,email,photo,gameTitle,description,rating,published,genres};
        console.log(addedReviews);

        // send data to the server
        fetch('http://localhost:5000/addReview',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addedReviews)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Successfully add to the database!",
                    icon: "success",
                    draggable: true
                  });
            }
        })
    }
    return (
        <div className="bg-gray-200 m-20">
            <h2 className="text-center text-4xl font-bold mx-auto py-10">Add A Review</h2>
            <form onSubmit={handleAddReview}>
                <div className="flex justify-center gap-10 mx-10 pb-10">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        User Name
                        <input type="text"
                            name="name"
                            className="grow"
                            placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        User Email
                        <input type="text"
                            name="email"
                            className="grow"
                            placeholder="Email" />
                    </label>
                </div>
                <div className="flex justify-center gap-10 mx-10 pb-10">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Game Cover URL
                        <input type="text"
                            className="grow"
                            name="photo"
                            placeholder="Photo URL" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Game Title
                        <input type="text"
                            className="grow"
                            name="gameTitle"
                            placeholder="Game Title" />
                    </label>
                </div>
                <div className="flex justify-center gap-10 mx-10 pb-10">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Review Description
                        <input type="text"
                            className="grow"
                            name="description"
                            placeholder="Review Description" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Rating
                        <input type="text"
                            className="grow"
                            name="rating"
                            placeholder="Rating" />
                    </label>
                </div>
                <div className="flex justify-center items-center gap-10 mx-10 pb-10">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        Publishing year
                        <input type="text"
                            className="grow"
                            name="published"
                            placeholder="Publishing year" />
                    </label>
                    <div className="dropdown md:w-1/2">
                        <label className="input input-bordered flex items-center gap-2 md:w-full">
                            Genres
                            <input value={selected}
                                type="text"
                                placeholder="Genres"
                                readOnly
                                name="genres"
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

export default AddReview;