import React from "react";
import {
  DetailsContainer,
  DetailsWrapper,
  Column1,
  Column2,
  DetailsH1,
  DetailsH4,
  DetailsP,
  DetailsImg,
} from "./DetailElements";

const PlayerDetails = (props) => {

  return (
    <DetailsContainer>
      <DetailsWrapper>
        <Column1>
            <DetailsH1>Details</DetailsH1>
            <DetailsH4>Real Name</DetailsH4>
            <DetailsP>{props.selectedPlayer.realName}</DetailsP>
            <DetailsH4>Player Name</DetailsH4>
            <DetailsP>{props.selectedPlayer.playerName}</DetailsP>
            <DetailsH4>Asset</DetailsH4>
            <DetailsP>{props.selectedPlayer.asset}</DetailsP>
          </Column1>
          <Column2>
          {props.selectedPlayer.selected &&
          <DetailsImg src={props.selectedPlayer.img}/>
          }
            
          </Column2>
      </DetailsWrapper>
    </DetailsContainer>
  );
};

export default PlayerDetails;
