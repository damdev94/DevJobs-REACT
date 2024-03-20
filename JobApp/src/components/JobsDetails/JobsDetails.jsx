import React, { useContext } from 'react'
import { ThemeContext } from '../../App';
import './jobsDetails.css'
import { useParams } from 'react-router-dom';
import ToggleButton from '../header/toggle/toggleButton'
import Button from '../main-content/button/button'

function JobsDetails({jobs, toggleTheme, theme, handleToggleButton, toggleButton} ) {

    let { jobId } = useParams();
    const job = jobs[jobId-1];

    const { logos } = useContext(ThemeContext);

    let displayLogo = ''
    const cleanCompany = job.company.toLowerCase().replace(/\s/g, '');
    
    logos.forEach((element) => {
        const key = Object.keys(element)[0]
        if ( key === cleanCompany) {
            return displayLogo = element[key]
        }
    });

    const displayList = (listData) => {
        return (
            <>
                <ol style={{padding : '20px'}}>
                    {listData.map((item) => {
                        return (
                            <li 
                                key={listData.indexOf(item)} 
                                style={{marginBottom : '10px', paddingLeft: '20px'}}
                                >{item}
                            </li>
                            )
                    })}
                </ol>
            </>
        )
    }


  return (
    <>
        <div className='header'>
            <div className="navbar">
            <h1>devjobs</h1>
            <ToggleButton  
                toggleTheme= {toggleTheme} 
                theme= {theme} 
                handleToggleButton= {handleToggleButton}
                toggleButton= {toggleButton}/>
            </div>
            <div className='job-container-header'>
                <img src={displayLogo} style={{backgroundColor : job.logoBackground}}/>
                <h1>{job.company}</h1>
                <p>{job.website}</p>
                <Button classCss='btn-company-site' >Company Site</Button>
            </div>
        </div>
        <div className="main-description-container">
            <div className='main-description-container-content'>
                <div className="decription-header">
                    <div className='card-header' style={{paddingTop : '30px'}}>
                        <p style={{margin: '0'}}>{job.postedAt}</p>
                        <p style={{margin: '0'}} className='point'>.</p>
                        <p style={{margin: '0'}}>{job.contract}</p>
                    </div>
                    <div className="card-title">
                        <h1>{job.position}</h1>
                    </div>
                    <div className="card-country" style={{margin : '0'}}>
                        <p>united kingdom</p>
                    </div>
                </div>
                <Button classCss='btn-apply-now'>Apply Now</Button>

                <div className="description">

                    <p>{job.description}</p>

                    <h2>Requirements</h2>
                    <p>{job.requirements.content}</p>
                    {displayList(job.requirements.items)}

                    <h2>What You Will DO</h2>
                    <p>{job.role.content}</p>
                    {displayList(job.role.items)}

                    <Button classCss='btn-apply-now'>Apply Now</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default JobsDetails