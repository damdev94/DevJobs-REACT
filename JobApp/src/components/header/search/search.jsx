import React from 'react'
import './search.css'
import imgFilter from '../../../assets/mobile/icon-filter.svg'
import imgSearch from '../../../assets/desktop/icon-search.svg'

function search({changeInputValue, PopupStatutDisplay, DataNameFilter, unchekedCheckbox}) {
  return (
    <div className='search'>
        <input type='textArea' placeholder='Filter by title...' onChange={(e) => changeInputValue(e.target.value)} />
        <div>
            <img src={imgFilter} alt='filter' onClick={() => {PopupStatutDisplay(), unchekedCheckbox();}}/>
            <img src={imgSearch} alt='search' className='search-icon' onClick={() => DataNameFilter()}/>
        </div>
    </div>
  )
}

export default search