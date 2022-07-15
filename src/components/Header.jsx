import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => { 

  const [darkMode, setDarkMode] = useState(false);

// dark mode variable, setDarMode la funcion que se va encargar de cambiar el estado de useState el valor inicial es false 
  const color = useContext(ThemeContext);

  const handleClick = () =>{
    setDarkMode(!darkMode);
    // al ser ser diferente de la condicion se aplicaria el ligth mode
  }

    return(
        <div className="Header">
            <h1 style={{ color }}>ReactHooks</h1>
             {/* para este caso del proyecto usamos esta funcion para poder manejar los estados de la misma 
            de forma mas eficiente */}
            <button type="button" onClick={handleClick}>{darkMode ? 'Dark-Mode' : 'Light-Mode'}
            </button>
            
           {/* ejemplo explicando otra forma de hacer dicha funcion */}
            {/* <button  type="button" onClick={() => 
            setDarkMode(!darkMode)}> {darkMode ? 'Dark-Mode2' : 'Light-Mode2'}</button> */}
        </div>
    );
 }
 export default Header;