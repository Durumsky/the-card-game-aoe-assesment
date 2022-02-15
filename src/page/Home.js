import React, {useState, useEffect} from 'react'
import PlayerDetails from '../components/playerDetails'
import Controls from '../components/controls'
import {HomeContainer, HomeWrapper, Column1, Column2} from './homeElements'
import Overview from '../components/playerOverview'

const Home = () => {
    const [playersData, setPlayersData] = useState([])

    function getData() {
    fetch('playersData.json')
    .then(r => r.json())
    .then(json => {
        setPlayersData(json)
    })
    .catch(err => {console.log(err)});
    }

    useEffect(() => {
        getData()
    }, [])

    

  return (
    <>
    <HomeContainer>
      <HomeWrapper>
        <Column1>
          < PlayerDetails />
        </Column1>
        <Column2>
          < Controls />
        </Column2>
      </HomeWrapper>
          < Overview /> 
    </HomeContainer>
   
      
      
    </>
    
  )

}

export default Home