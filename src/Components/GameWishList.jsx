import { useLoaderData } from "react-router-dom";


const GameWishList = () => {
    const Wishlist = useLoaderData();
    return (
        <div className="my-10 space-y-10">
            {
                Wishlist.map(singleWishlist =>
                    <div key={singleWishlist._id} className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Added By</th>
                                    <th>Rated by</th>
                                    <th>GameTitle & description</th>
                                    <th>Rating,Published,Genres</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <p>{singleWishlist.userName}</p>
                                        <p>{singleWishlist.userEmail}</p>
                                    </td>
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
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{singleWishlist.description}</span>
                                    </td>
                                    <td>
                                        Ratings :  {singleWishlist.rating}
                                        <br />
                                        Published : {singleWishlist.published}
                                        <br />
                                        Genres : {singleWishlist.genres}

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                )
            }
        </div>
    );
};

export default GameWishList;