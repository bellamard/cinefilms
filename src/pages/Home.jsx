import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { fetchMovies, fetchGenre, fetchTopratedMovie } from '../services/myservices';




function Home(props) {

    const [nowPlaying, setNowplaying] = useState([]);
    const [genre, setGenre] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setNowplaying(await fetchMovies());
            setGenre(await fetchGenre());
            setTopRated(await fetchTopratedMovie());
        }
        fetchAPI();
    }, []);

    const managedslider = nowPlaying.slice(10, 15).map((item, index) => {
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

            <li className="booking-card" key={index} style={{backgroundImage:`url(${item.backPoster})`}}>
                <div className="book-container">
                    <div className="content">
                        <button className="btn">REGARDER</button>
                    </div>
                </div>
                <div className="informations-container">
                    <h2 className="title">{item.title}</h2>
                    <p className="sub-title">{item.overview.slice(0, 50)}</p>
                    <p className="price">{item.rating}</p>
                    <div className="more-information">
                        <div className="info-and-date-container">
                            <div className="box info">

                                <p>{item.popularity}</p>
                            </div>
                            <div className="box date">

                                <p>{item.}</p>
                            </div>
                        </div>
                        <p className="disclaimer">{item.overview}</p>
                    </div>
                </div>
            </li>
            
        )
})
return (
    <div>
        <Carousel>
            {managedslider}
        </Carousel>

            card
        <ul>
            {managedcard}
        </ul>
    </div>
);
}

export default Home;