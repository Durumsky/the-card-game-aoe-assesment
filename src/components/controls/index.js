import React from "react";
import {
  ControlsContainer,
  ControlsWrapper,
  ControlsButton,
  ControlsSubmitButton
} from "./controlElements";

const Controls = () => {
  return (
    <>
      <ControlsContainer>
        <ControlsWrapper>
          <ControlsButton>SORT ASC</ControlsButton>
          <ControlsButton>SORT DESC</ControlsButton>
        </ControlsWrapper>
        <ControlsWrapper>
          <ControlsSubmitButton>Submit</ControlsSubmitButton>
        </ControlsWrapper>
      </ControlsContainer>
    </>
  );
};

export default Controls;
