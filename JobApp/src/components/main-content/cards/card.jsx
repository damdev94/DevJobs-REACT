import React, { useContext } from 'react';
import './card.css';
import { ThemeContext } from '../../../App';

function Card({ company, contract, logo, location, postedAt, position, logoBackground }) {
  const { logos } = useContext(ThemeContext);

  const companyNameClean = company.toLowerCase().replace(/\s/g, '');

  let displayLogo = '';
  
  logos.forEach(logoObj => {

    const key = Object.keys(logoObj)[0];
    if (key === companyNameClean) {
      displayLogo = logoObj[key];
    }
  });

  return (
    <div className='card-container'>
        <img src={displayLogo} alt='website-logo' style={{backgroundColor: logoBackground}} />
        <div className="card">
            <div className='card-header'>
                <p>{postedAt}</p>
                <p className='point'>.</p>
                <p>{contract}</p>
            </div>
            <div className="card-title">
                <h1>{position}</h1>
            </div>
            <div className='card-website'>
                <p>{company}</p>
            </div>
            <div className='card-country'>
                {location}
            </div>
        </div>
    </div>
  );
}

export default Card;