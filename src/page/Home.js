import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerDetails from "../components/playerDetails";
import Controls from "../components/controls";
import { HomeContainer, HomeWrapper, Column1, Column2 } from "./homeElements";
import Overview from "../components/playerOverview";

const Home = () => {
  const [playersData, setPlayersData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({
    selected: false,
    realName: "",
    playerName: "",
    asset: "",
    img: "",
  });

  function getData() {
    axios
      .get("http://localhost:5000/playersData")
      .then((r) => setPlayersData(r.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  const selectorHandler = (realName, playerName, asset, img) => {
    setSelectedPlayer({
      selected: true,
      realName: realName,
      playerName: playerName,
      asset: asset,
      img: img,
    });
  };

  const sortAsc = () => {
    const playersDataAsc = playersData.sort((a, b) => {
      return a.realName.localeCompare(b.realName);
    });
    setPlayersData(() => [...playersDataAsc]);
  };

  const sortDesc = () => {
    const playersDataDesc = playersData.sort((a, b) => {
      return b.realName.localeCompare(a.realName);
    });
    setPlayersData(() => [...playersDataDesc]);
  };

  const submit = () => {
    if (selectedPlayer.selected === true) {
      axios
        .post("http://localhost:5000/submitedPlayers", selectedPlayer)
        .then(() => {
          setSelectedPlayer({
            selected: false,
            realName: "",
            playerName: "",
            asset: "",
            img: "",
          });
        })
        .catch(err => console.log(err))
    }
  };

  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <Column1>
            <PlayerDetails selectedPlayer={selectedPlayer} />
          </Column1>
          <Column2>
            <Controls sortDesc={sortDesc} sortAsc={sortAsc} submit={submit} />
          </Column2>
        </HomeWrapper>
        <Overview
          playersData={playersData}
          selectedPlayer={selectedPlayer}
          selectorHandler={selectorHandler}
        />
      </HomeContainer>
    </>
  );
};

export default Home;
