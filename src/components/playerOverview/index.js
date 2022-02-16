import React, { useState } from "react";
import {
  PlayerOverviewContainer,
  PlayerOverviewWrapper,
  PlayerOverviewH1,
} from "./OverviewElements";
import Card from "./Card";

const PlayerOverview = ({ playersData, selectorHandler, selectedPlayer }) => {
  const [activeCard, setActiveCard] = useState();
  console.log(activeCard)

  return (
    <>
      <PlayerOverviewContainer>
        <PlayerOverviewH1>Overview</PlayerOverviewH1>
        <PlayerOverviewWrapper>
          {playersData.map((player, i) => (
              <Card
                player={player}
                selectorHandler={selectorHandler}
                onClick={() => setActiveCard(i)}
                key={i}
                active={activeCard === i && true}
              />
            ))}
        </PlayerOverviewWrapper>
      </PlayerOverviewContainer>
    </>
  );
};

export default PlayerOverview;
