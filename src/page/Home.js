import React, {useState, useEffect} from 'react'
import PlayerDetails from '../components/playerDetails'
import Controls from '../components/controls'
import {HomeContainer, HomeWrapper, Column1, Column2} from './homeElements'
import Overview from '../components/playerOverview'

const Home = () => {
    const [playersData, setPlayersData] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState({
      selected: false,
      realName: '',
      playerName: '',
      asset: '',
      img: ''
    })

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

    const selectorHandler = (realName, playerName, asset, img) => {
      setSelectedPlayer({
        selected: true,
        realName: realName,
        playerName: playerName,
        asset: asset,
        img: img,
      })
    }

    

  return (
    <>
    <HomeContainer>
      <HomeWrapper>
        <Column1>
          < PlayerDetails selectedPlayer={selectedPlayer} />
        </Column1>
        <Column2>
          < Controls />
        </Column2>
      </HomeWrapper>
          < Overview playersData={playersData} selectedPlayer={selectedPlayer} selectorHandler={selectorHandler}/> 
    </HomeContainer>
   
      
      
    </>
    
  )

}

export default Home