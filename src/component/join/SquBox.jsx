import React from 'react'
import styled from 'styled-components';

const SquBox = () => {
  return (
    <Container>
        <Title>| STEP 1|</Title>
        <Text>원하는 다람쥐를 선택해 주세요</Text>
        <SubContainer>
            <Arrow>&lt;</Arrow>
            <Img/>
            <Arrow>&gt;</Arrow>

        </SubContainer>


    </Container>
  )
}

export default SquBox

const Container = styled.div`
  width: 91.4668%;
  height : 55.9113%;
  border-radius: 7%;
  background-color: rgba(255, 255, 255, 0.85);
`;

const Title = styled.div`
    color: #823b09;
    font-size:24px;
    font-weight: 200;
`
const Text = styled.div`
    
`
const SubContainer = styled.div`
    
`
const Arrow = styled.div`
    
`
const Img = styled.div`
    
`