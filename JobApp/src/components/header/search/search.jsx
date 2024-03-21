import React, {useEffect, useState} from 'react'
import './search.css'
import imgFilter from '../../../assets/mobile/icon-filter.svg'
import imgSearch from '../../../assets/desktop/icon-search.svg'
import imgLocation from '../../../assets/desktop/icon-location.svg' 
import Button from '../../main-content/button/button'

function search({
  changeInputValue, 
  PopupStatutDisplay, 
  DataNameFilter, 
  unchekedCheckbox, 
  changefilterWindowsCheckbox, 
  DataLocationFilter,
  changeInputLocationValue,
  allDataFilter }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const searchBarDisplay = () => {
    if (windowWidth < 768){
      return (
        <div className='search'>
          <input type='textArea' placeholder='Filter by title...' onChange={(e) => changeInputValue(e.target.value)} />
          <div>
              <img src={imgFilter} alt='filter' onClick={() => {PopupStatutDisplay(), unchekedCheckbox();}}/>
              <img src={imgSearch} alt='search' className='search-icon' onClick={() => DataNameFilter()}/>
          </div>
        </div>
      )
    } return (
      <div className='search'>
          <div>
              <img src={imgSearch} alt='search' className='search-icon' />
              <input type='textArea' placeholder='Filter by title...' onChange={(e) => changeInputValue(e.target.value)} />
          </div>

          <div className='filter-location'>
            <img src={imgLocation} alt='Location icon' />
            <input 
              type='text' 
              placeholder='Filter by location...' 
              className='input-location-filter' 
              onChange={(e) => changeInputLocationValue(e.target.value)}
              id='input-location-filter'
              />
        </div>

        <div className='full-time-only'>
          <div className="custom-input"> 
            <div>
              <input type='checkbox' id="fullTimeCheckbox" onClick={changefilterWindowsCheckbox} />
              <label htmlFor="fullTimeCheckbox"><span className="checkmark"></span>Full Time</label>
            </div>
            <Button classCss='btn-pop-up' onClick={() => { allDataFilter() }}>Search</Button>
          </div>
        </div>
      </div>
      
    )
  }

  return (
    <>
      {searchBarDisplay()}
    </>
  )
}

export default search