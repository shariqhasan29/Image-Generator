import React, { useState } from 'react'
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

  const[generateImageLoading, setGenerateImageLoading]= useState(false)
  const[createPostLoading, setCreatePostLoading]= useState(false)
  const [post, setPost] = useState({

    author: "",
    prompt: "",
    photo: ""

  })


  return (
    <Container>
      <Wrapper>
        <GenerateImageForm 
            createPostLoading={createPostLoading}
            setcreatePostLoading={setCreatePostLoading}
            generateImageLoading={generateImageLoading}
            setGenerateImageLoading={setGenerateImageLoading}
            post={post}
            setPost={setPost}
        
        />
        <GeneratedImageCard src = {post.photo} loading = {generateImageLoading}/>

      </Wrapper>
    </Container>
  )
}

export default Createpost