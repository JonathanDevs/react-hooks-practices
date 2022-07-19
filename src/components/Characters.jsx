import React, {useState, useEffect, useReducer, useMemo, useRef, useCallback} from 'react';
import Search from './Search';

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_FAVORITE':
      return{
        ...state, /*estado original*/
        favorites: [...state.favorites, action.payload]
      };
      default:
        return state;
  }
}

const Characters = () => { 

    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    // se encargara de la busqueda
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character/')        
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    },[]);

    const handleClick = favorite => {
      dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
    }
    // se encargara de la busqueda
    // const handleSearch= () => {
    //   setSearch(searchInput.current.value)
    // }

    const handleSearch = useCallback(() =>{
      setSearch(searchInput.current.value)
    }, [])

    // FILTRO PARA TRABAJAR LOS PERSONAJES A FILTRAR
    // const filteredUsers = characters.filter((user) =>{
    //   return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    // para comenzar a usar useMemo y retorne los valores memorizados
    const filteredUsers = useMemo(() =>
       characters.filter((user) =>{
    return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )

    return(
        <div className="Characters">
          {favorites.favorites.map(favorite =>(
            <li key={favorite.id}>
              {favorite.name}
              </li>

          ))}
          {/* se encargara de la busqueda */}
         <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
          
          {filteredUsers.map(character => (
            
            <div className="item" key={character.id}>      
          
           
            <h2>
               {character.name}</h2>    
               <button type='button' onClick={() => handleClick(character)}>Agregar a favoritos
               </button>
            
            
                     
            
                   
            </div>
          ))}
            
        </div>

    );

 }
 
 

//  Reto crear una tarjeta presenta fotografia nombre y estilo, activar el darkmode con css

 export default Characters;
 