import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { fetchResearch } from '../services/myservices';
function Research(props) {
    const [research, setResearch] = useState('');
    const [listsearch, setListsearch] = useState([]);
    
    useEffect(() => {
        setResearch(props.match.params.search);
        const fetchRes = async () => {
            setListsearch(await fetchResearch(research));
        }
        
        fetchRes();
    }, []);
    console.log(listsearch);
     
    

    return (
        <div>
            
            <Link to="/" className='lien'>retour</Link>
        </div>
    );
}

export default Research;