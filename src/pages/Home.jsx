import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { fetchMovies, fetchGenre } from '../services/myservices';




function Home(props) {

    const [nowPlaying, setNowplaying] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setNowplaying(await fetchMovies());
            setGenre(await fetchGenre());
        }
        fetchAPI();
        console.log(nowPlaying);
    }, []);

    const managedslider = nowPlaying.slice(10, 15).map((item, index) => {
        return (

            <Carousel.Item interval={5000} key={index}>
                <img
                    className="d-block w-100"
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

    const managedcard = () => {
        return (
            <ul>
                <li className="booking-card" >
                    <div className="book-container">
                        <div className="content">
                            <button className="btn">REGARDER</button>
                        </div>
                    </div>
                    <div className="informations-container">
                        <h2 className="title">Je suis un billet pour aller visiter un truc</h2>
                        <p className="sub-title">Et moi un je suis sous-titre</p>
                        <p className="price">De 0 à 15 €</p>
                        <div className="more-information">
                            <div className="info-and-date-container">
                                <div className="box info">

                                    <p>Parc des expositions à NANTES</p>
                                </div>
                                <div className="box date">

                                    <p>Samedi 1er février 2020</p>
                                </div>
                            </div>
                            <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
    return (
        <div>
            <Carousel>
                {managedslider}
            </Carousel>

            card
            {managedcard()}
        </div>
    );
}

export default Home;