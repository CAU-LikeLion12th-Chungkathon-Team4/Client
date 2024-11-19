import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { isFull } from "../../api/api_nutAdd.js";

const GiftButton = ({ yourUrlRndValue, userData, setShowClipboardMessage }) => {
  const navigate = useNavigate();

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setShowClipboardMessage(true);
          setTimeout(() => setShowClipboardMessage(false), 3000);
        })
        .catch((err) => console.error("복사 실패:", err));
    } else {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setShowClipboardMessage(true);
      setTimeout(() => setShowClipboardMessage(false), 3000);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await isFull(yourUrlRndValue);

    if (response.data.isFull) {
      alert("도토리가 가득 찼어요!! 더 이상 보낼 수 없어요!!");
    } else if (userData.isOwner) {
      copyToClipboard(window.location.href);
    } else {
      navigate(`/gift/${yourUrlRndValue}`);
    }
  };

  return (
    <StyledButton onClick={handleClick}>
      {userData.isOwner ? "도토리 요청하기" : "도토리 선물하기"}
    </StyledButton>
  );
};

export default GiftButton;

const StyledButton = styled.button`
  background-color: #823b09;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #9b4b0b;
  }
`;
