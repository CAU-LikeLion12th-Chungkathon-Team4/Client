import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isFull } from "../../api/api_nutAdd.js";

const CopyModal = ({ isOwner, yourUrlRndValue }) => {
  const [showClipboardMessage, setShowClipboardMessage] = useState(false);
  const navigate = useNavigate();

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const input = document.createElement("input");
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
    } catch (error) {
      console.error("복사 실패:", error);
      alert("복사에 실패했습니다. URL을 직접 복사해주세요.");
    }
  };

  const handleGiftButtonClick = async (e) => {
    e.preventDefault();
    const response = await isFull(yourUrlRndValue);

    if (response.data.isFull) {
      alert("도토리가 가득 찼어요!! 더 이상 보낼 수 없어요!!");
    } else if (isOwner) {
      const currentUrl = window.location.href;
      try {
        await copyToClipboard(currentUrl);
        setShowClipboardMessage(true);
        setTimeout(() => setShowClipboardMessage(false), 3000);
      } catch (error) {
        console.error("복사 실패:", error);
      }
    } else {
      navigate(`/gift/${yourUrlRndValue}`);
    }
  };

  return (
    <div>
      <button onClick={handleGiftButtonClick}>
        {isOwner ? "도토리 요청하기" : "도토리 선물하기"}
      </button>
      {showClipboardMessage && (
        <div className="clipboard-message">
          클립보드에 복사되었습니다.
          <br />
          친구들에게 링크를 공유해 보세요!
        </div>
      )}
    </div>
  );
};

export default CopyModal;
