import React, { useState, useEffect } from 'react';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));  
    }, []);

    return(
        <div className="Characters">
            {characters.map(character => ( 
            <div className="box">
                <h2>{character.name}</h2>
                <img src={character.image} alt="" width={160} height={160} />
                <h3>{character.gender}</h3>
                
            </div>
            
            ))}   
        </div>
    );
}

export default Characters;




