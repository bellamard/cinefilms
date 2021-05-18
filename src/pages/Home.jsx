import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { fetchMovies, fetchGenre, fetchTopratedMovie, numberpagetop, numberpagegenre, fetchMovieByGenre } from '../services/myservices';
import { Link } from 'react-router-dom';




function Home(props) {

    const [slideMovies, setSlideMovies] = useState([]);
    const [genre, setGenre] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [numberPages, setnumberPages] = useState(0);
    const [titleMovie, setTitleMovie] = useState('TOP Films');
    const [genreCode, setGenreCode] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            setSlideMovies(await fetchMovies());
            setGenre(await fetchGenre());
            setTopRated(await fetchTopratedMovie(currentPage));
            setnumberPages(await numberpagetop());
        }
        fetchAPI();

    }, []);

    const incrementPageNumber = async () => {
        if (currentPage < numberPages) {
            setcurrentPage(currentPage + 1)
            if (titleMovie === 'TOP Films') {
                setTopRated(await fetchTopratedMovie(currentPage));
            } else {
                setTopRated(await fetchMovieByGenre(genreCode, currentPage));
                console.log(topRated);
            }


        }
    }

    const decrementPageNumber = async () => {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1);
            if (titleMovie === 'TOP Films') {
                setTopRated(await fetchTopratedMovie(currentPage));
            } else {
                setTopRated(await fetchMovieByGenre(genreCode, currentPage));
                console.log(topRated);
            }

        }
    }

    const setSliderContent = slideMovies.slice(5, 10).map((item, index) => {
        return (

            <Carousel.Item interval={5000} key={index}>
                <img
                    className="d-block imgslider"
                    src={item.backPoster}
                    alt={item.title}
                />
                <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.overview.slice(0, 150)}</p>
                </Carousel.Caption>
            </Carousel.Item>

        )

    })

    const setCardContent = topRated.map((item, index) => {
        return (
            <Link to={`detail/${item.id}`} className="cardbox text-decoration-none">
                <div className="card" key={index}>

                    <img src={item.backPoster} alt={item.title} className="cardImg" />
                    <h3 className='p-1 titlecard'>{item.title}</h3>
                    <div className="descriptions">
                        <h3>{item.title}</h3>
                        <p>
                            {item.overview}
                        </p>
                    </div>

                </div>
            </Link>


        )
    });
    const handleGenreClick = async (genreId, genreName) => {
        setTopRated(await fetchMovieByGenre(genreId, 1));
        setTitleMovie(genreName);
        setnumberPages(await numberpagegenre(genreId));
        setGenreCode(genreId);
        setcurrentPage(1);

    };
    const setGenreContent = genre.map((item, index) => {
        return (
            <li className="list-inline-item my-1" key={index}>
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => {
                        handleGenreClick(item.id, item.name);
                    }}
                >
                    {item.name}
                </button>
            </li>
        )
    })





    return (
        <div>

            <Carousel fade={true}>
                {setSliderContent}

            </Carousel>
            <ul className='my-2'>
                {setGenreContent}
            </ul>
            <h3 className='text-white mx-5'>{titleMovie}</h3>
            <div className="listresearch px-5">
                {setCardContent}
            </div>


            <div className='paging'>
                <button onClick={decrementPageNumber} className='btn btn-outline-info mx-2'>-</button>
                <div className='pageid'>
                    <span>Page:</span>
                    <h3>{currentPage}</h3>

                </div>

                <button onClick={incrementPageNumber} className='btn btn-outline-info mx-2'>+</button>

            </div>


        </div>
    );
}

export default Home;