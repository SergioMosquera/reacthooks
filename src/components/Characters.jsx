import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback} from 'react';
import Search from './Search';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch  (action.type) {
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            };
            default:
                return state;
    }
}

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);
    const url = 'https://rickandmortyapi.com/api/character/'
    useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.results));  
    }, []);
const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite})
}

//const handleSearch = () =>{
  //  setSearch(searchInput.current.value);
//}

//const filteredUsers = characters.filter((user) => {
  //  return user.name.toLowerCase().includes(search.toLowerCase());
//})

const handleSearch = useCallback(() =>{ 
    setSearch(searchInput.current.value);
},[])

const filteredUsers = useMemo(()=>
    characters.filter((user) => {
          return user.name.toLowerCase().includes(search.toLowerCase());         
        }),
        [characters, search]
)
    return(
        <div className="Characters">
            {favorites.favorites.map(favorite => (
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}
           
           <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

            {filteredUsers.map(character => ( 
            <div className="box-item" key={character.id} >
                <h2>{character.name}</h2>
                <img src={character.image} alt="" width={160} height={160} />
                <h3>{character.gender}</h3>
                <h3>{character.status}</h3>
                <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
            </div>
            
            ))}   
        </div>
    );
}

export default Characters;




