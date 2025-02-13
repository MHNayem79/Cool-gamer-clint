import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const AllReviews = () => {
    const reviews = useLoaderData();
    const [sortBy, setSortBy] = useState(""); // Sorting state
    const [filterGenre, setFilterGenre] = useState(""); // Filtering state

    // Extract unique genres for filter dropdown
    const genresList = [...new Set(reviews.map(review => review.genres))];

    // Sorting function
    const sortedReviews = [...reviews].sort((a, b) => {
        if (sortBy === "rating-asc") return a.rating - b.rating;
        if (sortBy === "rating-desc") return b.rating - a.rating;
        if (sortBy === "year-asc") return a.published - b.published;
        if (sortBy === "year-desc") return b.published - a.published;
        return 0;
    });

    // Filtering function
    const filteredReviews = filterGenre
        ? sortedReviews.filter(review => review.genres === filterGenre)
        : sortedReviews;

    return (
        <div>
            {/* Sorting and Filtering Dropdowns */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <label className="mr-2 font-bold">Sort By:</label>
                    <select
                        className="select select-bordered"
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Default</option>
                        <option value="rating-asc">Rating (Low to High)</option>
                        <option value="rating-desc">Rating (High to Low)</option>
                        <option value="year-asc">Year (Old to New)</option>
                        <option value="year-desc">Year (New to Old)</option>
                    </select>
                </div>

                <div>
                    <label className="mr-2 font-bold">Filter by Genre:</label>
                    <select
                        className="select select-bordered"
                        onChange={(e) => setFilterGenre(e.target.value)}
                    >
                        <option value="">All Genres</option>
                        {genresList.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Reviews Display */}
            {filteredReviews.map(review => (
                <div key={review._id} className="my-10">
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                                className="w-[500px]"
                                src={review.photo}
                                alt="Game" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{review.gameTitle}</h2>
                            <p>Genres: {review.genres}</p>
                            <p>Published: {review.published}</p>
                            <p>Rating: {review.rating}</p>
                            <div className="card-actions justify-end">
                                <NavLink to={`/review/${review._id}`} className="btn btn-primary">
                                    Explore Details
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllReviews;
