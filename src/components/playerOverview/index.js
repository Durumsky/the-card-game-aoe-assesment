import React, { useState } from "react";
import {
  PlayerOverviewContainer,
  PlayerOverviewWrapper,
  PlayerOverviewH1,
  PlayerOverviewCard,
  PlayerOverviewP,
} from "./OverviewElements";


const PlayerOverview = ({ playersData, selectorHandler }) => {
  const [activeCard, setActiveCard] = useState();
  const clickHandler = (realName, playerName, asset, img, i) => {
    selectorHandler(realName, playerName, asset, img);
    setActiveCard(() => i);
  };

  return (
    <>
      <PlayerOverviewContainer>
        <PlayerOverviewH1>Overview</PlayerOverviewH1>
        <PlayerOverviewWrapper>
          {playersData.map((player, i) => (
            <PlayerOverviewCard
              onClick={() => clickHandler(player.realName, player.playerName, player.asset, player.img, i)}
              player={player}
              selectorHandler={selectorHandler}
              key={i}
              active={activeCard === i && true}
            >
              <PlayerOverviewP>
                {player.realName.substring(0, 7)}
              </PlayerOverviewP>
              <PlayerOverviewP>
                {player.playerName.substring(0, 5)}...
              </PlayerOverviewP>
              <PlayerOverviewP>
                {player.asset.substring(0, 5)}...
              </PlayerOverviewP>
            </PlayerOverviewCard>
          ))}
        </PlayerOverviewWrapper>
      </PlayerOverviewContainer>
    </>
  );
};

export default PlayerOverview;

{
  /* <Card
              onClick={() => console.log("Anna is beautiful")}
              player={player}
              selectorHandler={selectorHandler}
              key={i}
              active={activeCard === i && true}
            /> */
}
