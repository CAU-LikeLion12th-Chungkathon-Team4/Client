// 퀴즈 모달 창
import { useEffect, useState } from "react";
import CorrectModal from "./CorrectModal";
import WrongModal from "./WrongModal";
import styled from "styled-components";
import CancelButton from "./CancelButton";
import { getQuiz, replyQuiz } from "../api/api_quiz";

const QuizModal = ({ setquizModalOpen, clickedImgNum }) => {
  const [quizData, setQuizData] = useState(""); // 퀴즈 데이터 저장
  const [isCorrect, setIsCorrect] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setquizModalOpen(false);
  };

  const handleAnswer = async(userAnswer) => {
    const response = await replyQuiz(clickedImgNum, userAnswer)
    //console.log(response.data)
    if (userAnswer === quizData.answer) {
      setIsCorrectModalOpen(true);
    } else {
      setIsWrongModalOpen(true);
    }
  };

  // 퀴즈 데이터 가져오기
  useEffect(() => {
    const getQuizData = async () => {
      try {
        const response = await getQuiz(clickedImgNum);
        setQuizData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getQuizData();
  }, [clickedImgNum]);

  return (
    <>
      {isCorrectModalOpen === true && <CorrectModal setquizModalOpen={setquizModalOpen} setIsCorrectModalOpen={setIsCorrectModalOpen} />}
      {isWrongModalOpen === true && <WrongModal setquizModalOpen={setquizModalOpen} setIsWrongModalOpen={setIsWrongModalOpen} />}
      {isOpen === true && (
        <Modal>
          <CancelButton onClick={closeModal} />
          <h1>
            <p2>{quizData.sender}</p2>님이 보낸 퀴즈
          </h1>
          <QuizBox>
            <h2>
              <p2>Q. </p2>
              {quizData.question}
            </h2>
          </QuizBox>
          <ButtonContainer>
            <button onClick={() => handleAnswer(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_244_2006)">
                  <path d="M30 8.75C26.1458 8.75 22.5911 9.70052 19.3359 11.6016C16.0807 13.5026 13.5026 16.0807 11.6016 19.3359C9.70052 22.5911 8.75 26.1458 8.75 30C8.75 33.8542 9.70052 37.4089 11.6016 40.6641C13.5026 43.9193 16.0807 46.4974 19.3359 48.3984C22.5911 50.2995 26.1458 51.25 30 51.25C33.8542 51.25 37.4089 50.2995 40.6641 48.3984C43.9193 46.4974 46.4974 43.9193 48.3984 40.6641C50.2995 37.4089 51.25 33.8542 51.25 30C51.25 26.1458 50.2995 22.5911 48.3984 19.3359C46.4974 16.0807 43.9193 13.5026 40.6641 11.6016C37.4089 9.70052 33.8542 8.75 30 8.75ZM60 30C60 35.4427 58.6589 40.4622 55.9766 45.0586C53.2943 49.6549 49.6549 53.2943 45.0586 55.9766C40.4622 58.6589 35.4427 60 30 60C24.5573 60 19.5378 58.6589 14.9414 55.9766C10.3451 53.2943 6.70573 49.6549 4.02344 45.0586C1.34115 40.4622 0 35.4427 0 30C0 24.5573 1.34115 19.5378 4.02344 14.9414C6.70573 10.3451 10.3451 6.70573 14.9414 4.02344C19.5378 1.34115 24.5573 0 30 0C35.4427 0 40.4622 1.34115 45.0586 4.02344C49.6549 6.70573 53.2943 10.3451 55.9766 14.9414C58.6589 19.5378 60 24.5573 60 30Z" />
                </g>
                <defs>
                  <clipPath id="clip0_244_2006">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button onClick={() => handleAnswer(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.0001 34.0732L44.6767 51.7499C45.6147 52.6879 46.8869 53.2148 48.2134 53.2148C49.5399 53.2148 50.8121 52.6879 51.7501 51.7499C52.688 50.8119 53.215 49.5397 53.215 48.2132C53.215 46.8867 52.688 45.6145 51.7501 44.6765L34.0667 26.9999L51.7467 9.32321C52.211 8.85877 52.5791 8.30744 52.8303 7.7007C53.0815 7.09396 53.2106 6.4437 53.2105 5.78703C53.2103 5.13037 53.0808 4.48016 52.8294 3.87354C52.578 3.26692 52.2095 2.71577 51.7451 2.25155C51.2806 1.78732 50.7293 1.41912 50.1226 1.16797C49.5158 0.916821 48.8656 0.787634 48.2089 0.787789C47.5522 0.787944 46.902 0.917436 46.2954 1.16887C45.6888 1.42031 45.1376 1.78877 44.6734 2.25321L27.0001 19.9299L9.3234 2.25321C8.86239 1.77545 8.31084 1.39428 7.70095 1.13195C7.09105 0.869625 6.43502 0.731387 5.77113 0.725307C5.10724 0.719227 4.44878 0.845426 3.83419 1.09654C3.21959 1.34766 2.66116 1.71866 2.19147 2.1879C1.72179 2.65714 1.35026 3.21522 1.09857 3.82958C0.846876 4.44394 0.720057 5.10228 0.725511 5.76617C0.730964 6.43007 0.868582 7.08623 1.13034 7.69637C1.39209 8.30651 1.77274 8.85842 2.25006 9.31988L19.9334 26.9999L2.2534 44.6799C1.77607 45.1413 1.39542 45.6932 1.13367 46.3034C0.871917 46.9135 0.734298 47.5697 0.728844 48.2336C0.72339 48.8975 0.850209 49.5558 1.1019 50.1702C1.3536 50.7845 1.72513 51.3426 2.19481 51.8119C2.66449 52.2811 3.22292 52.6521 3.83752 52.9032C4.45212 53.1543 5.11057 53.2805 5.77446 53.2744C6.43835 53.2684 7.09439 53.1301 7.70428 52.8678C8.31418 52.6055 8.86572 52.2243 9.32673 51.7465L27.0001 34.0732Z"
                />
              </svg>
            </button>
          </ButtonContainer>
          <h5>
            정답을 맞히면 도토리에 담긴 추억을 확인할 수 있어요. 틀릴 경우
            친구가 보낸 도토리들이 자동으로 삭제되니 반드시 정답을 맞혀주세요!
          </h5>
        </Modal>
      )}
    </>
  );
};

export default QuizModal;

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
    font-size: 20px;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
  p2 {
    color: var(--main, #823b09);
  }
  h2 {
    color: #000;
    width: 90%;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  h5 {
    color: var(--neutral-500, #737373);
    text-align: center;
    width: 86%;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
  button {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;

const QuizBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  align-self: center;
  border-radius: 6px;
  border: 1px solid var(--neutral-300, #d4d4d4);
  background: #fff;
`;

const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 13px;
  align-self: center;
  margin-top: 15px;
  button {
    display: flex;
    width: 140px;
    height: 140px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid var(--neutral-300, #d4d4d4);
    background: #fff;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.12);
    transition: background-color 0.3s, color 0.3s;
    svg {
      fill: rgb(121, 63, 25);
    }
  }
  button:hover {
    background: rgb(121, 63, 25);
    svg {
      fill: #fff;
    }
  }
`;
