// 도토리 확인 모달 창
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CancelButton from "./CancelButton";
import { dotoriCollectionOpen, dotoriDelete, dotoriPictureList } from "../api/api_dotori";

const DotoriModal = ({setdotoriModalOpen, clickedImgNum}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [dotoriData, setDotoriData] = useState(""); // 도토리 주머니 정보
  const [dotoriPicture, setDotoriPicture] = useState("")//
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
    setdotoriModalOpen(false);
  };

  const dummy = {
    username: "김다람",
    picture: "/source/chicken.png",
    text: "이 때 먹었던 치킨.. 눈물나게 맛있었잖아.. 기억나지..? 이때 우리...^^ 두번째 줄 다 채워서 세 번째줄까지 쓰게 되면 이렇게기이얼지는데",
  };

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

  const handleConfirmDelete = () => {
    // 서버에서 데이터 삭제 로직 추가
    console.log("도토리 삭제");
    setShowConfirmModal(false);
    navigate(`/home`);
  };

   // 도토리 정보 가져오기
   useEffect(() => {
    const getDotoriData = async () => {
      try {
        const response = await dotoriCollectionOpen(clickedImgNum);
        const responsePicture = await dotoriPictureList(clickedImgNum);
        setDotoriData(response.data);
        setDotoriPicture(responsePicture.data);
      } catch (error) {
        console.error(error);
      }
    };

    getDotoriData();
  }, [clickedImgNum]);

  return (
    <Modal>
      <CancelButton onClick={closeModal} />
      <DeleteBtn onClick={handleDeleteClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
        >
          <path
            d="M1 3.8H2.33333M2.33333 3.8H13M2.33333 3.8V13.6C2.33333 13.9713 2.47381 14.3274 2.72386 14.5899C2.97391 14.8525 3.31304 15 3.66667 15H10.3333C10.687 15 11.0261 14.8525 11.2761 14.5899C11.5262 14.3274 11.6667 13.9713 11.6667 13.6V3.8M4.33333 3.8V2.4C4.33333 2.0287 4.47381 1.6726 4.72386 1.41005C4.97391 1.1475 5.31304 1 5.66667 1H8.33333C8.68696 1 9.02609 1.1475 9.27614 1.41005C9.52619 1.6726 9.66667 2.0287 9.66667 2.4V3.8M5.66667 7.3V11.5M8.33333 7.3V11.5"
            stroke="#737373"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </DeleteBtn>
      <h1>
        <p2>{dummy.username}</p2>님이 보낸 도토리
      </h1>
      <Picture src={dummy.picture} />
      <TextBox>
        <h2>{dummy.text}</h2>
      </TextBox>
      {showConfirmModal && (
        <ConfirmModal>
          <p>
            도토리를 삭제하면 <p1>다시 복구하지 못해요.</p1> 정말
            삭제하시겠어요?
          </p>
          <buttons>
            <button onClick={handleConfirmDelete}>삭제</button>
            <button onClick={handleCancelDelete}>취소</button>
          </buttons>
        </ConfirmModal>
      )}
    </Modal>
  );
};

export default DotoriModal;

const ConfirmModal = styled.div`
  display: flex;
  width: 341px;
  height: 143px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  p {
    color: #000;
    text-align: center;

    /* text/body 1 */
    font-family: "BM JUA_TTF";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    margin-bottom: 20px;
    width: 238px;
  }
  p1 {
    color: var(--600, #dc2626);

    /* text/body 1 */
    font-family: "BM JUA_TTF";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  buttons {
    display: flex;
    flex-direction: row;
    width: 316px;
    height: 45px;
    justify-content: space-between;
  }
  button {
    display: flex;
    width: 153px;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid var(--main, #823b09);
    background: var(--white, #fff);
    color: var(--main, #823b09);
    font-family: "BM JUA_TTF";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const DeleteBtn = styled.div`
  width: 12px;
  height: 14px;
  stroke-width: 1.5px;
  stroke: var(--neutral-500, #737373);
`;

const Modal = styled.div`
  display: flex;
  width: 327px;
  height: auto;
  padding: 4px 5px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  h1 {
    color: #000;
    text-align: center;

    /* text/head 2 */
    font-family: "BM JUA_TTF";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
  p2 {
    color: var(--main, #823b09);
  }
  h2 {
    color: #000;

    /* text/body 1 */
    font-family: "BM JUA_TTF";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  h5 {
    color: var(--neutral-500, #737373);
    text-align: center;

    /* text/body 2 */
    font-family: "BM JUA_TTF";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
  > svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;
const Picture = styled.div`
  width: 243px;
  height: 243px;
  border-radius: 6px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 20px;
`;

const TextBox = styled.div`
  display: flex;
  width: 241px;
  height: 109px;
  padding: 12px 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--main, #823b09);
  background: #fef4e8;
`;
