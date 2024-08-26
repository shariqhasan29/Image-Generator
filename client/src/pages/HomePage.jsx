import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
    height: 100%;
    overflow-y: scroll;
    padding: 30px 30px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    

`;

const HomePage = () => {
  return (
    <Container>Home</Container>
  )
}

export default HomePage