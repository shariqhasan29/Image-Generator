import React from 'react'
import styled from 'styled-components';
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';


const Container = styled.div`
    
    height: 100%;
    background: ${({theme}) => theme.bg};
    overflow-y: scroll;
    padding: 30px 30px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    @media(max-width:768){
      padding: 6px 10px;

    }

`;

const Headline = styled.div`

    font-size: 34px;
    font-weight: 500;
    color: ${({theme})=> theme.text_primary};
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(max-width: 600){
      font-size: 22px: 
    }


`

const Wrapper = styled.div`

  display: flex;
  flex:1;
  height: fit-content;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  gab: 8%

  @media (max-width: 768px) {
    flex-direction: column;
  }


`

const Createpost = () => {
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm/>
        <GeneratedImageCard/>

      </Wrapper>
    </Container>
  )
}

export default Createpost