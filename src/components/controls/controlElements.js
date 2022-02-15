import styled from "styled-components";

export const ControlsContainer = styled.div`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2e3436;
  border-radius: 4px;

`;
export const ControlsWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const ControlsButton = styled.button`
  background: white;
  color: black;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  

  &:hover {
   background: #3465A4;
  }
`;
export const ControlsSubmitButton = styled.button`
  background: white;
  width: 200px;
  padding: 5px;
  color: black;
  border-radius: 4px;
  cursor: pointer;
  border: none;

  &:hover {
   background: #3465A4;
  }
`;
