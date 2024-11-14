import React, { useState } from 'react'
import QuizModal from './QuizModal';
import styled from 'styled-components';
import DotoriModal from './DotoriModal';

const ModalTestPage = () => {
  const [quizmodalOpen, setquizModalOpen] = useState(false);
  const [dotorimodalOpen, setdotoriModalOpen] = useState(false);

return (
    <Container>
      {/* 배경이미지 넣기 위한 rapper */}
      <BackgroundWrapper>
        {/* <BackgroundImage src="/source/testImg.png" alt="Background" /> */}
      </BackgroundWrapper>
      <Content>
        <div className={'btn-wrapper'}>
        <button className={'modal-open-btn'} onClick={() => setquizModalOpen(true)}>
        퀴즈 모달
        </button>
        <button className={'modal-open-btn'} onClick={() => setdotoriModalOpen(true)}>
        도토리 모달
        </button>
      </div>
      {
        quizmodalOpen && (
          <QuizModal setquizModalOpen={setquizModalOpen} /> ) }
                {
        dotorimodalOpen && (
          <DotoriModal setdotoriModalOpen={setdotoriModalOpen} /> ) }
      </Content>
    </Container>
  );
};

export default ModalTestPage

const Container = styled.div`
  display: 100%;
  display: flex;
  flex-direction: column;
  background-color: bisque;
`;

const BackgroundWrapper = styled.div`
  display: 100%;
  position: absolute;
  top: 0;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;