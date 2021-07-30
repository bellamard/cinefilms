import React, { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import { fetchMovieDetail, fetchCasts, fetchSimilarMovie, fetchMovieVideos } from '../services/myservices';

const MovieDetail = ({ match }) => {
    let params = match.params;
    const [detail, setDetail] = useState([]);
    const [casting, setCasting] = useState([]);
    const [trailler, setTrailler] = useState('');
    const [Similar, setSimilar] = useState([]);
    const [movie, setMovie] = useState(params.id);
    const [viewProfil, setViewProfil] = useState({});
    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetail(movie));
            setCasting(await fetchCasts(movie));
            setSimilar(await fetchSimilarMovie(movie));
            setTrailler(await fetchMovieVideos(movie));

        };
        fetchAPI();
    }, [movie, viewProfil]);
    let posterUrl = 'https://image.tmdb.org/t/p/original' + detail.backdrop_path;
    let genres = detail.genres;
    let genresType;
    if (genres) {
        genresType = genres.map((genre, key) => {
            return (
                <li className="list-inline-item" key={key}>
                    <button type="button" className="btn btn-outline-info">
                        {genre.name}
                    </button>
                </li>
            );
        });
    }
    const handleCastClick = (key) => {
        setViewProfil(casting[key]);
    }

    const castList = casting.slice(0, 20).map((acteur, index) => {

        return (
            <div>
                <li className="list-inline-item my-1" key={index}>
                    <button
                        type="button"
                        className="btn btn-outline-info mx-1"
                        onClick={() => {
                            handleCastClick(index)
                        }}
                    >
                        {acteur.name}
                    </button>
                </li>
            </div>
        )
    })
    return (
        <div className='container my-5 rounded-2 d-flex flex-column'>
            <div className='col w-100 d-flex'>
                <div className='w-50 mx-2' >
                    <img src={posterUrl} alt={detail.title} className='d-block w-100' />
                </div>
                <div className='w-50'>
                    <h4 className='text-white'>Titre: {detail.title}</h4>
                    <h4 className='text-white'>Durée: {detail.runtime} min</h4>
                    <h4 className='text-white'>Date de sortie: {detail.release_date}</h4>
                    <p className='text-white'>{detail.overview}</p>
                    <div className="row mt-3">
                        <div className="col">
                            <ul className="list-inline">{genresType}</ul>
                        </div>
                    </div>

                </div>
            </div>
            <h3 className='text-white'>Acteur</h3>
            <div className='col w-100 d-flex text-center'>
                {viewProfil.img ? (
                    <div className='text-white w-25'>
                        <img src={viewProfil.img} alt='test' className='w-100' />
                        <h4>{viewProfil.name}</h4>
                        <h4>{viewProfil.character}</h4>
                    </div>
                ) : (
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
                )}


                <div className='w-75'>
                    <ul>
                        {castList}
                        <li className='text-white text-end'>...</li>
                    </ul>

                </div>

            </div>
        </div>
    );
}

export default MovieDetail;