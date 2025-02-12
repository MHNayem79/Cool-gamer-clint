import { NavLink, useLoaderData } from "react-router-dom";

const AllReviews = () => {
    const reviews = useLoaderData();
    return (
        <div>
            {
                reviews.map(review =>
                    <div key={review._id} className="my-10">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    className="w-[500px]"
                                    src={review.photo}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{review.gameTitle}</h2>
                                <p>Genres : {review.genres}</p>
                                <p>Published : {review.published}</p>
                                <div className="card-actions justify-end">
                                    <NavLink to={`/review/${review._id}`} className="btn btn-primary">Explore Details</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllReviews;