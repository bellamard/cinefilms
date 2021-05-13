import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { fetchMovies, fetchGenre, fetchTopratedMovie, numberpagetop, fetchMovieByGenre } from '../services/myservices';
import { Link } from 'react-router-dom';




function Home(props) {

    const [nowPlaying, setNowplaying] = useState([]);
    const [genre, setGenre] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [pageid, setPageid] = useState(1);
    const [numberpage, setNumberpage] = useState(0);
    const [titlemovie, setTitlemovie]=useState('TOP Films')

    useEffect(() => {
        const fetchAPI = async () => {
            setNowplaying(await fetchMovies());
            setGenre(await fetchGenre());
            setTopRated(await fetchTopratedMovie(pageid));
            setNumberpage(await numberpagetop());
        }
        fetchAPI();

    }, []);

    const incrementpage = async () => {
        if (pageid < numberpage) {
            setPageid(pageid + 1)
            setTopRated(await fetchTopratedMovie(pageid));
            
        }
    }

    const decrementpage = async () => {
        if (pageid > 1) {
            setPageid(pageid - 1);
            setTopRated(await fetchTopratedMovie(pageid));
            console.log(pageid);

        }
    }

    const managedslider = nowPlaying.slice(5, 10).map((item, index) => {
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

    const managedcard = topRated.map((item, index) => {
        return (

            <div className="card" key={index}>
                <img src={item.backPoster} alt={item.title} />
                <div className="descriptions">
                    <h3>{item.title}</h3>
                    <p>
                        {item.overview}
                    </p>
                </div>
            </div>

        )
    });
    const handleGenreClick = async (genre_id, genre_name) => {
        setTopRated(await fetchMovieByGenre(genre_id));
        setTitlemovie(genre_name);
        console.log(topRated);
    };
    const mangedgenre = genre.map((item, index) => {
        return (
            <li className="list-inline-item my-1" key={index}>
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => {
                        handleGenreClick(item.id,item.name);
                    }}
                >
                    {item.name}
                </button>
            </li>
        )
    })





    return (
        <div>

            <Carousel>
                {managedslider}

            </Carousel>
            <ul className='my-2'>
                {mangedgenre}
            </ul>
            <h3 className='text-white mx-5'>{titlemovie}</h3>
            <div className="listresearch px-5">
                {managedcard}
            </div>


            <div className='paging'>
                <button onClick={decrementpage}>-</button>
                <div className='pageid'>
                    <span>Page:</span>
                    <h3>{pageid}</h3>

                </div>

                <button onClick={incrementpage}>+</button>

            </div>


        </div>
    );
}

export default Home;