import React from 'react';
import './filterWindow.css'
import imgLocation from '../../../assets/desktop/icon-location.svg';
import Button from '../../main-content/button/button';

function FilterWindow({PopupStatutDisplay, DataLocationFilter, changeInputLocationValue, changefilterWindowsCheckbox}) {

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='filterWindow' onClick={() => PopupStatutDisplay()}>
      <div className='filterWindows-inner' onClick={stopPropagation}>
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
        <hr />
        <div className='full-time-only'>
          <div className="custom-input"> 
            <input type='checkbox' id="fullTimeCheckbox" onClick={changefilterWindowsCheckbox} />
            <label htmlFor="fullTimeCheckbox"><span className="checkmark"></span>Full Time Only</label>
          </div>
        </div>
        <Button classCss={'btn-pop-up'} onClick={() => { DataLocationFilter(); PopupStatutDisplay(); }}><p>Search</p></Button>
      </div>
    </div>
  );
}

export default FilterWindow;