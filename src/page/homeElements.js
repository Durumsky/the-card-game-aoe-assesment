import styled from "styled-components";

export const HomeContainer = styled.section`
  background: #3465a4;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20;
  margin: 0;



  
`;

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 1100px;
  min-height: 400px;


  @media screen and (max-width: 1200px) {
    justify-content: space-evenly;
    height: 100%;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin-top: 100px;
    width: auto;
    height: 100%;
  }
`;

export const Column1 = styled.div`
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-basis: 0%;
  }

  @media screen and (max-width: 1000px) {
    flex-basis: 0;
  }
`;

export const Column2 = styled.div`
  flex-basis: 35%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    flex-basis: 0%;
  }

  @media screen and (max-width: 1000px) {
    flex-basis: 0;
  }
`;
