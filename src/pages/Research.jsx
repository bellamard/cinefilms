import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { fetchResearch } from '../services/myservices';
function Research(props) {
    let params=props.match.params.search
    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        const fetchRes = async () => {
            
            setListSearch(await fetchResearch(params));
        }
        fetchRes();
    }, [params]);

    const listMovie = listSearch.map((movie, key) => {
        return (
            <Link to={`../detail/${movie.id}`} className="cardbox">
                <div className="card" key={key}>
                    <img src={movie.backPoster} alt={movie.title} />
                    <div className="descriptions">
                        <h3>{movie.title}</h3>
                        <p>
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </Link>

        )
    })


    return (
        <div>
            <h3 className='text-white mx-5'>Resultat de Recherche</h3>
            <div className="listresearch px-5">
                {listMovie}
            </div>
            <Link to="/" className='btn btn-outline-info mx-2'>retour</Link>
        </div>
    );
}

export default Research;