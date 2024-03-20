import React from 'react'
import './toggleButton.css'
import moonIcon from '../../../assets/desktop/icon-moon.svg'
import sunIcon from '../../../assets/desktop/icon-sun.svg'

function toggleButton({toggleTheme, theme, handleToggleButton, toggleButton}) {
  
  return (
    <div>
        <div className="light-mode">
            <img src={sunIcon} alt="sun-icon"/>
            <input 
              className={toggleButton === 'active' ? 'inputToggle active' : 'inputToggle'} 
              type='checkbox' 
              onClick={() => {handleToggleButton(); toggleTheme(theme)}} />
            <img src={moonIcon} alt="moon-icon"/>  
        </div>
    </div>
  )
}

export default toggleButton