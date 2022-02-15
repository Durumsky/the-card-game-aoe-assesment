import styled from "styled-components";

export const PlayerOverviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  max-width: 900px;
  height: auto;
`;
export const PlayerOverviewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0 60px;
  min-height: 100vh;
  margin-bottom: 50px;
  max-width: 1100px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width:770px){
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px 30px;
  }

  @media screen and (max-width:500px){
    grid-template-columns: 1fr;
    grid-gap: 30px 30px;
  }
`;

export const PlayerOverviewCard = styled.div`
  background: white;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
  width: 200px;
  height: 200px;
  border-radius: 4px;
  padding: 40px;
  margin: 0;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PlayerOverviewH1 = styled.h1`
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 30px;
  color: white;
  text-align: center;
`;

export const PlayerOverviewP = styled.p`
  color: grey;
  margin-bottom: 5px;
`;
