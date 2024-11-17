import React, { useState } from 'react'
import styled from 'styled-components'

const Cancelbutton = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const handleCancelDelete = () => {
        setShowConfirmModal(false);
      };

  return (
    <Button onClick={handleCancelDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
        <path d="M13.5 1L1.5 13M1.5 1L13.5 13" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </Button>
  )
}

export default Cancelbutton

const Button = styled.div`
display: flex;
width: 100%;
padding-right: 30px;
padding-top: 20px;
height: auto;
justify-content: right;
align-items: right;
`;