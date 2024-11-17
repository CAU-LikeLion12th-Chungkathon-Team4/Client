import React from 'react'

const LogoutModal = () => {
  return (
    <Content>
    <Modal>
    <buttons>
    <button onClick={handleConfirmDelete}>내 정보</button>
    <button onClick={handleCancelDelete}>로그아웃</button>
    </buttons>
  </Modal>
    </Content>
}

export default LogoutModal
