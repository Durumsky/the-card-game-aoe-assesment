import styled from "styled-components";

export const DetailsContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3465A4;
`;
export const DetailsWrapper = styled.div`
  display: flex;
  width: 550px;
  padding: 20px;
  height: 225px;
  background: #2E3436;
  border-radius: 3px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 590px) {
    flex-direction: column;
    height: auto;
    width: auto;
  }
`;

export const Column1 = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

export const Column2 = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const DetailsH1 = styled.h1`
  font-weight: 700;
  margin-bottom: 15px;;
  font-size: 30px;
  color: white;
`;

export const DetailsP = styled.p`
  color: white;
  margin-bottom: 5px;
`;

export const DetailsH4 = styled.h4`
    font-weight: bold;
    color: white;

`;

export const DetailsImg = styled.img`
  width: 150px;
  height: 150px;
`;
