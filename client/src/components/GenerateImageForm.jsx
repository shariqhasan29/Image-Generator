import React from 'react'
import styled from 'styled-components'
import Button  from './Button';
import TextInput from "./TextInput"
import { AutoAwesome, CreateRounded } from "@mui/icons-material";

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;


const GenerateImageForm = () => {
  return (
    <Form>
        <Top>
            <Title>
                Generate Image With Prompt
            </Title>
            <Desc>
                Write your prompt
            </Desc>
        </Top>
        <Body>
            <TextInput
            label="Author"
            placeholder="Enter your name"
            name="name"
            
            />
            <TextInput
            label="Image Prompt"
            placeholder="Write a detailed prompt about the image"
            name="prompt"
            textArea
            rows="8"
            />

            * You can post the AI Generated Image to showcase in the community!
        </Body>
        <Actions>
            Actions
        </Actions>
        <Button  
            text="Generate Image"
            leftIcon={<AutoAwesome />}
            flex
        />
        <Button  
            text="Post Image"
            leftIcon={<CreateRounded />}
            flex
            type="secondary"
        />
    </Form>
  )
}

export default GenerateImageForm