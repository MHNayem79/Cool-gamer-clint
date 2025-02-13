import banner1 from '../assets/The-Last-of-Us-Part-Two-Banner-1536x864.png'
import banner2 from '../assets/Red-Dead-Redemption-2-PC-review-1024x576.jpg'
import { NavLink, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

const Home = () => {

    const reviews = useLoaderData()
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    return (
        <div className={theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}>
            <div className="flex justify-end p-4">
                <button onClick={toggleTheme} className="px-4 py-2 bg-gray-800 text-white rounded dark:bg-gray-300 dark:text-black">
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/QWH1Bp5/FortNite.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={banner1}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={banner2}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/5hYfkGM9/326d245efb39160ec86f1f48f7808179033b0d1ddef655b85510eb993c1ec1dd-1.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h2 className='font-bold text-4xl text-center mx-auto my-10'>Highest Rated Game</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 mb-10'>
                {
                    reviews.map(review =>
                        <div key={review._id} className="my-10">
                            <div className="card card-side bg-base-100 text-gray-700 shadow-xl">
                                <figure>
                                    <img
                                        className="w-[500px]"
                                        src={review.photo}
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{review.gameTitle}</h2>
                                    <p>Genres : {review.genres}</p>
                                    <p className='text-3xl font-bold'>Ratings : {review.rating}/10</p>
                                    <div className="card-actions justify-end">
                                        <NavLink to={`/review/${review._id}`} className="btn btn-primary">Explore Details</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <h2 className='font-bold text-4xl text-center mx-auto my-10'>Most Rated Gaming Overview</h2>

            <iframe className='mx-auto w-full my-10' width="1280" height="720" src="https://www.youtube.com/embed/c0i88t0Kacs?si=I6pPkjmL_aCgMAl9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <h2 className='font-bold text-4xl text-center mx-auto mt-20 my-10'>About Our Platform</h2>


            <p className='lg:mx-40 text-xl text-center font-bold py-20'>
                Welcome to Chill Gamers, a dedicated platform for gamers who love to explore and share in-depth game reviews. Our mission is to create a space where players can express their honest opinions, provide detailed insights, and help others discover the best gaming experiences.
                <br />
                What We Offer: <br />
                🎮 Authentic Game Reviews – Read and write comprehensive reviews on your favorite games. <br />
                ⭐ Community Ratings – See how other gamers rate and review games before you decide to play. <br />
                🔍 Easy Discovery – Find games based on genre, rating, and user recommendations. <br />
                <Fade>
                📝 Share Your Experience – Whether you're a casual player or a hardcore gamer, your voice matters!
                </Fade>
                <Typewriter words={['Join us in building a community-driven platform where every review helps shape a better gaming world!']}></Typewriter>
            </p>

        </div>


    );
};

export default Home;