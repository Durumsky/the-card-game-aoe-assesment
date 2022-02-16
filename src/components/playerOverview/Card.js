import React from "react";
import {PlayerOverviewCard, PlayerOverviewP} from './OverviewElements'

const Card = ({player, selectorHandler, active}) => {

  const clickHandler = (realName, playerName, asset, img) => {
    selectorHandler(realName, playerName, asset, img)
  }

      

  return (
    
      <PlayerOverviewCard
        onClick={() =>
          clickHandler(
            player.realName,
            player.playerName,
            player.asset,
            player.img
          )
        }
        active={active}
      >
        <PlayerOverviewP>
          {player.realName.substring(0, 7)}
        </PlayerOverviewP>
        <PlayerOverviewP>
          {player.playerName.substring(0, 5)}...
        </PlayerOverviewP>
        <PlayerOverviewP>{player.asset.substring(0, 5)}...</PlayerOverviewP>
      </PlayerOverviewCard>
  );
};

export default Card;
