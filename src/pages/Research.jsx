import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { fetchResearch } from '../services/myservices';
function Research(props) {
    const [research, setResearch] = useState(props.match.params.search);
    const [listsearch, setListsearch] = useState([]);
    
    useEffect(() => {
        const fetchRes = async () => {
            setListsearch(await fetchResearch(research));
        }
        fetchRes();
    }, []);


    const listMovie = listsearch.map((item, index) => {
        return (
            <div className="col" key={index}>
                <div className="card h-100">
                    <img src={item.backPoster} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.overview.slice(0, 100)}</p>
                    </div>
                </div>
            </div>


        )
    })


    return (
        <div>
            <h3 className='text-white'>Resultat de Recherche</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {listMovie}
            </div>
            <Link to="/" className='lien'>retour</Link>
        </div>
    );
}

export default Research;