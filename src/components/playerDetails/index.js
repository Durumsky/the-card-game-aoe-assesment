import React from 'react'
import { DetailsContainer, DetailsWrapper, Column1, Column2, DetailsH1, DetailsH4, DetailsP, DetailsImg } from './DetailElements'

const PlayerDetails = () => {
  return (
    <DetailsContainer>
        <DetailsWrapper>
          <Column1>
            <DetailsH1>Details</DetailsH1>
            <DetailsH4>Real Name</DetailsH4>
            <DetailsP>Real Name</DetailsP>
            <DetailsH4>Player Name</DetailsH4>
            <DetailsP>Player Name</DetailsP>
            <DetailsH4>Asset</DetailsH4>
            <DetailsP>Asset</DetailsP>
          </Column1>
          <Column2>
            <DetailsImg></DetailsImg>
          </Column2>
        </DetailsWrapper>
    </DetailsContainer>
  )
}

export default PlayerDetails