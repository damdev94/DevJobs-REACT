import React from 'react'
import Search from './search/search'
import ToggleButton from './toggle/toggleButton'
import FilterWindow from './filterWindow/filterWindow'
import toggleButton from './toggle/toggleButton'

function header({
  changeInputValue, 
  changeInputLocationValue, 
  filterPopStatut, 
  PopupStatutDisplay, 
  DataNameFilter, 
  DataLocationFilter,
  changefilterWindowsCheckbox,
  unchekedCheckbox,
  toggleTheme,
  theme,
  handleToggleButton,
  toggleButton
  }) {

  const displayPopUp = () => {
    if (filterPopStatut) {

     return <FilterWindow  
              PopupStatutDisplay= {PopupStatutDisplay} 
              DataLocationFilter= {DataLocationFilter}
              changeInputLocationValue= {changeInputLocationValue}
              changefilterWindowsCheckbox= {changefilterWindowsCheckbox}
              />
    }
  }

  return (
    <div className='header'>
        <div className="navbar">
          <h1>devjobs</h1>
          <ToggleButton 
            toggleTheme= {toggleTheme} 
            theme= {theme} 
            handleToggleButton= {handleToggleButton} 
            toggleButton= {toggleButton}
          />
        </div>
        <Search 
          changeInputValue= {changeInputValue}
          PopupStatutDisplay= {PopupStatutDisplay} 
          DataNameFilter= {DataNameFilter}
          DataLocationFilter= {DataLocationFilter}
          unchekedCheckbox= {unchekedCheckbox}
        />
        {displayPopUp()}
    </div>
  )
}

export default header