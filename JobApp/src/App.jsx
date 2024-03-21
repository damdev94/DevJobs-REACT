import { useState, createContext, useEffect } from 'react'
import './App.css'
import data from './assets/data/data.json'
import Header from './components/header/header'
import MainContent from './components/main-content/main-content'
import { Routes, Route } from 'react-router-dom';
import JobsDetails from './components/JobsDetails/JobsDetails'

// logos

import Scoot from '../public/logos/scoot.svg'
import Blogr from '../public/logos/blogr.svg'
import Coffeeroasters from '../public/logos/coffeeroasters.svg'
import Creative from '../public/logos/creative.svg'
import Crowdfund from '../public/logos/crowdfund.svg'
import Maker from '../public/logos/maker.svg'
import Mastercraft from '../public/logos/mastercraft.svg'
import Officelite from '../public/logos/officelite.svg'
import Pod from '../public/logos/pod.svg'
import Pomodoro from '../public/logos/pomodoro.svg'
import Typemaster from '../public/logos/typemaster.svg'
import Vector from '../public/logos/vector.svg'

const logos = [
  {scoot: Scoot},
  {blogr: Blogr},
  {coffeeroasters: Coffeeroasters},
  {creative: Creative},
  {crowdfund: Crowdfund},
  {maker: Maker},
  {mastercraft: Mastercraft},
  {officelite: Officelite},
  {pod: Pod},
  {pomodoro: Pomodoro},
  {typemaster: Typemaster},
  {vector: Vector}
]

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('light')

  const [toggleButton, setToggleButton] = useState ('')

  const [jobs, setJobs] = useState(data)

  const [inputValue, setinputValue] = useState('')

  const [inputLocationValue, setInputLocationValue] = useState('')

  const [filterPop, setFilterPop] = useState(false)

  const [filterWindowsCheckbox, setFilterWindowsCheckbox] = useState(false)

  const toggleTheme = (theme) => {
    setTheme (theme === 'light' ? 'dark' : 'light')
  }

  const DataNameFilter = ()  => {
    const results = data.filter(item => 
    item.position.toLowerCase().includes(inputValue.toLowerCase())
    );
    setJobs(results);
  }

  const DataLocationFilter = ()  => {
    if (filterWindowsCheckbox) {
      const results = data.filter(item => 
        item.location.toLowerCase().includes(inputLocationValue.toLowerCase()) && item.contract.toLowerCase().includes('full')
        );
        setJobs(results);
    }else {
      const results = data.filter(item => 
        item.location.toLowerCase().includes(inputLocationValue.toLowerCase())
        );
        setJobs(results);
    }
  }

  const allDataFilter = () => {
    if (filterWindowsCheckbox) {
      const results = data.filter(item => 
        item.location.toLowerCase().includes(inputLocationValue.toLowerCase()) && item.contract.toLowerCase().includes('full') &&  item.position.toLowerCase().includes(inputValue.toLowerCase())
        );
        setJobs(results);
  } else {
    const results = data.filter(item => 
      item.location.toLowerCase().includes(inputLocationValue.toLowerCase()) && item.position.toLowerCase().includes(inputValue.toLowerCase())
      );
      setJobs(results);
  }
}

  const changeInputLocationValue = (e) => {
    setInputLocationValue(e)
  }
  
  const changeInputValue = (e) => {
    setinputValue(e)
  }

  const PopupStatutDisplay = () => {
    setFilterPop(!filterPop)
  }

  const changefilterWindowsCheckbox = (e) => {
    setFilterWindowsCheckbox(e.target.checked)
  }

  const unchekedCheckbox = () => {
    setFilterWindowsCheckbox(false)
  }
  
  const handleToggleButton = () => {
    toggleButton === '' ? setToggleButton('active') : setToggleButton('')
  }

  return (

    <ThemeContext.Provider value={{theme, setTheme, toggleButton, logos}}>
      <div className="App" id={theme}>

        <Routes>
          <Route path='/' element= {
              <>
                <Header
                  changeInputValue= {changeInputValue}
                  changeInputLocationValue= {changeInputLocationValue} 
                  filterPopStatut= {filterPop} 
                  PopupStatutDisplay= {PopupStatutDisplay} 
                  DataNameFilter= {DataNameFilter}
                  DataLocationFilter= {DataLocationFilter}
                  changefilterWindowsCheckbox = {changefilterWindowsCheckbox}
                  unchekedCheckbox= {unchekedCheckbox}
                  toggleTheme= {toggleTheme}
                  theme = {theme}
                  handleToggleButton= {handleToggleButton}
                  toggleButton= {toggleButton}
                  allDataFilter= {allDataFilter}
                  >
                </Header>
                <MainContent jobs= {jobs} />
              </>
            } >
          </Route>
          <Route path='/:jobId' element={<JobsDetails 
            jobs={jobs} 
            toggleTheme= {toggleTheme} 
            theme= {theme} 
            handleToggleButton= {handleToggleButton}
            toggleButton= {toggleButton}
            />}>
          </Route>    
        </Routes>

      </div>

    </ThemeContext.Provider>
  )
}
export default App
