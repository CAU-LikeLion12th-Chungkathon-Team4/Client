// 도토리 확인 모달 창
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CancelButton from "./CancelButton";
import {
  dotoriCollectionOpen,
  dotoriDelete,
  dotoriPictureList,
} from "../api/api_dotori";

const DotoriModal = ({ setdotoriModalOpen, clickedImgNum }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [dotoriData, setDotoriData] = useState(""); // 도토리 주머니 정보
  const [dotoriPicture, setDotoriPicture] = useState([]); //
  const [currentImg, setCurrentImg] = useState(0); // 미리보기 인덱스 관리
  const navigate = useNavigate();

  const { urlRnd } = useParams();

  const closeModal = () => {
    setIsOpen(false);
    setdotoriModalOpen(false);
  };

  const handleDeleteClick = () => {
    if (localStorage.getItem("urlRnd") === urlRnd) {
      setShowConfirmModal(true);
    } else {
      alert("도토리 주인이 아니에요!!")
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

  const handleConfirmDelete = async (dotoriNum) => {
    console.log(dotoriNum);
    try {
      const response = await dotoriDelete(dotoriNum);
      console.log(response.data);

      // 삭제된 도토리를 dotoriPicture에서 제거
      const updatedPictures = dotoriPicture.filter(
        (item, index) => index !== currentImg
      );

      // 삭제 후 다음 이미지를 선택
      if (updatedPictures.length > 0) {
        const nextImgIndex =
          currentImg >= updatedPictures.length ? 0 : currentImg;
        setCurrentImg(nextImgIndex);
      }

      setDotoriPicture(updatedPictures); // 상태 업데이트
      setShowConfirmModal(false);

      // 사진 하나도 없으면 모달창 닫음 + 페이지 리렌더링
      if (updatedPictures.length === 0) {
        closeModal();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 도토리 정보 가져오기
  useEffect(() => {
    const getDotoriData = async () => {
      try {
        const response = await dotoriCollectionOpen(clickedImgNum);
        const responsePicture = await dotoriPictureList(clickedImgNum);

        const pictures = responsePicture.data.dotoris.map((item) => ({
          dotoriNum: item.id,
          photoUrl: item.photoUrl,
        }));

        setDotoriData(response.data);
        setDotoriPicture(pictures);
      } catch (error) {
        console.error(error);
      }
    };
    getDotoriData();
  }, [clickedImgNum]);

  // 이전 이미지로 이동
  const goPrev = () => {
    if (dotoriPicture.length > 0) {
      const prevIndex =
        currentImg === 0 ? dotoriPicture.length - 1 : currentImg - 1;
      setCurrentImg(prevIndex); // 이전 이미지로 이동
    }
  };

  // 다음 이미지로 이동
  const goNext = () => {
    if (dotoriPicture.length > 0) {
      const nextIndex =
        currentImg === dotoriPicture.length - 1 ? 0 : currentImg + 1;
      setCurrentImg(nextIndex); // 다음 이미지로 이동
    }
  };

  return (
    <Modal>
      <CancelButton onClick={closeModal} />
      <h1>
        <p2>{dotoriData.sender}</p2>님이 보낸 도토리
      </h1>
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
      <Line>
        <Arrow onClick={goPrev}>&lt;</Arrow>
        <Picture src={dotoriPicture[currentImg]?.photoUrl} />
        <Arrow onClick={goNext}>&gt;</Arrow>
      </Line>

      <TextBox>
        <h2>{dotoriData.message}</h2>
      </TextBox>

      {showConfirmModal && (
        <ConfirmModal>
          <p>
            도토리를 삭제하면 <p1>다시 복구하지 못해요.</p1> 정말
            삭제하시겠어요?
          </p>
          <buttons>
            <button
              onClick={() =>
                handleConfirmDelete(dotoriPicture[currentImg]?.dotoriNum)
              }
            >
              삭제
            </button>
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
    font-family: BMJUA;
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
    font-family: BMJUA;
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
    font-family: BMJUA;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const DeleteBtn = styled.div`
  width: 75%;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 5px;
`;

const Modal = styled.div`
  display: flex;
  width: 327px;
  height: auto;
  padding-top: 5px;
  padding-bottom: 20px;
  padding-right: 4px;
  padding-left: 4px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  h1 {
    color: #000;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
    /* text/head 2 */
    font-family: BMJUA;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
  p2 {
    color: var(--main, #823b09);
    font-family: BMJUA;
  }
  h2 {
    color: #000;

    /* text/body 1 */
    font-family: BMJUA;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  h5 {
    color: var(--neutral-500, #737373);
    text-align: center;

    /* text/body 2 */
    font-family: BMJUA;
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
const Picture = styled.img`
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

const Arrow = styled.div`
  cursor: pointer;
  color: #823b09;
  font-size: 30px;
  position: relative;
  //z-index: 4px;
  //margin-bottom: 22%;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
