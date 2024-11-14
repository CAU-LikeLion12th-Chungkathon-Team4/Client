import React from "react";
import styled from "styled-components";

const DefaultButton = ({ buttonText, buttonFunc }) => {
  return <Button onClick={buttonFunc}>{buttonText}</Button>;
};

export default DefaultButton;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50.8%;
  height: 5.541%;
  background-color: #823b09;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 4%;
`;
