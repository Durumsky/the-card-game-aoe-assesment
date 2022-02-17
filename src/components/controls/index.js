import React from "react";
import {
  ControlsContainer,
  ControlsWrapper,
  ControlsButton,
  ControlsSubmitButton
} from "./controlElements";

const Controls = ({sortDesc, sortAsc, submit}) => {
  return (
    <>
      <ControlsContainer>
        <ControlsWrapper>
          <ControlsButton onClick={()=> sortAsc()}>SORT ASC</ControlsButton>
          <ControlsButton onClick={()=> sortDesc()}>SORT DESC</ControlsButton>
        </ControlsWrapper>
        <ControlsWrapper>
          <ControlsSubmitButton onClick={()=> submit()}>Submit</ControlsSubmitButton>
        </ControlsWrapper>
      </ControlsContainer>
    </>
  );
};

export default Controls;
