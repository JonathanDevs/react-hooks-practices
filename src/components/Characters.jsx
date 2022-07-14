import React, {useState, useEffect} from 'react';

const Characters = () => { 

    const [characters, setCharacters] = useState([]);

    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character/')        
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    },[]);

    return(
        <div className="Characters">
          
          {characters.map(character => (
            
            <> 
            {/* /*fragmento*/}
           
            <h2><img className="character-img" src={character.image} alt="" />
               {character.name}
            
            
                     
            
            </h2>           
            </>
          ))}
            
        </div>

    );

 }
 
 

//  Reto crear una tarjeta presenta fotografia nombre y estilo, activar el darkmode con css

 export default Characters;
 