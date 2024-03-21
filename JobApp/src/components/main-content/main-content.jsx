import React from 'react'
import Card from './cards/card'
import Button from './button/button'
import { Link } from 'react-router-dom'

function MainContent({jobs}) { 

  const displayCards = () => {
    return jobs.map(job => (
      <Link key={job.id} to={`/${job.id}`} style={{ textDecoration: 'none' }} className='link-card-container'>
        <Card 
          key={job.id}
          contract={job.contract}
          description={job.description}
          location={job.location}
          logoBackground={job.logoBackground}
          postedAt={job.postedAt}
          position={job.position}
          company={job.company}
          logo={job.logo}
          cardNbumer= {job.id}
        />
      </Link>
    ));
  };
  
  return (
    <>
      <div className='cards-container'>
        {displayCards()}
      </div>
      <div className='button-container'>
        <Button classCss='btn'>Load More</Button>
      </div>
    </>
  );
}

export default MainContent;