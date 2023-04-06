import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import FlagList from './components/flag-list/FlagList';
import Filter from './components/filter/Filter';
const CountryList =  '../data/data.json';
// const CountryList = '../../../data/data.json';


function App() {

    const [flagData, setFlagData] =  useState([])

  useEffect(() => {
    fetch(CountryList)
      .then(response => response.json())
      .then(data => setFlagData(data))
  },[])

  const flagItems = flagData.map(item => {
      const {name, population, region, capital} = item
      const {png: img} = item.flags
        return (
            <div className="flagbox">
                <div className="flagbox__img">
                  <img  src={img } />
                </div>
                <div className="flagbox__content flex">
                  <h3> {name} </h3> 
                  <div>
                      <p> <span>Population:</span> {population} </p>
                      <p> <span>Region:</span>  {region} </p>
                      <p> <span>Capital:</span>  {capital} </p>
                  </div>
                </div> 
            </div>
        ) 
    })

  return (
    <div >
      <Header />
      <Filter />
      <FlagList flatlist = {flagItems} />
    </div>
  )
}



export default App;