import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { fetchResearch } from '../services/myservices';
function Research(props) {
    const [research, setResearch] = useState(props.match.params.search);
    const [listsearch, setListsearch] = useState([]);
    
    useEffect(() => {
        const fetchRes = async () => {
            setResearch(props.match.params.search);
            setListsearch(await fetchResearch(research));
        }
        fetchRes();
    }, [listsearch]);

    console.log(listsearch);
    const listMovie = listsearch.map((item, index) => {
        return (
            
            <div className="card" key={index}>
            <img src={item.backPoster} alt={item.title}/>
            <div className="descriptions">
                <h3>{item.title}</h3>
                <p>
                    {item.overview}
                </p>                
            </div>
        </div>


        )
    })


    return (
        <div>
            <h3 className='text-white mx-5'>Resultat de Recherche</h3>
            <div className="listresearch px-5">
                {listMovie}
            </div>
            <Link to="/" className='lien'>retour</Link>
        </div>
    );
}

export default Research;