import React from 'react';

function MovieDetail(props) {
    const { nom, temps, annee, realisateur, synopsus, casting, production, sources } = props;
    return (
        <div className='container bg-white my-5 rounded-2 d-flex'>
            <div>
                <ul>
                    <li className="booking-card" >
                        <div className="book-container">
                            <div className="content">
                                <button className="btn">Réserver</button>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-primary'>{nom}</h3>
                <h4 className='text-primary'>Titre: {temps}</h4>
                <h4 className='text-primary'>Durée: {annee}</h4>
                <h4 className='text-primary'>Réalisateur:{realisateur}</h4>
                <h4 className='text-primary'>Synopsus:{ }</h4>
            </div>




        </div>
    );
}

export default MovieDetail;