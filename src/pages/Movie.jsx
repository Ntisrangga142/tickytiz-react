import {useState, useEffect} from 'react'
import axios from 'axios'

import '../styles/movie.css'
import '../styles/global.css'

function Movie() {

    const API_KEY = 'dfcf99a36e085314a7ec608c88ca14ed';

    /* Fetch Popular Movies */
    const getPopularMovies = async (apiKey) => {
    const storageMovies = localStorage.getItem("popularMovies");

    if (storageMovies) {
        return JSON.parse(storageMovies);
    }

    try {
        const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );

        const dataMovies = response.data.results;
        localStorage.setItem("popularMovies", JSON.stringify(dataMovies));

        return dataMovies;
    } catch (error) {
        console.error("Error Fetching Movies : ", error);
    }
    };

    /* Fetch genreMovies */
    const getGenre = async (apiKey) => {
    const storageMovies = localStorage.getItem("genreMovies");

    if (storageMovies) {
        return JSON.parse(storageMovies);
    }

    try {
        const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );

        const dataGenreMovies = response.data.genres;
        localStorage.setItem("genreMovies", JSON.stringify(dataGenreMovies));

        return dataGenreMovies;
    } catch (error) {
        console.error("Error Fetching Movies : ", error);
    }
    };

    const MovieList = ({ apiKey }) => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const dataMovies = await getPopularMovies(apiKey);
        const dataGenre = await getGenre(apiKey);
        setMovies(dataMovies.slice(0, 4));
        setGenres(dataGenre);
        };

        fetchData();
    }, [apiKey]);

    const getGenreNames = (ids) => {
        return ids
        .map((id) => genres.find((genre) => genre.id === id)?.name)
        .filter(Boolean)
        .slice(0, 3);
    };

    return (
        <div className="movies-card">
        {movies.map((movie) => (
            <div key={movie.id}>
            <div>
                <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                />
                <div className="background-hover"></div>
                <div>
                <a href={`./details.html?id=${movie.id}`}>Details</a>
                <a href="#">Buy Ticket</a>
                </div>
            </div>
            <h3>{movie.title}</h3>
            <ul>
                {getGenreNames(movie.genre_ids).map((genreName, index) => (
                <li key={index}>{genreName}</li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    );
    };

  return (
   <>
   <header>
        <div><img src="/assets/imgs/logo/logo-1.png" alt="logo.png" /></div>

        <nav>
            <div><a href="../index.html">Home</a></div>
            <div><a href="../pages/movie.html">Movie</a></div>
            <div><a href="#">Buy Ticket</a></div>
        </nav>

        <div>   
            <a href="./login.html">Sign In</a>
            <a href="./signUp.html">Sign Up</a>
        </div>

        <div className="dropdown">
            <button>
                <img src="/assets/imgs/icon/bars-solid-full.svg" alt="icon" />
            </button>
        </div>
    </header>
    <nav className="dropdown-menu">
        <div><a href="../index.html">Home</a></div>
        <div><a href="../pages/movie.html">Movie</a></div>
        <div><a href="#">Buy Ticket</a></div>
        <div><a href="../pages/login.html">Sign In</a></div>
        <div><a href="../pages/signUp.html">Sign Up</a></div>

    </nav>

    <section className="hero">
        <h3>LIST MOVIE OF THE WEEK</h3>
        <h1>Experience the Magic of Cinema: Book Your Tickets Today</h1>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>

    <main>
        <div>
            <div>
                <p>Cari Event</p>
                <div>
                    <input type="text" name="search" id="search" className="search" placeholder="New Born Expert" />
                    <img src="/assets/imgs/icon/search1.png" alt="icon-search.png" />
                </div>
            </div>

            <div>
                <p>Filter</p>
                <ul>
                    <li><a href="">Thriller</a></li>
                    <li><a href="">Horror</a></li>
                    <li><a href="">Romantic</a></li>
                    <li><a href="">Adventure</a></li>
                    <li><a href="">Sci-fi</a></li>
                </ul>
            </div>
        </div>

        <div>
            <MovieList apiKey={API_KEY} />
            <MovieList apiKey={API_KEY} />
            <MovieList apiKey={API_KEY} />
            <MovieList apiKey={API_KEY} />
        </div>

        <div>
            <ul>
                <li><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href=""><img src="../assets/imgs/home/icon/arrow-right.png" alt="" /></a></li>
            </ul>
        </div>
    </main>

    <section className="subscribe">
        <div>
            <h1>Subscribe to our newsletter</h1>
            <div>
                <input type="text" name="firstName" id="firstName" placeholder="First name" />
                <input type="email" name="email" id="email" placeholder="Email address" />
                <button type="submit">Subscribe Now</button>
            </div>
        </div>
    </section>

    <footer>
        <div>
            <div>
                <img src="/assets/imgs/logo/logo-1.png" alt="logo-1.png"/>
                <p>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
            </div>

            <div>
                <h2>Explore</h2>
                <ul>
                    <li><a href="">Cinemas</a></li>
                    <li><a href="">Movies List</a></li>
                    <li><a href="">My Ticket</a></li>
                    <li><a href="">Notification</a></li>
                </ul>
            </div>
        </div>

        <div>
            <div>
                <h2>Explore</h2>
                <ul>
                    <li><img src="/assets/imgs/home/sponsor/sp1.png" alt="sponsor-1.png"/></li>
                    <li><img src="/assets/imgs/home/sponsor/sp2.png" alt="sponsor-2.png"/></li>
                    <li><img src="/assets/imgs/home/sponsor/sp3.png" alt="sponsor-3.png"/></li>
                </ul>
            </div>
            <div>
                <h2>Explore</h2>
                <ul>
                    <li><a href=""><img src="/assets/imgs/home/feather/sp-facebook.png" alt="icon-fb.png" />Tickitz Cinema id</a></li>
                    <li><a href=""><img src="/assets/imgs/home/feather/sp-ig.png" alt="icon-ig.png" />tickitz.id</a></li>
                    <li><a href=""><img src="/assets/imgs/home/feather/sp-twitter.png" alt="icon-twitter.png" />tickitz.id</a></li>
                    <li><a href=""><img src="/assets/imgs/home/feather/sp-yt.png" alt="icon-yt.png" />Tickitz Cinema id</a></li>
                </ul>
            </div>
        </div>

        <div><p>© 2020 Tickitz. All Rights Reserved.</p></div>
            
    </footer> 
   </>
  )
}

export default Movie