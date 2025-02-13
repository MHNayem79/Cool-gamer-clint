import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyReviews = () => {
    const loadedReviews = useLoaderData();
    const [reviews, setReviews] = useState(loadedReviews);



    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log("delete Confirm")

                fetch(`https://chill-gamer-server-tawny.vercel.app/myReviews/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                            });
                            const remaining = reviews.filter(review => review._id !== _id)
                            setReviews(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="my-10 space-y-10">
            {
                reviews.map(singleWishlist =>
                    <div key={singleWishlist._id} className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Rated by</th>
                                    <th>GameTitle </th>
                                    <th>description </th>
                                    <th>Rating,Published,Genres</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={singleWishlist.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{singleWishlist.name}</div>
                                                <div className="text-sm opacity-50">{singleWishlist.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleWishlist.gameTitle}
                                    </td>
                                    <td>
                                        {singleWishlist.description}
                                    </td>
                                    <td>
                                        Ratings :  {singleWishlist.rating}
                                        <br />
                                        Published : {singleWishlist.published}
                                        <br />
                                        Genres : {singleWishlist.genres}

                                    </td>
                                    <div className="join join-vertical">
                                        <Link to={`/updateReview/${singleWishlist._id}`}><button className="btn join-item">Update</button></Link>
                                        <button onClick={() => handleDelete(singleWishlist._id)} className="btn join-item">Delete</button>

                                    </div>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                )
            }
        </div>
    );
};

export default MyReviews;